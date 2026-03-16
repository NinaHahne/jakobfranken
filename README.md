# Jakob Franken – Website

This repository contains the source code for the official website of **blues guitarist Jakob Franken**.

The site is built with **SvelteKit** and designed as a lightweight, fast-loading artist page presenting the new album, upcoming concerts, and essential links.

The project intentionally keeps the architecture simple while being prepared for future extensions such as a **headless CMS integration**.

---

## ✨ Features

- Album section with Bandcamp integration
- Upcoming concerts listing
- Responsive layout for mobile and desktop
- Reusable SVG icon components (Bandcamp, Spotify, Instagram, Mail)
- Lightweight architecture optimized for static hosting
- Prepared for future CMS integration (e.g. Sanity)

---

## 🧰 Tech Stack

- **SvelteKit**
- **TypeScript**
- **TailwindCSS**
- **@sveltejs/adapter-static** for static site generation

---

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Then open:

```
http://localhost:5173
```

---

## 📂 Project Structure

```
src/
├── routes/             # SvelteKit pages
│   ├── +layout.svelte
│   ├── +page.svelte
│   ├── imprint/        # Legal notice (Impressum)
│
├── lib/
│   ├── components/     # UI components
│   ├── icons/          # SVG icon components
│   ├── data/           # Structured content (e.g. concerts)
│   ├── utils/
│   └── types/
│
├── styles/
│   └── app.css
```

---

## 📅 Concert Data

Upcoming concerts are currently defined in:

```
src/lib/data/gigs.ts
```

Past and upcoming concerts are automatically filtered based on the current date.  
This structure is designed so it can later be replaced easily with data from a CMS such as **Sanity**.

---

## 🌐 Deployment

The site uses **static site generation** via `@sveltejs/adapter-static`.

This allows deployment to platforms such as:

- Netlify
- GitHub Pages
- Vercel
- traditional web hosting

---

## 📷 Image Optimization

Images are stored in **WebP format** for improved performance.

If needed, the project can be extended with tools such as:

```
vite-imagetools
```

for automated image conversion during the build process.

---

## ⚖️ Font Licenses

Font licenses used in this project are included in:

```
OFL.txt
```

These fonts are licensed under the **SIL Open Font License 1.1**.
