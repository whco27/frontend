# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Environment Setup

This project connects to the `twende-backend` API. To configure the backend API URL:

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file and set the appropriate values:
   ```
   # Backend API URL for twende-backend (Railway deployment)
   VITE_API_BASE_URL=http://localhost:8000/api
   
   # Daraja Payment API URL
   VITE_DARAJA_API_URL=http://localhost:5000
   ```

3. For production (Railway deployment), set the environment variables:
   - `VITE_API_BASE_URL`: Your deployed backend API URL (e.g., `https://your-backend.railway.app/api`)
   - `VITE_DARAJA_API_URL`: Your Daraja payment API URL

**Note:** Vite requires environment variables to be prefixed with `VITE_` to be exposed to the client-side code.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
