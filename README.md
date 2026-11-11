# 📝 Modern React Todo App

A sleek, feature-rich Task Management application built to stay organized and boost productivity. Developed with modern web standards, emphasizing clean UI/UX and robust state handling.

## ✨ Features

* **Task Management:** Add, complete, edit, and delete tasks seamlessly.
* **Persistent Storage:** Automatically saves and syncs your tasks with browser `localStorage`.
* **Dynamic Filtering:** Instantly switch views between **All**, **Active**, and **Completed** tasks.
* **Interactive Edit Modal:** Popup window workflow for editing existing tasks effortlessly.
* **Active Task Counter:** Real-time pluralized counter tracking remaining tasks.
* **Responsive Layout:** Engineered with Tailwind CSS flexbox layouts, text wrapping, and custom hover scrollbars to prevent overflow.

## 🛠️ Tech Stack

* **React** (with Hooks: `useState`, `useEffect`)
* **TypeScript** (for strict component typing and safe props)
* **Tailwind CSS** (for styling and layout design)
* **React Icons** (for UI iconography)

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
