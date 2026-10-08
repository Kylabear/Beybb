# For my beybb ♡

A small, responsive interactive love letter built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. It runs entirely in the browser; there is no server, database, or external asset dependency.

## Run locally

1. Install [Node.js](https://nodejs.org/) (version 20.19+ or 22.12+).
2. In this folder, install the project dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Open the local URL printed by Vite.

## Production build

```sh
npm run build
npm run preview
```

The production-ready static site is written to `dist/`.

## Deploy to Vercel

Import this project folder into Vercel, or install the Vercel CLI and run `vercel` from the project directory. Vercel detects Vite automatically. Use `npm run build` as the build command and `dist` as the output directory; no environment variables or backend configuration are needed.

## Personalize

Edit the letter text in `src/components/Letter.tsx` to add your own memories or personal details. The birthdate answer is `22` and can be changed in `src/components/BirthdatePrompt.tsx`.
