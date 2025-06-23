
# 🧠 Quickblog - AI-Powered Blogging Platform

Quickblog is a full-stack, AI-integrated blogging platform that enables users to read, write, and interact with blog posts. Admins can manage content through a secure dashboard, while the frontend provides a sleek and responsive experience for readers.

## ✨ Features

- 🌐 Modern React-based frontend with responsive UI
- 🧠 AI-generated blog content using advanced language models
- 📝 Create, update, and delete blog posts
- 💬 Comment system with approval and moderation controls
- 🔐 Secure admin login with token-based authentication
- 📊 Admin dashboard showing key blog statistics
- ☁️ Image upload and hosting via ImageKit
- 📁 MongoDB backend with Express and Node.js
- 🚀 Fully deployed and production-ready

## 🔧 Tech Stack

- **Frontend:** React, Tailwind CSS, React Router, Axios, React Hot Toast
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Image Hosting:** ImageKit
- **AI Integration:** OpenAI API (or similar LLM for content generation)

## 🚀 Live Demo

https://ai-blog-ashen-one.vercel.app/

## 📂 Getting Started

### 1. Clone the Repository

```bash

git clone https://github.com/your-username/AI_BlogApplication.git
cd AI_BlogApplication
```
###2. Backend Setup
```bash
cd backend
npm install

->create .env
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_PRIVATE_KEY=your_key
IMAGEKIT_URL_ENDPOINT=your_endpoint

->Start the backend server
npm run server

```
###3.Frontend Setup
```bash
cd ../frontend
npm install
npm start


```
## 🛠️ Admin Credentials
Use your admin email and password to log in from the frontend. The admin can:

Add new blogs (with AI help)

Edit or delete blogs

Approve or delete comments

View dashboard analytics
## 🧠 AI Integration
The blog creation form allows admins to generate content automatically using AI prompts. This speeds up the content-writing process and maintains quality across posts.
