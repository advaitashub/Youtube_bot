import os
import re

from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain_core.output_parsers import StrOutputParser
from youtube_transcript_api import YouTubeTranscriptApi, TranscriptsDisabled
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from youtube_transcript_api._errors import (
    TranscriptsDisabled,
    NoTranscriptFound,
    VideoUnavailable,
)
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough, RunnableLambda

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

vector_store = None
retrieval_chain = None

def format_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)

def extract_video_id(url):

    pattern = r"(?:v=|\/)([0-9A-Za-z_-]{11}).*"

    match = re.search(pattern, url)

    if match:
        return match.group(1)

    return None



def get_transcript(video_id):
    try:
        ytt_api = YouTubeTranscriptApi()
        try:
            # Try English first
            transcript_list = ytt_api.fetch(video_id, languages=["en"])
        except NoTranscriptFound:
            # Fallback to Hindi
            transcript_list = ytt_api.fetch(video_id, languages=["hi"])

        transcript = " ".join(chunk.text for chunk in transcript_list)

        return transcript

    except TranscriptsDisabled:
        raise Exception("Captions are disabled for this video.")

    except NoTranscriptFound:
        raise Exception("No transcript found for this video.")

    except VideoUnavailable:
        raise Exception("Video is unavailable.")

    except Exception as e:
        raise Exception(f"Failed to fetch transcript: {str(e)}")

def load_video(url):
    global vector_store
    global retrieval_chain

    video_id = extract_video_id(url)

    if not video_id:
        return {
            "success": False,
            "message": "Invalid YouTube URL"
        }

    transcript = get_transcript(video_id)

    if transcript is None:
        return {
            "success": False,
            "message": "Could not fetch transcript."
        }

    documents = split_text(transcript)

    vector_store = create_vector_store(documents)

    retrieval_chain = create_chain(vector_store)
    

    return {
        "success": True,
        "message": "Video loaded successfully."
    }


def split_text(transcript):

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200,
        length_function=len
    )

    documents = splitter.create_documents([transcript])

    return documents

def create_vector_store(documents):

    embeddings = GoogleGenerativeAIEmbeddings(
        model="models/gemini-embedding-001"
    )

    vector_store = FAISS.from_documents(
        documents,
        embeddings
    )

    return vector_store

def create_chain(vector_store):

    retriever = vector_store.as_retriever(
    search_type="mmr",
    search_kwargs={
        "k": 5,
        "fetch_k": 20
    }
)

    llm = llm = ChatGroq(
    model="llama-3.1-8b-instant",
    temperature=0
)

    prompt = ChatPromptTemplate.from_template("""You are an expert YouTube assistant.

Use ONLY the provided transcript context.

If the answer is not present, say:
"I couldn't find that information in the video."
 
else try to get data from web
Do not invent facts.

When appropriate, summarize clearly using bullet points.

Context:
{context}

Question:
{question}
""")

    chain = (
        {
            "context": retriever | RunnableLambda(format_docs),
            "question": RunnablePassthrough(),
        }
        | prompt
        | llm
        | StrOutputParser()
    )

    return chain

def ask_question(question):

    global retrieval_chain

    if retrieval_chain is None:
        return {
            "answer": "Please load a video first."
        }

    answer = retrieval_chain.invoke(question)

    return {
        "answer": answer
    }