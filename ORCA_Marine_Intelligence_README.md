# 🚢 ORCA Marine Intelligence – Frontend Setup Guide

This guide will help you run the ORCA Marine Intelligence frontend on your local machine.

The project uses **pnpm workspaces**, so you need to install dependencies from the **root** folder.

---

## 📋 Prerequisites

- **Node.js** (version 18 or higher) – [Download](https://nodejs.org/)
- **pnpm** – Install globally with `npm install -g pnpm`
- A terminal (Command Prompt, PowerShell, Git Bash, or WSL)

---

## 📦 Step 1 – Clone the repository

```bash
git clone <your-repo-url>
cd ORCA-Marine-Intelligence
```

---

## 📂 Step 2 – Understand the folder structure

```text
ORCA-Marine-Intelligence/
├── artifacts/
│   ├── api-server/                  (backend, if any)
│   ├── mockup-sandbox/
│   └── orca-marine-intelligence/    ← THIS IS THE FRONTEND
├── lib/
├── scripts/
├── pnpm-workspace.yaml
└── package.json
```

- The **frontend** is inside `artifacts/orca-marine-intelligence/`
- All commands must be run from the **root** (the folder that contains `pnpm-workspace.yaml`) unless specified.

---

## 🛠 Step 3 – Install dependencies

From the **root** folder, run:

```bash
pnpm install
```

This will install all dependencies for all workspaces.

---

## 🔧 Step 4 – Environment variables (important)

The frontend requires two environment variables:

- `PORT` – the port number (e.g., `5173`)
- `BASE_PATH` – the base URL path (usually `/`)

**Create a `.env` file** inside `artifacts/orca-marine-intelligence/` with these lines:

```env
PORT=5173
BASE_PATH=/
```

If you prefer, you can also set them directly when running the dev server (see Step 5).

---

## 🚀 Step 5 – Start the development server

Go into the frontend folder:

```bash
cd artifacts/orca-marine-intelligence
```

Then run:

```bash
pnpm dev
```

You should see something like:

```text
VITE v...  ready
Local: http://localhost:5173/
```

Open that URL in your browser – you’re now running the app! 🎉

---

## 🪟 Special note for Windows users

This project originally used Linux-native packages. If you see errors like:

```text
Cannot find module '@rollup/rollup-win32-x64-msvc'
Cannot find module 'lightningcss.win32-x64-msvc.node'
```

or esbuild version mismatches, you can fix them by installing the Windows-specific versions **explicitly** from the **root** folder:

```bash
pnpm --filter ./artifacts/orca-marine-intelligence add -D @esbuild/win32-x64@0.27.3 @rollup/rollup-win32-x64-msvc@4.62.4 lightningcss-win32-x64-msvc@1.32.0 @tailwindcss/oxide-win32-x64-msvc@4.3.3
```

Then re-run `pnpm install` from the root and start the dev server again.

---

## ❓ Common troubleshooting

| Problem | Solution |
|---|---|
| `PORT environment variable is required` | Create `.env` as described in Step 4, or run `PORT=5173 BASE_PATH=/ pnpm dev` |
| `Cannot find module @rollup/rollup-win32...` | Install the Windows packages (see Windows note above) |
| `esbuild version mismatch` | Install `@esbuild/win32-x64` matching the host version (e.g., `0.27.3`) |
| `pnpm install` fails with `ERR_PNPM_IGNORED_BUILDS` | Run `pnpm approve-builds` and approve `esbuild` |
| Vite starts but the page is blank | Check the browser console – you might need to start the backend API server as well |

---

## 🧹 Clean reinstall (if everything goes wrong)

From the **root** folder:

```bash
rm -rf node_modules pnpm-lock.yaml
```

**Windows:** use `rd /s node_modules` and delete `pnpm-lock.yaml` manually.

Then:

```bash
pnpm store prune
pnpm install
```

Then re-apply the Windows packages if needed, and start again.

---

## 📦 Running the backend (if applicable)

If this project includes an API server, you can start it from the root with:

```bash
pnpm dev:api
```

(Check the root `package.json` for available scripts.)

---

## 📝 Need more help?

- Open an issue in the repository.
- Make sure you’re using a **native Windows terminal** (not WSL) for the commands above – WSL is a Linux environment and may cause further platform issues.
