# 🚍 RouteWise

RouteWise is a MERN Stack based public transport web application designed
to help users find local transportation routes, fares, and travel guidance
in Dehradun.

The application combines a route database, user authentication, community
updates, and an AI-powered travel assistant to provide a simple and
user-friendly platform for accessing public transportation information.

---

# 🌐 Project Links

### Live Application

https://route-wise-sandy.vercel.app/

### Backend API

https://routewise-backend-fylq.onrender.com

### GitHub Repository

https://github.com/priyansh1225/RouteWise

### Demo Video

> YouTube Unlisted Demo: ADD_YOUR_UNLISTED_VIDEO_LINK_HERE

---

# 📌 Problem Statement

Finding reliable information about local public transportation in Dehradun
can be difficult.

Users often need to ask local transport operators or search through
different sources to find:

- Available routes
- Transport vehicles
- Approximate fares
- Suitable travel options
- Local transportation guidance

There is no single simple platform that combines these services with
AI-assisted travel guidance.

---

# 💡 Solution

RouteWise provides a centralized web platform where users can:

- Search public transport routes
- Check available vehicles
- View route fares
- Access community updates
- Create and manage an account
- Use an AI travel assistant
- Receive transportation guidance based on available RouteWise data

The AI assistant is connected to the RouteWise backend and uses relevant
route information from the MongoDB database when answering route-related
questions.

---

# ✨ Key Features

## 🗺️ Route Search

Users can enter their starting point and destination to search for
available transportation routes.

### Example

**Rispana → ISBT**

RouteWise can display:

```text
From: Rispana
To: ISBT
Vehicle: Vikram
Fare: ₹20
```

The route information is retrieved from the RouteWise database.

---

## 🤖 AI Travel Assistant

RouteWise includes an AI-powered travel assistant using the
**Google Gemini API**.

The assistant can help users with:

- Public transport questions
- Route guidance
- Fare information
- Bus information
- Vikram information
- Travel tips
- General transportation guidance

The AI assistant is specifically instructed not to invent exact
RouteWise routes or fares.

---

# 🧠 AI Implementation

The RouteWise AI system follows this process:

```text
User
  ↓
AI Chat Interface
  ↓
Express.js Backend
  ↓
Search RouteWise MongoDB Database
  ↓
Find Relevant Routes
  ↓
Send Route Data + User Question
  ↓
Google Gemini API
  ↓
AI Generated Response
  ↓
User
```

### Example

When a user asks:

```text
How can I go from Rispana to ISBT?
```

The backend searches the RouteWise database.

If the database contains:

```text
From: Rispana
To: ISBT
Vehicle: Vikram
Fare: ₹20
```

this information is provided to Gemini along with the user's question.

The AI can then generate a user-friendly response such as:

```text
To travel from Rispana to ISBT, you can use a Vikram.

Fare: ₹20

Have a safe journey!
```

This approach allows the AI to use actual RouteWise route data instead of
generating unsupported exact route or fare information.

---

# 🔐 Authentication

RouteWise provides user authentication using:

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Password Hashing using bcrypt
- MongoDB User Storage
- Google Authentication
- Logout functionality

Passwords are hashed using bcrypt before being stored in the database.

JWT tokens are used to authenticate protected API requests.

---

# 📢 Community Updates

RouteWise provides a community update system for sharing local information.

Users can access available community updates, while authorized functionality
allows updates to be added, edited, and deleted.

This can help users stay informed about transportation-related information
and local updates.

---

# 📊 Dashboard

The RouteWise dashboard provides an overview of the application.

It displays information such as:

- Total community updates
- Authentication status
- Backend status
- AI Assistant access
- Navigation to important application features

---

# 🎨 User Interface

The application includes:

- Responsive navigation
- Light theme
- Dark theme
- Route search interface
- AI chat interface
- Dashboard
- Community updates
- Responsive cards and layouts
- User authentication pages

---

# 🛠️ Technology Stack

## Frontend

- React.js
- JavaScript
- React Router DOM
- Axios
- HTML
- CSS
- Vite

## Backend

- Node.js
- Express.js
- JWT
- Passport.js
- Express Validator
- bcryptjs
- Express Rate Limit

## Database

- MongoDB Atlas
- Mongoose

## Artificial Intelligence

- Google Gemini API
- `@google/genai`

## Deployment

- **Vercel** — Frontend
- **Render** — Backend
- **MongoDB Atlas** — Database
- **Google Gemini API** — AI Service

---

# 📂 Project Structure

```text
RouteWise
│
├── backend
│   ├── config
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── public
│
├── src
│   ├── component
│   ├── pages
│   ├── services
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md
```

---

# 🚀 Installation

## 1. Clone Repository

```bash
git clone https://github.com/priyansh1225/RouteWise.git
cd RouteWise
```

---

# 💻 Frontend Setup

Install the frontend dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend runs locally using Vite.

---

# ⚙️ Backend Setup

Open another terminal and navigate to the backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the backend:

```bash
npm start
```

---

# 🔑 Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

GEMINI_API_KEY=your_gemini_api_key
```

### Important

Never commit the `.env` file to GitHub.

The following credentials must remain private:

- MongoDB connection string
- JWT secret
- Gemini API key
- OAuth credentials

Make sure `.env` is included in `.gitignore`.

---

# 📷 Project Screenshots

The following screenshots demonstrate the major features of RouteWise.

## 1. Home Page

The home page introduces RouteWise and provides access to route planning.

Add the Home Page screenshot here:

```text
README-assets/home.png
```

After adding the screenshot to the repository, use:

```markdown
![RouteWise Home Page](README-assets/home.png)
```

---

## 2. Route Search

The route search feature allows users to enter a starting point and
destination and view available transportation options.

Example:

```text
Rispana → ISBT

Vehicle: Vikram
Fare: ₹20
```

Add the Route Search screenshot here:

```text
README-assets/route-search.png
```

After adding the screenshot to the repository, use:

```markdown
![RouteWise Route Search](README-assets/route-search.png)
```

---

## 3. AI Assistant

The AI Assistant allows users to ask transportation-related questions
and receive AI-generated guidance using relevant RouteWise route data.

Example question:

```text
How can I go from Rispana to ISBT?
```

Add the AI Assistant screenshot here:

```text
README-assets/ai-assistant.png
```

After adding the screenshot to the repository, use:

```markdown
![RouteWise AI Assistant](README-assets/ai-assistant.png)
```

---

## 4. Dashboard

The dashboard provides an overview of:

- Community updates
- Authentication status
- Backend status
- AI Assistant access

Add the Dashboard screenshot here:

```text
README-assets/dashboard.png
```

After adding the screenshot to the repository, use:

```markdown
![RouteWise Dashboard](README-assets/dashboard.png)
```

---

# 🔒 Security

The application includes several basic security mechanisms:

- Password hashing using bcrypt
- JWT authentication
- Protected API routes
- Input validation using Express Validator
- API rate limiting using Express Rate Limit
- Environment variables for sensitive credentials
- CORS configuration
- No API keys committed to the repository

---

# ☁️ Deployment Architecture

```text
                         RouteWise
                             │
                ┌────────────┴────────────┐
                │                         │
             Frontend                  Backend
             Vercel                    Render
                │                         │
                │                 ┌───────┴────────┐
                │                 │                │
                │            MongoDB Atlas    Gemini API
                │                 │                │
                └─────────────────┴────────────────┘
```

---

# 🔄 Main Application Flow

For normal application requests:

```text
User
 ↓
React Frontend
 ↓
Axios API Request
 ↓
Express.js Backend
 ↓
MongoDB Atlas
 ↓
Route / User / Community Data
 ↓
Backend Response
 ↓
React UI
```

For AI requests:

```text
User Question
 ↓
React AI Chat
 ↓
Express Backend
 ↓
MongoDB Route Search
 ↓
Relevant Route Data
 ↓
Google Gemini
 ↓
AI Response
 ↓
User
```

---

# 🧪 Example AI Query

### User Question

```text
How can I go from Rispana to ISBT?
```

### RouteWise Database

```text
From: Rispana
To: ISBT
Vehicle: Vikram
Fare: ₹20
```

### AI Response

```text
To travel from Rispana to ISBT, you can use a Vikram.

Fare: ₹20

Have a safe journey!
```

---

# 🚧 Limitations

Currently, RouteWise does not provide:

- Live vehicle tracking
- Live traffic information
- Real-time bus locations
- Complete coverage of every local route
- Real-time fare updates

The AI assistant does not claim to provide live traffic or live
vehicle tracking.

Route information depends on the data currently available in the
RouteWise database.

---

# 🔮 Future Enhancements

Possible future improvements include:

- Live bus tracking
- Real-time transport data
- Google Maps integration
- Favourite routes
- Route reviews
- Notifications
- Route analytics
- Voice-based AI assistant
- Expanded Dehradun route database
- Improved route recommendation algorithms

---

# 🎥 Demo Video

The Week 10 project demonstration will be provided as a
**YouTube Unlisted video**.

The demonstration will cover:

1. Project introduction
2. Home page
3. Route search
4. User authentication
5. Dashboard
6. AI Assistant
7. Example AI route query
8. Brief code and architecture overview
9. Deployed application

### Demo Video Link

> ADD_YOUR_UNLISTED_YOUTUBE_LINK_HERE

---

# 📦 Week 10 Deliverables

The final project submission includes:

- Final GitHub repository
- Comprehensive README
- Live deployed application
- Backend deployment
- AI-powered feature
- Project screenshots
- Unlisted YouTube demo video
- Working application links

---

# 👨‍💻 Author

**Priyansh Bhatt**

B.Tech CSE (Cyber Security)

Graphic Era Deemed to be University

---

# 📄 License

This project was developed for educational and internship purposes.