# MERN Product Management System

This is a full-stack Product Management System built using the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- User Registration
- User Login
- JWT Authentication
- Password hashing using bcrypt
- Role based access (Admin / User)
- Admin can add, edit and delete products
- Users can only view products
- Product CRUD operations

## Tech Stack

Frontend
- React (Vite)
- Axios
- React Router

Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

## Project Structure

mern-product-management-system

backend
- controllers
- models
- routes
- middleware
- server.js

frontend
- src
- public
- package.json

README.md

## Setup Instructions

### 1 Clone Repository

git clone https://github.com/Ayshasafna8137/mern-product-management-system.git

### 2 Backend Setup

cd backend  
npm install

Create `.env` file inside backend folder.

Example:

MONGO_URI=your_mongodb_connection  
JWT_SECRET=your_secret_key

Run backend:

npm start

### 3 Frontend Setup

cd frontend  
npm install  
npm run dev

Frontend will run on:

http://localhost:5173

Backend will run on:

http://localhost:5000

## Author

Aysha Safna