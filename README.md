# Bundle Builder Task

A responsive React application that recreates the provided Figma design for a multi-step security system bundle builder.

## 🔗 Repository

GitHub: https://github.com/Abdalla-Elhagar/bundleBuilderTask
Demo: https://bundle-builder-task-three.vercel.app/

---

## 📌 Features

- Multi-step accordion interface.
- Dynamic product selection.
- Live review panel synchronized with the builder.
- Variant (color) selection.
- Quantity stepper synchronization between product cards and review panel.
- Automatic total price calculation.
- Responsive design for desktop, tablet, and mobile.
- Persistent cart using Local Storage.
- Data-driven UI powered by mock data.

---

## 🛠️ Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- React Context API
- ESLint

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/Abdalla-Elhagar/bundleBuilderTask.git
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 📂 Project Structure

```
src/
│
├── components/
├── context/
├── data/
│   └── mockData.ts
├── types/
├── assets/
└── App.tsx
```

---

## 📦 State Management

The application uses **React Context API** to manage the bundle state globally, keeping product selection, quantities, and the review panel synchronized across the application.

---

## 📊 Data

The application is fully data-driven using a local **mockData** source, making it easy to extend or replace with an API in the future.

---

## 💾 Persistence

The selected security system is saved using **Local Storage**, allowing users to restore their configuration after refreshing or revisiting the application.

---

## 🎯 Responsive Design

The application is designed to provide a smooth experience across:

- Desktop
- Tablet
- Mobile

---

## ✨ Notes

- The UI is built to closely match the provided Figma design.
- Components are designed to be reusable and maintainable.
- The project structure is organized to support future scalability.
- The data layer can be easily replaced with a backend API without changing the UI logic.

---

## 👤 Author

**Abdalla Elhagar**

GitHub: https://github.com/Abdalla-Elhagar
