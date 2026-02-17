<div align="center">

<img src="public/React%20Todo.png" alt="React Todo App Banner" width="100%" />

# ✅ React Todo

A modern, feature-rich task management application built with React 19 and Vite 7.

[![Version](https://img.shields.io/badge/version-1.2.1-blue?style=for-the-badge)](https://github.com/ImranAvenger/react-todo/releases)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Tech Stack](#-tech-stack) • [Contributing](#-contributing)

</div>

---

## 📖 Overview

**React Todo** is a sleek, responsive task management app designed for productivity. Built with modern React patterns (hooks, reducers) and styled with a beautiful glassmorphism UI, it offers a delightful user experience across all devices.

### Why This Project?

- 🎯 **Clean Architecture** — Uses `useReducer` for predictable state management
- 💾 **Persistent Storage** — Tasks survive browser refreshes via LocalStorage
- 🎨 **Modern UI** — Glassmorphism design with smooth animations
- 📱 **Fully Responsive** — Works seamlessly on desktop, tablet, and mobile

---

## ✨ Features

| Feature                  | Description                                        |
| ------------------------ | -------------------------------------------------- |
| ➕ **Add Tasks**         | Quickly add new tasks with a clean input interface |
| ✅ **Toggle Complete**   | Mark tasks as done/undone with a single click      |
| 🗑️ **Delete Tasks**      | Remove individual tasks with confirmation          |
| 🧹 **Clear All**         | Bulk delete all tasks with a safety prompt         |
| 🔍 **Filter Tasks**      | View All, Active, or Completed tasks               |
| 📊 **Progress Tracking** | Visual progress bar showing completion percentage  |
| 💾 **Auto-Save**         | Tasks automatically persist to LocalStorage        |
| 🌙 **Glass UI**          | Beautiful glassmorphism design with blur effects   |

---

## 🎬 Demo

<div align="center">

### Task Management Flow

```
┌─────────────────────────────────────────┐
│           📝 Todo List                  │
├─────────────────────────────────────────┤
│  Task Progress                    75%   │
│  ████████████████████░░░░░░░░░         │
│  3 of 4 tasks completed                 │
├─────────────────────────────────────────┤
│  [Add a new task...            ] [+]    │
├─────────────────────────────────────────┤
│  [All] [Active] [Completed]   Clear All │
├─────────────────────────────────────────┤
│  ☐ Build the new feature               │
│  ☑ Review pull requests                │
│  ☑ Write documentation                 │
│  ☑ Deploy to production                │
├─────────────────────────────────────────┤
│     Stay focused • Stay productive      │
└─────────────────────────────────────────┘
```

</div>

---

## 🛠️ Tech Stack

### Core

| Technology                                                | Version  | Purpose                          |
| --------------------------------------------------------- | -------- | -------------------------------- |
| [React](https://react.dev/)                               | `19.2.0` | UI library with hooks & reducers |
| [Vite](https://vitejs.dev/)                               | `7.3.1`  | Lightning-fast build tool        |
| [Tailwind CSS](https://tailwindcss.com/)                  | `4.1.18` | Utility-first CSS framework      |
| [React Icons](https://react-icons.github.io/react-icons/) | `5.5.0`  | Icon library                     |

### Development

| Tool                                                                           | Purpose                          |
| ------------------------------------------------------------------------------ | -------------------------------- |
| [ESLint](https://eslint.org/)                                                  | Code linting & quality           |
| [Husky](https://typicode.github.io/husky/)                                     | Git hooks management             |
| [Commitlint](https://commitlint.js.org/)                                       | Conventional commit enforcement  |
| [Standard Version](https://github.com/conventional-changelog/standard-version) | Automated versioning & changelog |

---

## 📁 Project Structure

```
react-todo/
├── 📄 index.html              # Entry HTML file
├── 📄 package.json            # Dependencies & scripts
├── 📄 vite.config.js          # Vite configuration
├── 📄 eslint.config.js        # ESLint configuration
├── 📄 CHANGELOG.md            # Version history
│
├── 📂 public/                 # Static assets
│
└── 📂 src/
    ├── 📄 main.jsx            # React entry point
    ├── 📄 App.jsx             # Main application component
    ├── 📄 index.css           # Global styles
    │
    ├── 📂 assets/             # Images, fonts, etc.
    │
    └── 📂 components/
        ├── 📄 Header.jsx      # App title header
        ├── 📄 ProgressBar.jsx # Task completion progress
        ├── 📄 TodoInput.jsx   # New task input form
        ├── 📄 TodoList.jsx    # Task list container
        ├── 📄 TodoItem.jsx    # Individual task component
        └── 📄 Footer.jsx      # App footer
```

---

## 🚀 Installation

### Prerequisites

- **Node.js** >= 20.x
- **npm** >= 10.x (or pnpm/yarn)

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/ImranAvenger/react-todo.git

# 2. Navigate to project directory
cd react-todo

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 📜 Available Scripts

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start development server with HMR  |
| `npm run build`   | Build optimized production bundle  |
| `npm run preview` | Preview production build locally   |
| `npm run lint`    | Run ESLint for code quality checks |
| `npm run release` | Generate new version & changelog   |
| `npm run prepare` | Setup Husky git hooks              |

---

## 🏗️ Architecture

### State Management

The app uses React's `useReducer` for centralized state management:

```jsx
// Actions supported by the reducer
{ type: "ADD_TODO",    payload: { id, text, completed } }
{ type: "REMOVE_TODO", payload: { id } }
{ type: "TOGGLE_TODO", payload: { id } }
{ type: "CLEAR_ALL" }
```

### Data Flow

```
User Action → Dispatch → Reducer → New State → LocalStorage → UI Update
```

### Component Hierarchy

```
App
├── Header
├── ProgressBar
├── TodoInput
├── Filter Tabs (All | Active | Completed)
├── TodoList
│   └── TodoItem (×n)
└── Footer
```

---

## 🎨 Design System

### Color Palette

| Color                    | Usage                               |
| ------------------------ | ----------------------------------- |
| `purple-400/500`         | Primary accent, buttons, highlights |
| `white/10-40`            | Glassmorphism backgrounds           |
| `red-400`                | Delete actions, warnings            |
| `indigo → purple → pink` | Progress bar gradient               |

### UI Features

- **Glassmorphism**: Semi-transparent backgrounds with backdrop blur
- **Smooth Animations**: CSS transitions on all interactive elements
- **Responsive Design**: Tailwind breakpoints for all screen sizes
- **Accessibility**: Proper labels, focus states, and keyboard support

---

## 🗺️ Roadmap

- [ ] 🔄 Drag-and-drop task reordering
- [ ] 📅 Due dates and reminders
- [ ] 🏷️ Task categories/tags
- [ ] 🌙 Dark/Light theme toggle
- [ ] 🔊 Sound effects on actions
- [ ] 📤 Export/Import tasks
- [ ] 🔐 User authentication
- [ ] ☁️ Cloud sync with backend API

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m "feat: add amazing feature"`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

| Type        | Description                   |
| ----------- | ----------------------------- |
| `feat:`     | New feature                   |
| `fix:`      | Bug fix                       |
| `docs:`     | Documentation changes         |
| `style:`    | Code style (formatting, etc.) |
| `refactor:` | Code refactoring              |
| `test:`     | Adding tests                  |
| `chore:`    | Maintenance tasks             |

---

## 📝 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for a detailed version history.

### Recent Changes

- **v1.2.1** — Bug fix for ProgressBar component
- **v1.2.0** — Added filtering (All/Active/Completed) and Clear All functionality
- **v1.1.0** — Added ProgressBar component for task completion tracking

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

## 👨‍💻 Author

<div align="center">

**Imran**

[![GitHub](https://img.shields.io/badge/GitHub-ImranAvenger-181717?style=for-the-badge&logo=github)](https://github.com/ImranAvenger)

</div>

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

Made with ❤️ and React

</div>
