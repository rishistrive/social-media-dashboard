# 📊 Social Media Analytics Dashboard

A fully responsive and animated analytics dashboard built with **Next.js**, **React Chart.js 2**, **Tailwind CSS**, **Framer Motion**, and **React Icons**.

---

## 🚀 Features

- 10 different chart types (Bar, Line, Pie, Radar, etc.)
- Responsive layout with Tailwind CSS Grid
- Entry animations using Framer Motion
- Modular `ChartCard` component for reusability
- Live follower count animation using `react-countup`
- Social media navbar with icons and animated counters

---

## 📁 Project Structure

```
/paapi-dashboard
├── components/
│   ├── ChartCard.js           # Reusable chart wrapper with animation
│   └── SocialMediaNavBar.js  # Responsive social navbar with icons
├── pages/
│   └── index.js               # Dashboard using ChartCard and Navbar
├── public/
├── styles/
│   └── globals.css            # Tailwind base styles
├── tailwind.config.js
├── postcss.config.js
└── README.md                  # You are here
```

---

## 🛠️ Technologies Used

- **Next.js** – Framework for SSR React apps
- **React Chart.js 2** – Charting library for data visualizations
- **Tailwind CSS** – Utility-first responsive styling
- **Framer Motion** – Declarative animations for React
- **React Icons** – Easy access to social icons
- **React CountUp** – Smooth number animation

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/paapi-dashboard.git
cd paapi-dashboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open your browser at [http://localhost:3000](http://localhost:3000)

---

## 🧠 Tips

- You can modify chart data or add more cards in `pages/index.js`
- To change icon style or count, go to `SocialMediaNavBar.js`
- To tweak animation, adjust `ChartCard.js` Framer Motion settings

---


Made with ❤️ by \[Rishi Verma]
