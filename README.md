# 🎓 SkillSphere — Online Learning Platform

## 📌 Overview

**SkillSphere** is a modern online learning platform that helps users discover and enroll in expert-led courses across development, design, business, data science, and marketing. It features a clean and intuitive interface with user authentication, course browsing, detailed course pages, and a personal profile dashboard.

This project is built using **Next.js (App Router)** with **JavaScript (JSX)**, styled with **Tailwind CSS**, and deployed on **Vercel**.

---

## 🚀 Live Demo

🔗 [https://skillsphere-gules.vercel.app/](https://skillsphere-gules.vercel.app/)

---

## 🛠️ Technologies Used

* ⚛️ Next.js 14 (App Router)
* ⚡ React 18
* 🎨 Tailwind CSS
* 🔔 React Hot Toast
* 🎞️ Framer Motion
* 🔷 Lucide React (Icons)
* 🌐 JavaScript 

---

## ✨ Key Features

### 🧭 Navigation System

* Sticky responsive Navbar
* Active route highlighting
* Dropdown user menu (avatar-based)
* Mobile hamburger menu

---

### 🏠 Home Page

* Hero section with CTA buttons
* Popular courses preview (top 3)
* Effective Learning Tips section
* Featured Instructors section
* Newsletter CTA banner

---

### 📚 Courses Page

* Full course catalog grid (6 courses)
* Live search by title or instructor
* Category filter buttons (All, Development, Design, etc.)
* Empty state with clear filters option
* Course cards with price, rating, students, and duration

---

### 📖 Course Details Page (Protected)

* Full course hero with instructor info and ratings
* Video preview placeholder
* "What You'll Learn" curriculum section
* Collapsible course content modules
* Sticky sidebar with enrollment CTA, price, and course features
* Toast notification on enrollment
* Requires login to access

---

### 🔐 Authentication

* **Login Page** — email/password + Google mock login
* **Register Page** — name, email, photo URL, password
* Mock auth using `localStorage` (no backend required)
* Persistent session across page refreshes
* Protected routes redirect to login if unauthenticated

---

### 👤 Profile Page (Protected)

* User avatar, name, and email display
* Stats cards: Completed Courses, Hours Learned, Badges, Skill Points
* Learning progress bars
* Recent achievements section
* Quick links to Edit Profile

---

### ✏️ Update Profile Page (Protected)

* Edit name and photo URL
* Live avatar preview
* Updates persist in localStorage

---

### ⚙️ Additional Features

* 🚫 Custom 404 Not Found page
* 🔔 Toast notifications for all user actions
* 🔄 No 404 on page refresh (Next.js App Router)
* 📱 Fully responsive (Mobile, Tablet, Desktop)
* 🧹 No TypeScript — plain JavaScript (JSX) throughout

---

## 📂 Project Structure

```
skillsphere/
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── src/
    ├── app/
    │   ├── globals.css
    │   ├── layout.js
    │   ├── not-found.js
    │   ├── page.js                    (Home)
    │   ├── courses/
    │   │   ├── page.js                (Courses)
    │   │   └── [id]/page.js           (Course Details)
    │   ├── login/page.js
    │   ├── register/page.js
    │   └── profile/
    │       ├── page.js                (Profile)
    │       └── update/page.js         (Update Profile)
    ├── components/
    │   ├── common/
    │   │   └── ProtectedRoute.js
    │   └── layout/
    │       ├── Navbar.js
    │       └── Footer.js
    ├── context/
    │   └── AuthContext.js
    └── data/
        └── courses.json
```

---

## 📋 Sample Course Data

```json
{
  "id": "1",
  "title": "Modern Web Architecture",
  "instructor": "Dr. Aris Thorne",
  "duration": "12 hours",
  "rating": 4.9,
  "description": "Master React, Next.js, and Tailwind CSS to build high-performance applications.",
  "image": "https://images.unsplash.com/...",
  "price": 49.99,
  "category": "Development",
  "students": "12.5k",
  "curriculum": ["React Fundamentals", "Next.js App Router", "Server Components", "State Management"]
}
```

---

## ⚡ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/abdullah-alsaba/SkillSphere.git

# Go to project folder
cd skillsphere

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Auth Notes

This project uses **mock authentication** — no real backend or database. User data is saved in `localStorage`. To log in, simply enter any email and password on the Login page.

---

## 🌍 Deployment

This project is deployed on **Vercel**. You can also deploy it on:

* Netlify
* Firebase Hosting
* Cloudflare Pages

Make sure all routes are handled correctly — Next.js App Router handles this automatically (no 404 on refresh).

---

## 🎯 Project Goals

* Practice Next.js App Router fundamentals
* Build a multi-page application with protected routes
* Work with dynamic JSON data
* Implement responsive UI with Tailwind CSS
* Migrate from Vite + TypeScript to Next.js + JavaScript

---

## 👨‍💻 Author

**Abdullah Al Saba**

* GitHub: [https://github.com/abdullah-alsaba](https://github.com/abdullah-alsaba)

---

## 📄 License

This project is for educational purposes only.

---

## ⭐ Final Notes

This project focuses on:

* Clean, modern UI with Tailwind CSS
* Real-world multi-page app structure
* Next.js best practices (App Router, layout, not-found)
* Beginner-friendly codebase — no TypeScript, no complex state management

Feel free to fork, improve, and expand it 🚀
