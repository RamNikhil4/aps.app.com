# Frontend Developer Intern Assignment

Welcome to my submission for the Frontend Developer Intern assignment! This repository contains a Next.js application that implements the requested dashboard interface and integrates with the provided backend API.

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js and a package manager like `npm` or `yarn` installed.

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up your environment variables. You'll need an `.env.local` file with the server credentials. (Check the assignment brief for the correct backend URL).

4. Run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) with your browser to see the application running.

## ✨ Features Implemented

- **Responsive Dashboard Layout:** A structured sidebar and main content area matching the reference design.
- **Authentication Flow:** Secure login and system access using JWTs, with short-lived access and long-lived refresh tokens.
- **Scans Table:** A compact, interactive data table displaying security scans with fully functional sorting, filtering, and searching capabilities.
- **Theming/Dark Mode System:** Full dark mode support that toggles automatically based on system preference or manually via a switch.

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Beautifully simple icons
- **TypeScript** - For robust type safety

## 📂 Project Structure

- `/app`: Next.js App Router endpoints, including the main layout and dashboard routes.
- `/components`: Reusable UI components (Sidebar, Header, Table, etc.).
- `/lib`: Shared utilities, API client, and authentication logic.

---

_Note: Please check `API_DOCS.md` and `SCALING.md` for additional deliverables related to this assignment._
