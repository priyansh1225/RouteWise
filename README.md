# RouteWise

RouteWise is a full-stack web application built using React, Vite, Express.js, and MongoDB Atlas. It helps commuters search public transport routes, manage transport information, and securely access protected features using JWT Authentication and Google OAuth.

This project was developed as part of my Full Stack Development Internship.

---

# Features

- User Registration
- User Login
- Google OAuth Login
- JWT Authentication
- Protected Routes
- User Profile API
- Route Dashboard
- Route Search
- CRUD Operations
- Community Updates
- Responsive Design
- Dark & Light Theme
- MongoDB Atlas Database
- Input Validation
- Password Hashing using bcrypt
- Rate Limiting
- REST APIs

---

# Technologies Used

## Frontend

- React
- Vite
- React Router DOM
- Axios
- JavaScript
- CSS

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- Passport.js
- Google OAuth 2.0
- bcryptjs
- express-validator
- express-rate-limit
- CORS
- dotenv

## Tools

- MongoDB Atlas
- Postman
- GitHub
- VS Code

---

# Project Structure

```
RouteWise
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   ├── services
│   └── assets
│
├── backend
│   ├── config
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── .env
│   └── server.js
│
└── README.md
```

---

# How to Run the Project

## 1. Clone Repository

```bash
git clone https://github.com/priyansh1225/RouteWise.git
```

```bash
cd RouteWise
```

---

# Frontend Setup

Go to frontend folder

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run frontend

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# Backend Setup

Open another terminal

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret
```

Start backend

```bash
node server.js
```

Backend runs on

```
http://localhost:5000
```

---

# Authentication

The project includes:

- User Registration
- User Login
- JWT Token Authentication
- Protected Profile API
- Protected Dashboard
- Google OAuth Login
- Password Hashing
- Input Validation
- Rate Limiting

---

# API Endpoints

## Authentication

```
POST /api/auth/register
```

```
POST /api/auth/login
```

```
GET /api/profile
```

```
GET /auth/google
```

```
GET /auth/google/callback
```

---

## Routes

```
GET /routes
```

```
GET /routes/:id
```

```
GET /search?from=location
```

```
POST /routes
```

```
PUT /routes/:id
```

```
DELETE /routes/:id
```

---

# Database

MongoDB Atlas is used as the cloud database.

Collections:

- users
- routes

User Collection stores:

- Name
- Email
- Password (Encrypted)
- Provider (Local / Google)
- Google ID
- Created At
- Updated At

Route Collection stores:

- From
- To
- Vehicle
- Fare
- Created At
- Updated At

---

# Security Features

- JWT Authentication
- Protected Routes
- Password Hashing (bcrypt)
- Google OAuth 2.0
- Input Validation
- Rate Limiting
- Environment Variables

---

# Future Enhancements

- AI Route Recommendation
- Interactive Maps
- Saved Favourite Routes
- Transport Notifications
- Admin Dashboard
- User Profile Management

---

# Developer

**Priyansh Bhatt**

Full Stack Development Intern

GitHub:
https://github.com/priyansh1225