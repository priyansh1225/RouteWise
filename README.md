# 🚍 RouteWise

A modern full-stack smart transportation platform built using the MERN Stack.

RouteWise helps users find routes, view community transport updates, estimate fares, and interact with an AI-powered travel assistant.

---

# 📌 Project Overview

RouteWise is designed to simplify public transportation by providing route guidance, transport updates, fare information, and AI assistance through a clean and responsive web interface.

The project follows a modern full-stack architecture with:

- React.js Frontend
- Node.js + Express Backend
- MongoDB Database
- JWT Authentication
- REST APIs
- AI Assistant Integration

---

# ✨ Features

## 🏠 Home

- Beautiful landing page
- Hero section
- Route search
- Community updates
- Smart transport cards

---

## 👤 Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Dashboard
- Logout

---

## 📊 Dashboard

- Welcome dashboard
- User session management
- Protected routes
- Authentication check

---

## 🤖 AI Assistant (Week 7)

Integrated AI Assistant page with:

- AI Prompt Input
- Loading State
- Error Handling
- Backend API Integration
- Response Display
- RouteWise themed UI

Current backend returns demo responses and is ready for future OpenAI integration.

---

## 🌙 Theme Support

- Dark Theme
- Light Theme
- Animated Theme Toggle

---

## 📱 Responsive Design

- Mobile Friendly
- Tablet Friendly
- Desktop Friendly

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- CSS3

## Backend

- Node.js
- Express.js

## Database

- MongoDB

## Authentication

- JWT
- bcrypt

---

# 📂 Project Structure

```
RouteWise
│
├── backend
│   ├── config
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── data
│   ├── server.js
│   └── package.json
│
├── public
│
├── src
│   ├── assets
│   ├── component
│   ├── pages
│   ├── services
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── README.md
└── PROMPTS.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone <repository-link>
```

---

## Frontend

```bash
cd RouteWise

npm install

npm run dev
```

---

## Backend

```bash
cd backend

npm install

npm start
```

Server runs on

```
http://localhost:5000
```

Frontend runs on

```
http://localhost:5173
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder.

Example:

```
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

OPENAI_API_KEY=your_openai_key
```

> API keys should never be committed to GitHub.

---

# 🤖 AI API

Endpoint

```
POST /api/ask-ai
```

Example Request

```json
{
  "prompt": "Hi"
}
```

Example Response

```json
{
  "answer": "Hello! 👋 I am RouteWise AI. I can help you with routes, buses, fares and travel guidance in Dehradun."
}
```

---

# 📸 Week 7 Deliverables

✔ AI Assistant Page

✔ Backend API

✔ Loading State

✔ Error Handling

✔ Prompt Testing

✔ PROMPTS.md Documentation

✔ GitHub Commit

---

# 🔮 Future Improvements

- Real OpenAI Integration
- Live Bus Tracking
- Google Maps Integration
- Fare Prediction
- Route Optimization
- Voice Assistant
- Nearby Stops
- AI Chat History
- User Saved Routes
- Notifications

---

# 👨‍💻 Developer

**Priyansh Bhatt**

B.Tech Computer Science Engineering

Graphic Era Deemed University

---

# 📄 License

This project is developed for educational purposes as part of the Full Stack Development Internship Program.