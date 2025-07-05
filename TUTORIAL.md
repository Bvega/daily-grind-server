# ☕ Fullstack Express.js Lab: Build The Daily Grind Backend

> **Audience**: Beginners + Professional Developers
> **Goal**: Recreate a complete Express.js backend project with static file serving, clean routing, and production-ready practices.

---

## 🧠 Learning Objectives

By completing this tutorial, you will:

* Understand how to set up a Node.js project from scratch
* Learn to serve static HTML files using Express.js
* Implement clean routing and error handling
* Use Git for version control and GitHub for remote backup
* Structure small-scale backend projects professionally

---

## 🚀 Project Summary

"The Daily Grind" is a simple website for a local coffee shop. Your job is to build its backend using Node.js and Express. It will serve two static HTML pages: a homepage and a contact page.

---

## 🔧 Step 1: Project Setup

### 📁 Create the Project Folder

```bash
mkdir daily-grind-server
cd daily-grind-server
```

### 🛠 Initialize Node.js

```bash
npm init -y
```

### 📦 Install Express

```bash
npm install express
```

### 🧾 Add .gitignore

Create a `.gitignore` file:

```
node_modules/
.env
npm-debug.log*
```

---

## 🧱 Step 2: Create Public HTML Pages

### 📁 Create a `public/` directory

```bash
mkdir public
```

### 📄 public/index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>The Daily Grind</title>
</head>
<body>
  <h1>Welcome to The Daily Grind!</h1>
</body>
</html>
```

### 📄 public/contact.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contact - The Daily Grind</title>
</head>
<body>
  <h1>Contact Us</h1>
  <p>Reach out for collaborations or feedback!</p>
</body>
</html>
```

---

## 🔨 Step 3: Build the Express Server

### 📄 Create `server.js`

```js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// 404 Handler
app.use((req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

---

## ✅ Step 4: Run and Test

```bash
node server.js
```

Open in your browser:

* `http://localhost:3000/` → Homepage
* `http://localhost:3000/contact` → Contact page
* `http://localhost:3000/unknown` → 404 Page

---

## 🔁 Step 5: Git + GitHub

### Initialize Git

```bash
git init
git add .
git commit -m "initial commit: basic express server with static files"
```

### Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/daily-grind-server.git
git branch -M main
git push -u origin main
```

---

## 🧪 Bonus: Setup Script (Optional)

### setup.sh

```bash
#!/bin/bash
npm install
code .
echo "Ready to run! Use: node server.js"
```

---

## 📄 Final Thoughts

This lab mirrors real-world backend scaffolding: serving assets, routing, error handling, and Git. Extend it with forms, API routes, or templating later.

Happy coding! 🎉

---

> ✏️ Tutorial by: Bolivar Vega
> GitHub: https://github.com/Bvega/daily-grind-server .
 