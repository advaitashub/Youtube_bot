from fastapi import FastAPI
from models import VideoRequest, QuestionRequest
from chatbot import load_video, ask_question

app = FastAPI()

@app.post("/chat")
def chat(video: VideoRequest):
    return load_video(video.url)

@app.post("/question")
def question(data: QuestionRequest):
    return ask_question(data.question)