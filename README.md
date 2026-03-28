# 💬 Gemini Chat

A full-stack AI chat application built with **Spring Boot** and **React (Vite)**, powered by **Google Gemini 1.5 Flash**.

---

## 🧱 Tech Stack

| Layer     | Technology              |
|-----------|-------------------------|
| Backend   | Java, Spring Boot, WebClient |
| Frontend  | React, Vite, Axios      |
| AI Model  | Google Gemini 1.5 Flash |
| Build Tool| Maven                   |

---

## 📁 Project Structure

```
Gemini-Chat/
├── gemini-chat/                  # Spring Boot Backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/ai/gemini_chat/
│   │   │   │   ├── GeminiChatApplication.java
│   │   │   │   ├── QnAController.java
│   │   │   │   └── QnAService.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   └── pom.xml
│
└── gemini-chatfrontend/          # React Frontend
    ├── src/
    │   ├── App.jsx
    │   ├── App.css
    │   └── main.jsx
    ├── index.html
    └── package.json
```

---

## ⚙️ Setup & Installation

### Prerequisites
- Java 17+
- Node.js 18+
- Maven
- Google Gemini API Key ([Get one here](https://aistudio.google.com/app/apikey))

---

### 🔧 Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd gemini-chat
   ```

2. Set your Gemini API key as an environment variable:

   **Windows:**
   ```cmd
   set GEMINI_API_KEY=your_api_key_here
   ```

   **Mac/Linux:**
   ```bash
   export GEMINI_API_KEY=your_api_key_here
   ```

3. Configure `application.properties`:
   ```properties
   gemini.api.url=https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=
   gemini.api.key=${GEMINI_API_KEY}
   ```

4. Run the backend:
   ```bash
   mvn spring-boot:run
   ```

   Backend runs on: `http://localhost:8080`

---

### 🌐 Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd gemini-chatfrontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   Frontend runs on: `http://localhost:5173`

---

## 🔑 Environment Variables

| Variable         | Description              |
|-----------------|--------------------------|
| `GEMINI_API_KEY` | Your Google Gemini API Key |

> ⚠️ **Never hardcode your API key in the code or commit it to GitHub.**

---

## 🚀 How It Works

1. User types a question in the React frontend
2. Frontend sends a POST request to `/api/qna/ask`
3. Spring Boot backend forwards the question to Gemini 1.5 Flash API
4. Gemini responds with an answer
5. Answer is extracted and returned to the frontend
6. Frontend displays the response to the user

---

## 📡 API Endpoint

```
POST http://localhost:8080/api/qna/ask

Request Body:
{
  "question": "What is Spring Boot?"
}

Response:
{
  "answer": "Spring Boot is a framework..."
}
```

---

## 🛡️ Security Notes

- API key is stored as an environment variable, never in source code
- `.gitignore` excludes `target/`, `.idea/`, `.env` files
- CORS is configured to allow only the frontend origin

---

## 🙋‍♀️ Author

**Jiya Nair**  
[GitHub](https://github.com/Jiya-Nair)
