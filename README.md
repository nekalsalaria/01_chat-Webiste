# Chat Website

## Overview
Chat Website is a full-stack web application designed to enable real-time communication with secure user authentication. Built on the MERN stack (MongoDB, Express.js, React.js, Node.js), it offers a fast, responsive, and interactive experience.

---

## 🛠️ Used Technologies

### 1. Node.js
- JavaScript runtime for running backend services and connecting the frontend to the server.

### 2. Express.js
- A fast Node.js framework to handle backend operations and API routes.

### 3. React.js
- A JavaScript library for building a dynamic, interactive frontend UI.
  - **UI Design:** Tailwind CSS is integrated for responsive, modern styling.

### 4. MongoDB
- A NoSQL database to store user data and chat messages.

### 5. Socket.IO
- Enables real-time, bidirectional event-based communication for live messaging.

### 6. JWT (JSON Web Token)
- Used for secure user authentication and authorization.

---

## 📁 Folder Structure
```
Chat-Website
│
├── Backend
│   ├── node_modules
│   ├── src
│   ├── .env
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
└── Frontend
    ├── node_modules
    ├── public
    ├── src
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── vite.config.js
```

---

## 🚀 Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nekalsalaria/chat-website
   cd Chat-Website
   ```

2. Install server-side dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install client-side dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

4. Create a `.env` file in the backend folder and define environment variables:
   ```env
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```

5. Start the backend server:
   ```bash
   npm run server
   ```

6. Start the frontend server:
   ```bash
   npm start
   ```

---

## 🎯 Features

- **Real-time Messaging** – Send and receive messages instantly.
- **User Authentication** – Secure login and registration with JWT.
- **Responsive UI** – Built with Tailwind CSS for a clean and modern design.
- **RESTful APIs** – Seamless backend communication.
- **Error Handling & Middleware** – Ensures backend security and stability.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

## 📧 Contact

- **Author:** Nekal Singh Salaria
- **Email:** [nekalsingh987@gmail.com](mailto:nekalsingh987@gmail.com)
- **LinkedIn:** [linkedin.com/in/nekalsingh](https://www.linkedin.com/in/nekalsingh)
- **GitHub:** [github.com/nekalsalaria](https://github.com/nekalsalaria/nekalsalaria)

---

Happy coding! 🚀

