<div align="center">

<img src="https://raw.githubusercontent.com/Rabiul-Sujon/Rabiul-Sujon/main/portfolio-logo.png" width="120" />

# 🚀 Rabiul Sujon — Portfolio

### A modern, animated full-stack developer portfolio built with Next.js

[![Live Demo](https://img.shields.io/badge/Live_Demo-020C1B?style=for-the-badge&logo=vercel&logoColor=64FFDA)](https://my-portfolio-tawny-theta-64.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)

</div>

---

## ✨ Overview

This is my personal developer portfolio — designed and built from scratch with a **Cyber Teal** aesthetic, smooth scroll animations, an interactive contact form with a working backend, and a fully responsive layout across mobile, tablet, and desktop.

---

## 🖥️ Sections

| Section | Description |
|---|---|
| 🏠 **Hero** | Animated intro with typewriter effect, floating stats, orbit rings & sparkle-on-click |
| 👤 **About** | Bio, quick stats, and downloadable resume |
| 💻 **Tech Stack** | Icon grid of tools & technologies |
| 🧠 **Skills** | Frontend & Backend skill cards with proficiency levels |
| 🛠️ **Services** | Interactive service cards with detail modals |
| 🎓 **Qualification** | Tabbed Experience / Education timeline |
| 📁 **Projects** | Real project showcase with GitHub + Live Demo links |
| 📩 **Contact** | Working contact form — saves to MongoDB & sends email via Nodemailer |
| 🦶 **Footer** | Quick links & social connections |

---

## 🛠️ Tech Stack

**Frontend**
![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/-Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white)
![React Icons](https://img.shields.io/badge/-React_Icons-E91E63?style=flat&logo=react&logoColor=white)

**Backend**
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/-Mongoose-880000?style=flat&logo=mongoose&logoColor=white)
![Nodemailer](https://img.shields.io/badge/-Nodemailer-22B573?style=flat&logoColor=white)

**Deployment**
![Vercel](https://img.shields.io/badge/-Vercel-000000?style=flat&logo=vercel&logoColor=white)

---

## 🎨 Color Palette — Cyber Teal

| | Color | Hex |
|---|---|---|
| 🌑 Background | ![#020C1B](https://placehold.co/15x15/020C1B/020C1B.png) | `#020C1B` |
| 💎 Primary Accent | ![#64FFDA](https://placehold.co/15x15/64FFDA/64FFDA.png) | `#64FFDA` |
| 🔷 Secondary Accent | ![#0EA5E9](https://placehold.co/15x15/0EA5E9/0EA5E9.png) | `#0EA5E9` |
| 📝 Text | ![#CCD6F6](https://placehold.co/15x15/CCD6F6/CCD6F6.png) | `#CCD6F6` |

---

## 📂 Project Structure

```
my-portfolio/
├── public/                    # Images, resume, favicon
├── src/
│   ├── app/
│   │   ├── api/contact/       # Serverless API route (MongoDB + Nodemailer)
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   │   ├── sections/          # Hero, About, Skills, Services, etc.
│   │   ├── Logo.jsx
│   │   └── Navbar.jsx
│   ├── hooks/
│   │   └── useLenis.js        # Smooth scroll hook
│   └── utils/
│       └── sparkle.js         # Click sparkle effect
├── .env.local                 # Environment variables (not committed)
└── package.json
```

---

## ⚙️ Getting Started

**1. Clone the repository**
```bash
git clone https://github.com/Rabiul-Sujon/my-portfolio.git
cd my-portfolio
```

**2. Install dependencies**
```bash
pnpm install
```

**3. Set up environment variables**

Create a `.env.local` file in the root:
```env
MONGODB_URI=your_mongodb_connection_string
GMAIL_USER=your_gmail_address
GMAIL_APP_PASSWORD=your_gmail_app_password
```

**4. Run the development server**
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

---

## 📬 Contact API

The contact form is powered by a Next.js serverless API route:

- **`POST /api/contact`** → validates input, saves the message to MongoDB, and sends a notification email via Nodemailer

---

## 🌐 Live Demo

🔗 **[my-portfolio-tawny-theta-64.vercel.app](https://my-portfolio-tawny-theta-64.vercel.app)**

---

## 🤝 Connect With Me

<p align="center">
  <a href="https://www.linkedin.com/in/maven-rabiul/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
  <a href="https://github.com/Rabiul-Sujon/"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" /></a>
  <a href="https://x.com/MavenRabi98070"><img src="https://img.shields.io/badge/Twitter-000000?style=for-the-badge&logo=x&logoColor=white" /></a>
  <a href="mailto:alamrabiul889@gmail.com"><img src="https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white" /></a>
</p>

---

<div align="center">
<sub>Built with ❤️ by Rabiul Sujon</sub>
</div>