# NoteVault-Backend
# 🗒️ NoteVault

NoteVault is a full-stack web application that allows users to register, log in, create notes, categorize them, archive/unarchive, filter by category, and organize by priority — all in a clean, intuitive interface.

---

## ⚙️ Technologies & Engines

### 💻 Frontend

- **React**: ^19.1.1  
- **Vite** (build tool)  
- **react-router-dom**: ^7.7.1  
- **react-bootstrap**: ^2.10.10  
- **tsparticles** for animations  
- **SweetAlert2** for elegant popups  
- **Bootstrap 5.3**

### 🛠 Backend

- **Node.js**: >=18.17.0  
- **Express**: ^5.1.0  
- **Sequelize (ORM)**: ^6.37.7  
- **MySQL2**: ^3.14.3  
- **bcrypt**: ^6.0.0  
- **jsonwebtoken**: ^9.0.2  
- **dotenv**: ^17.2.1  
- **cors**: ^2.8.5

### 🗃 Database

- *MySQL 8+*  
- ORM: Sequelize

---

## 🧪 Prerequisites

- Node.js *v18.17.0* or higher  
- npm *v9.6.7* or higher  
- MySQL installed and running on localhost (port 3306)  
- Git

---

## 📦 Dependencies

### Frontend

```bash
npm install react react-dom react-router bootstrap react-bootstrap react-router-dom react-tsparticles tsparticles tsparticles-slim react-icons sweetalert2 --save
```

### Backend

```bash
npm init -y
npm install express sequelize mysql2 dotenv cors bcrypt jsonwebtoken
npm install --save-dev nodemon
```

---

## ⚙ Environment variables

Create a `.env` file in the `backend` folder based on the included `.env.example` file

---

## ⚡ Quick Start

> This project includes a Bash script (`start.sh`) that automates the entire installation and execution process.

### 1. Clone the repository

```bash
git clone https://github.com/hirelens-challenges/Soler-e598d8.git
cd notevault
```

### 2. Create the MySQL database

> Access your MySQL console and run:

```sql
CREATE DATABASE notevault_db;
```

> The backend will automatically create the necessary tables on startup.

### 3. Run the installation script

```bash
./start.sh
```

> This script performs the following actions:
- Installs backend dependencies  
- Starts the backend using `nodemon`  
- Installs frontend dependencies  
- Launches the frontend app (`npm run dev`)

---

## 👤 User Access

You can use any fake email and a password with at least 8 characters to register.  
A real email is not required — perfect for testing.

---

## 🗂 Project Structure

```
notevault/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── middlewares/
│   ├── index.js
│   └── .env
├── frontend/
│   ├── componentes/
│   ├── pages/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
├── start.sh
└── README.md
```

---

## 🧠 About the Project

NoteVault was developed as part of a technical test for Ensolvers. It includes:

- **User authentication** with JWT (Register/Login)  
- **Create, read, update, delete** notes (CRUD)  
- **Category filtering** and **priority sorting**  
- **Archiving** and **editing** of notes  
- **Fully responsive** interface with Bootstrap  
- **Backend REST API** built with Express + Sequelize + MySQL  
- **Frontend** built with React + Vite

---

## 📌 Project Kanban

Trello Board: [https://trello.com/b/VRxo6G2D/challenge-ensolvers](https://trello.com/b/VRxo6G2D/challenge-ensolvers)

---

## 📬 Contact

This project was developed by Ana Paula Soler as part of a technical challenge and portfolio.  
📧 anapaulasoler711@gmail.com

