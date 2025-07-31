# 🌌 Star Wars Movies UI

This project is a **React + Redux** web app that lists all **Star Wars movies** in a sortable table and displays detailed information on click — including episode number, director, release date, and the famous opening crawl.

The app demonstrates design thinking, code organization, responsive UI, error handling, and best practices with Redux Toolkit.

---

## 🚀 Features

- ✅ **Sortable Table** – Sort by Title or Release Date (ascending/descending)
- 🎬 **Movie Detail View** – See full metadata, crawl text, and character list
- 📱 **Responsive Design** – Fully mobile-friendly with modern styling
- 🔁 **Routing with React Router** – URL-based navigation and back button
- 🧠 **Redux State Management** – Global state via Redux Toolkit
- 🧩 **Error Handling** – Friendly messaging for network/API errors
- ✨ **Visual Polish** – Clean typography, layout, and subtle transitions

---

## 🛠 Tech Stack

- **React** (Functional Components + Hooks)
- **Redux Toolkit** for state management
- **React Router v6**
- **Axios** for API calls
- **CSS** (with `clamp()` + responsive media queries)
- **SWAPI.info** as Star Wars API

---

## 🗂 Project Structure

```
src/
├── components/         # Reusable components (MovieTable, MovieDetail)
├── redux/              # Redux slice (movies.js)
├── App.jsx             # Routing and layout
├── index.js            # App entry point
├── styles/             # CSS files (optional)
```

---

## 🧪 Error Handling & Loading

Handled with Redux async lifecycle:

- `status === 'loading'`: Show spinner/message
- `status === 'failed'`: Show custom error UI
- Graceful fallback for missing data or network failures

---

## 🔄 Setup Instructions

```bash
# Clone the repository
git clone https://github.com/yourusername/star-wars-ui.git
cd star-wars-ui

# Install dependencies
npm install

# Run the app
npm start
```

App runs locally at: [http://localhost:3000](http://localhost:3000)

---

## 🧠 Design Decisions & Motivation

- **Redux Toolkit** was chosen for its clean async workflow and predictable state.
- **Error boundaries and fallback UI** make the app resilient.
- **Responsive layout** ensures usability across devices.
- **Component modularity** improves readability and scalability.

---

## 📎 API Reference

Powered by: [https://swapi.info/api/films](https://swapi.info/api/films)

---

## 👨‍💻 Author

**Murtaza Shaikh**  
[LinkedIn](https://www.linkedin.com/in/murtaza-shaikh99/)

---

Made with love ❤️
