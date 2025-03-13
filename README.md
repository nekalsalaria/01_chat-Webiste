## Chat Website 🚀

## Overview
This project is built using the MERN stack — MongoDB, Express.js, React.js, and Node.js — along with additional technologies to enable real-time communication and secure authentication.

---

## 🛠️ Used Technologies

### 1. MongoDB
- A NoSQL database used to store and manage data in flexible, JSON-like documents.

### 2. Express.js
- A fast, unopinionated Node.js web application framework for building backend services and APIs.

### 3. React.js
- A JavaScript library for building user interfaces.
  - **UI Design:** Tailwind CSS is integrated for faster, modern, and responsive styling.

### 4. Node.js
- A JavaScript runtime that allows running JS code on the server-side, enabling a full-stack JavaScript architecture.

---

## 🔧 Other Technologies

### 1. Socket.IO
- A JavaScript library that facilitates real-time, bidirectional communication between web clients (browsers) and servers.
- Useful for implementing live features like chat, notifications, and more.

### 2. JWT (JSON Web Token)
- A secure and compact way to transmit information between parties as a JSON object.
- Primarily used for user authentication and authorization.

---

## 🚀 Setup and Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd <project-folder>
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

## 📂 Folder Structure

```bash
.
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── server.js
│
└── frontend
    ├── public
    └── src
        ├── components
        ├── context
        ├── hooks
        ├── pages
        └── App.js
```

---

## 🎯 Features

- **Full-stack CRUD Operations**
- **User Authentication (Login/Register)** with JWT
- **Real-time Communication** with Socket.IO
- **Responsive UI Design** with Tailwind CSS
- **RESTful APIs** for Backend
- **Secure Backend** with Middleware & Error Handling

---

## 🧠 Future Improvements

- Role-based access control (RBAC)
- File uploads
- Optimized performance
- Enhanced UI/UX

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

