
# 🎥 YouTube Chat Bot

![Python](https://img.shields.io/badge/Python-3.11-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-009688)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![LangChain](https://img.shields.io/badge/LangChain-RAG-orange)
![Groq](https://img.shields.io/badge/Groq-LLM-black)
![FAISS](https://img.shields.io/badge/FAISS-VectorDB-red)
![License](https://img.shields.io/badge/License-MIT-blue)

An AI-powered Retrieval-Augmented Generation (RAG) application that allows users to **chat with any YouTube video that has an available transcript**. Simply paste a YouTube URL, and the application retrieves the transcript, creates vector embeddings, and answers your questions using **Groq LLM**, **Google Gemini Embeddings**, and **LangChain**.

---

# ✨ Features

- 📺 Chat with YouTube videos using their transcripts
- 📝 Automatic transcript extraction
- ✂️ Intelligent text chunking
- 🔍 Semantic search using FAISS vector database
- ⚡ High-speed AI inference with Groq
- 🧠 Google Gemini Embeddings for vector generation
- 🤖 Retrieval-Augmented Generation (RAG)
- 🌐 REST API built with Node.js & Express
- 🚀 FastAPI-powered AI backend
- 🎨 Responsive frontend built using HTML, Tailwind CSS and JavaScript

---

# 🏗️ Architecture

```text
                     User
                       │
                       ▼
          Frontend (HTML + Tailwind + JS)
                       │
                       ▼
              Node.js + Express API
                       │
                       ▼
            FastAPI + LangChain Service
                       │
         ┌─────────────┴──────────────┐
         │                            │
         ▼                            ▼
YouTube Transcript API       Gemini Embeddings
         │                            │
         └─────────────┬──────────────┘
                       ▼
                    FAISS
                       │
                       ▼
              Groq LLM (Llama 3)
                       │
                       ▼
                 AI Generated Answer
```

---

# 🏗️ Project Structure

```text
Youtube_bot/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── index.html
│   ├── js/
│   │   └── index.js
│   └── styles/
│
├── python/
│   ├── main.py
│   ├── chatbot.py
│   ├── requirements.txt
│   └── .env
│
└── README.md
```

---

# 🛠️ Tech Stack

## Frontend

- HTML5
- Tailwind CSS
- JavaScript

## Backend

- Node.js
- Express.js

## AI Backend

- FastAPI
- LangChain
- Groq API
- Llama 3 (via Groq)
- Google Gemini Embeddings
- FAISS Vector Store
- YouTube Transcript API

---

# ⚙️ How It Works

1. User enters a YouTube video URL.
2. Node.js sends the URL to the FastAPI backend.
3. The transcript is extracted using the YouTube Transcript API.
4. LangChain splits the transcript into smaller chunks.
5. Google Gemini Embeddings converts each chunk into vector embeddings.
6. FAISS stores those embeddings.
7. When the user asks a question:
   - Relevant transcript chunks are retrieved using similarity search.
   - The retrieved context is passed to the Groq LLM.
   - Groq generates an answer based only on the retrieved transcript context.
8. The response is returned to the frontend.

---

# 🚀 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/Youtube-ChatBot.git

cd Youtube-ChatBot
```

---

# Backend Setup

```bash
cd backend

npm install

npm run dev
```

Server starts at

```
http://localhost:3000
```

---

# Python AI Backend

Create a virtual environment

```bash
python -m venv venv
```

### Windows

```bash
venv\Scripts\activate
```

### macOS/Linux

```bash
source venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Create a `.env` file inside the **python** folder.

```env
GOOGLE_API_KEY=YOUR_GEMINI_API_KEY
GROQ_API_KEY=YOUR_GROQ_API_KEY
```

Start FastAPI

```bash
uvicorn main:app --reload
```

FastAPI runs on

```
http://127.0.0.1:8000
```

---

# Frontend

Open

```
frontend/index.html
```

or use

- VS Code Live Server

---

# API Endpoints

## Load Video

**POST**

```
/chat
```

Request

```json
{
  "url": "https://www.youtube.com/watch?v=VIDEO_ID"
}
```

---

## Ask Question

**POST**

```
/question
```

Request

```json
{
  "question": "What is this video about?"
}
```

---

# Environment Variables

```env
GOOGLE_API_KEY=YOUR_GEMINI_API_KEY

GROQ_API_KEY=YOUR_GROQ_API_KEY
```

---

# Example Workflow

```text
Paste YouTube URL
        │
        ▼
Extract Transcript
        │
        ▼
Split into Chunks
        │
        ▼
Generate Embeddings
        │
        ▼
Store in FAISS
        │
        ▼
User asks Question
        │
        ▼
Retrieve Relevant Chunks
        │
        ▼
Groq LLM
        │
        ▼
Answer Returned
```

---

# Future Improvements

- Docker support
- Deployment on Railway/Koyeb/Fly.io
- User authentication
- Chat history
- Conversation memory
- Streaming AI responses
- Persistent vector database
- Multiple language transcript support
- Support multiple YouTube videos simultaneously
- Source citations with timestamps

---

# Screenshots

## Home Page

<img width="960" height="482" alt="Home Page" src="https://github.com/user-attachments/assets/b2fb522a-8b53-48c2-a639-486bd9d1da59" />

---

## Chat Interface

<img width="946" height="510" alt="Chat Interface" src="https://github.com/user-attachments/assets/67b5181c-0ebe-4f2b-801e-3b03aa3a7c41" />

---

## AI Responses

<img width="944" height="439" alt="AI Responses" src="https://github.com/user-attachments/assets/1499c592-97a9-4588-8e59-1d28db8da665" />

---

# Author

**Advaita Singh**

B.Tech Computer Science Engineering Student

### Interests

- Artificial Intelligence
- Machine Learning
- Generative AI
- Retrieval-Augmented Generation (RAG)
- Backend Development
- Full Stack Development

---

# License

This project is licensed under the **MIT License**.

Feel free to use, modify, and distribute this project under the terms of the MIT License.

