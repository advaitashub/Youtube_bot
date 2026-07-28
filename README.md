# 🎥 YouTube Chat Bot

An AI-powered chatbot that allows users to chat with any YouTube video using its transcript. Simply paste a YouTube video URL, and the application retrieves the transcript, creates vector embeddings, and answers questions using Google's Gemini LLM with Retrieval-Augmented Generation (RAG).

---

## ✨ Features

- 📺 Chat with any YouTube video
- 📝 Automatic transcript extraction
- 🔍 Semantic search using FAISS vector database
- 🤖 AI-powered responses with Google Gemini
- ⚡ FastAPI backend for LLM processing
- 🌐 Node.js & Express API server
- 🎨 Responsive frontend built with HTML, Tailwind CSS, and JavaScript
- 🧠 Retrieval-Augmented Generation (RAG) architecture

---

## 🏗️ Project Structure

```
Youtube_bot/
│
├── backend/                 # Node.js + Express API
│   ├── controllers/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── index.html
│   ├── js/
│   │   └── index.js
│   └── styles/
│
├── python/                  # FastAPI + LangChain
│   ├── main.py
│   ├── chatbot.py
│   ├── requirements.txt
│   └── .env
│
└── README.md
```

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- Tailwind CSS
- JavaScript

### Backend
- Node.js
- Express.js

### AI Backend
- FastAPI
- LangChain
- Google Gemini 2.5 Flash
- Gemini Embeddings
- FAISS
- YouTube Transcript API

---

## ⚙️ How It Works

1. User enters a YouTube video URL.
2. Node.js sends the URL to the Python FastAPI service.
3. The transcript is fetched using the YouTube Transcript API.
4. The transcript is split into smaller chunks.
5. Gemini Embeddings convert the chunks into vectors.
6. FAISS stores the embeddings for semantic retrieval.
7. When the user asks a question:
   - Relevant transcript chunks are retrieved.
   - Gemini generates an answer using only the retrieved context.
8. The response is returned to the frontend.

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/Youtube-ChatBot.git

cd Youtube-ChatBot
```

---

## Backend Setup

```bash
cd backend

npm install

npm run dev
```

Backend runs on:

```
http://localhost:3000
```

---

## Python AI Server Setup

Create a virtual environment:

```bash
python -m venv venv
```

Activate it.

### Windows

```bash
venv\Scripts\activate
```

### macOS/Linux

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file:

```env
GOOGLE_API_KEY=YOUR_API_KEY
```

Start FastAPI:

```bash
uvicorn main:app --reload
```

FastAPI runs on:

```
http://127.0.0.1:8000
```

---

## Frontend

Simply open:

```
frontend/index.html
```

or use VS Code Live Server.

---

## API Endpoints

### Load Video

```
POST /chat
```

Request

```json
{
  "url": "https://www.youtube.com/watch?v=VIDEO_ID"
}
```

---

### Ask Question

```
POST /question
```

Request

```json
{
  "question": "What is this video about?"
}
```

---

## Environment Variables

```
GOOGLE_API_KEY=YOUR_GEMINI_API_KEY
```

---

## Future Improvements

- Multiple language transcript support
- Streaming AI responses
- Conversation history
- Source citations
- Deploy on Render/Vercel
- User authentication
- Chat history storage
- Multiple video support

---

## Screenshots

<img width="960" height="482" alt="Screenshot 2026-07-28 124200" src="https://github.com/user-attachments/assets/b2fb522a-8b53-48c2-a639-486bd9d1da59" />

<img width="946" height="510" alt="Screenshot 2026-07-28 124253" src="https://github.com/user-attachments/assets/67b5181c-0ebe-4f2b-801e-3b03aa3a7c41" />

<img width="944" height="439" alt="image" src="https://github.com/user-attachments/assets/1499c592-97a9-4588-8e59-1d28db8da665" />



```
Home Page

Chat Interface

AI Responses
```

---

## Author

**Advaita Singh**

Computer Science Engineering Student

Interested in:
- Artificial Intelligence
- Machine Learning
- Full Stack Development
- Generative AI

---

## License

This project is licensed under the MIT License.
