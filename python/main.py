from fastapi import FastAPI, HTTPException
from models import VideoRequest, QuestionRequest
from chatbot import load_video, ask_question
import traceback

app = FastAPI()

@app.post("/chat")
def chat(video: VideoRequest):
    try:
        return load_video(video.url)
    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/question")
def question(data: QuestionRequest):
    try:
        return ask_question(data.question)
    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))