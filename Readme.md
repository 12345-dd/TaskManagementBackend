# Task Management — Backend

REST API backend for the Task Management Application. Built with Node.js, Express.js, and Postgresql with JWT-based authentication.

**Live API:** [https://taskmanagementbackend-o0bo.onrender.com](https://taskmanagementbackend-o0bo.onrender.com)  
**Frontend Repo:** [https://github.com/12345-dd/TaskManagementFrontend](https://github.com/12345-dd/TaskManagementFrontend)  
**Live Website:** [https://taskifyflow.netlify.app](https://taskifyflow.netlify.app)

---

## Features

- **JWT Authentication** — Secure token-based auth
- **Protected API Routes** — Middleware to guard private endpoints
- **Tasks Operations** — Create, read, update, delete task applications
- **Password Hashing** — Bcrypt for secure password storage

---

## Getting Started (Local Setup)


### 1. Clone the Repository
```bash
git clone https://github.com/12345-dd/TaskManagementBackend
cd TaskManagementBackend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create `.env` File
```env
PORT=5000
JWT_SECRET=jwt_password
DB_URL=database_connection_string
```

### 4. Run the Server
```bash
node app.js
```

> Server runs on `http://localhost:5000`

---


## Deployment

- Backend is deployed on **Render**
- Live API URL: [https://taskmanagementbackend-o0bo.onrender.com](https://taskmanagementbackend-o0bo.onrender.com)
- UptimeRobot is configured to keep the server always active 

---