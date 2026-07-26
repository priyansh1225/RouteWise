# 🚌 RouteWise

RouteWise is a Full Stack Smart Public Transport Management System developed using the MERN Stack. It helps users search transport routes, receive community travel updates, and interact with an AI-powered travel assistant for guidance.

The project focuses on improving the public transportation experience through route management, community collaboration, authentication, and AI-assisted support.

---

# Features

## User Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Dashboard
- Google OAuth Login

---

## Dashboard
- Protected Dashboard
- Authentication Status
- Backend Status
- AI Assistant Status
- Community Updates Overview

---

## Community Updates
- Add New Update
- View All Updates
- Edit Existing Update
- Delete Updates
- Real-time MongoDB Integration

---

## AI Assistant
- Route Guidance
- Fare Information
- Bus Information
- Vikram Information
- Travel Tips
- Traffic Suggestions
- Smart Predefined AI Responses

---

## Search
- Search Routes
- Easy Route Lookup

---

## UI Features
- Responsive Design
- Dark Theme
- Light Theme
- Modern Glassmorphism UI
- Animated Buttons
- Interactive Cards
- Mobile Friendly

---

# Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- CSS3

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas
- Mongoose

## Authentication
- JWT
- Google OAuth (Passport.js)

---

# Project Structure

```
RouteWise
│
├── backend
│   ├── config
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── .env
│
├── frontend
│   ├── src
│   │   ├── assets
│   │   ├── component
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
```

---

# API Endpoints

## Authentication

### Register

```
POST /api/auth/register
```

### Login

```
POST /api/auth/login
```

### User Profile

```
GET /api/profile
```

---

## Community Updates

### Get All Updates

```
GET /api/updates
```

### Create Update

```
POST /api/updates
```

### Update Existing Update

```
PUT /api/updates/:id
```

### Delete Update

```
DELETE /api/updates/:id
```

---

## AI Assistant

### Ask AI

```
POST /api/ask-ai
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/routewise.git
```

---

## Backend

```bash
cd backend
npm install
npm start
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# Environment Variables

Create a `.env` file inside the backend folder.

```
MONGO_URI=Your MongoDB Connection String

JWT_SECRET=Your JWT Secret

GOOGLE_CLIENT_ID=Your Client ID

GOOGLE_CLIENT_SECRET=Your Client Secret
```

---

# Screenshots

## Home Page

(Add Screenshot)

---

## Login

(Add Screenshot)

---

## Register

(Add Screenshot)

---

## Dashboard

(Add Screenshot)

---

## Community Updates CRUD

(Add Screenshot)

---

## AI Assistant

(Add Screenshot)

---

## Responsive Design

(Add Desktop Screenshot)

(Add Mobile Screenshot)

---

## Network Requests

(Add Browser Network Screenshot)

---

# CRUD Operations

Community Updates module supports full CRUD functionality.

- Create Update
- Read Updates
- Update Existing Update
- Delete Update

All operations are connected to MongoDB Atlas using Express APIs.

---

# Authentication Flow

- User Registration
- User Login
- JWT Token Generation
- Protected Routes
- Google OAuth Login

---

# AI Assistant

The RouteWise AI Assistant provides predefined intelligent responses for:

- Route Guidance
- Bus Information
- Fare Information
- Vikram Services
- Traffic Information
- Travel Tips

---

# Future Enhancements

- Live Bus Tracking
- Google Maps Integration
- Route Optimization
- AI Route Prediction
- Admin Dashboard
- User Feedback System
- Push Notifications
- Real-Time Bus Locations
- Driver Portal
- Passenger Ratings

---

# Challenges Faced

- MongoDB Atlas Connection Issues
- JWT Authentication Integration
- Protected Route Management
- CRUD API Integration
- Responsive UI Design
- AI Assistant Integration
- Theme Switching
- Backend API Testing

---

# Learning Outcomes

During the development of RouteWise, the following concepts were implemented and practiced:

- MERN Stack Development
- REST API Development
- MongoDB CRUD Operations
- JWT Authentication
- Google OAuth
- React State Management
- Axios API Integration
- Responsive UI Design
- Git & GitHub Workflow

---

# Author

**Priyansh Bhatt**

B.Tech CSE (Cyber Security)

Graphic Era Deemed University

---

# License

This project is developed for educational and internship purposes.