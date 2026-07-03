# RouteWise

RouteWise is a web application made using React, Vite, and Express.js. It helps users search public transport routes and view transport-related updates. This project is being developed as part of my internship.

## Features

- Route Search
- Dashboard
- About Page
- Login Page UI
- Community Updates
- Responsive Design
- Dark and Light Mode
- Backend API using Express.js
- CRUD APIs
- Search API

## Technologies Used

### Frontend
- React
- Vite
- React Router DOM
- JavaScript
- CSS

### Backend
- Node.js
- Express.js
- CORS

### Tools
- Postman
- GitHub

## How to Run the Project

### Clone the repository

```bash
git clone https://github.com/priyansh1225/RouteWise.git
```

Go into the project folder.

```bash
cd RouteWise
```

## Run Frontend

Go to the frontend folder.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Start the frontend.

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

## Run Backend

Open another terminal.

Go to the backend folder.

```bash
cd backend
```

Install dependencies.

```bash
npm install
```

Start the server.

```bash
node server.js
```

Backend runs on:

```
http://localhost:5000
```

## API Endpoints

- GET /routes
- GET /routes/:id
- GET /search?from=Location
- POST /routes
- PUT /routes/:id
- DELETE /routes/:id

## Database

This project uses MongoDB Atlas as the database.

A Route collection is used to store route information.

Each route contains:

- from
- to
- fare
- vehicle
- createdAt
- updatedAt

## Database Setup

1. Create a MongoDB Atlas cluster.
2. Create a database user.
3. Add your IP address in Network Access.
4. Create a `.env` file in the backend folder.
5. Add the MongoDB connection string:

```env
MONGO_URI=your_mongodb_connection_string
```

6. Start the backend:

```bash
node server.js
```

## Future Plans

- Interactive Route Map
- AI Travel Assistant
- Nearby Places
- Saved Routes
- Live Transport Tracking
- User Authentication
- Admin Panel

## Developer

Priyansh Bhatt
