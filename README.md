# ☕ The Daily Grind - Express.js Backend

A foundational backend server built with **Node.js** and **Express.js** for a local coffee shop, "The Daily Grind."  
This server serves static HTML pages for the homepage and a contact page, laying the groundwork for future dynamic features.

---

## 🚀 Features

- 📁 Serves static HTML content from the `public/` directory
- 🧭 Route handling for `/` (homepage) and `/contact`
- 🛑 Graceful handling of unknown routes (404)
- 📦 Lightweight and fast setup with Express
- 📝 Easy to extend into a full-featured API or web app

---

## 📁 Project Structure

```
daily-grind-server/
├── public/
│   ├── index.html          # Homepage
│   └── contact.html        # Contact page
├── server.js               # Main Express server
├── .gitignore              # Ignore node_modules and logs
└── README.md               # Project info and usage
```

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Bvega/daily-grind-server.git
cd daily-grind-server
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
node server.js
```

The server will run at:  
👉 `http://localhost:3000/` for the homepage  
👉 `http://localhost:3000/contact` for the contact page

---

## 🌐 Routes

| Route          | Description           |
|----------------|-----------------------|
| `/`            | Homepage with welcome |
| `/contact`     | Contact information   |
| Any other URL  | 404 Not Found         |

---

## 📦 Technologies Used

- Node.js
- Express.js
- HTML5 / Static Pages

---

## ✅ Author

👨‍💻 **Bvega**  
🔗 GitHub: [@Bvega](https://github.com/Bvega)

---

## 📬 License

This project is open source and available under the [MIT License](LICENSE).
