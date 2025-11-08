# 🌙 DreamStack Node.js — Landing Page (Version A: Minimal)

A clean, minimal marketing page for **DreamStack Node.js**, built with **Tailwind CSS** using your DreamVerse brand colors.  
Includes Gumroad checkout integration and placeholder for Gumroad's follow/fan list or an email waitlist form.

---

## 🚀 Features

- ⚡ **Minimal + fast**: Tailwind CSS, no framework runtime.
- 🎨 **DreamVerse colors**:  
    - Blue: `#0069FF`  
    - Dark Gray: `#333333`  
    - Light Gray: `#F5F5F5`
- 🧱 **Responsive layout** (desktop → mobile)
- 💰 **Gumroad checkout button** included
- 💌 **Gumroad follow/fan** or simple email capture placeholder
- 📄 Easy to deploy to Netlify, Vercel, or any static host

---

## 🧩 Project structure

```
dreamstack-landing-minimal/
├── dist/                  # Output folder after build
├── src/
│   ├── index.html         # Main HTML (edit content here)
│   └── input.css          # Tailwind source
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

---

## 🛠️ Quick Start

### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Build CSS & copy HTML to dist
```bash
npm run build
```

This runs Tailwind CLI → `dist/styles.css` and copies `src/index.html` → `dist/index.html`.

### 3️⃣ Serve locally
```bash
npm start
```

Then open `http://localhost:5000` to preview your landing page.

---

## 🔁 Dev Mode (Watch CSS)

```bash
npm run dev:css
```

This will rebuild styles automatically as you edit `src/input.css`.

**Note:** HTML doesn't auto-copy; manually copy it to `dist/` when you make edits.

---

## 🧩 Customization

### 🖼 Logo

- Place your logo file in `dist/assets/logo.svg`.
- Or change the `<img src="/assets/logo.svg">` path inside `index.html`.

### 💰 Gumroad Product Button

Replace all instances of:

```
https://gumroad.com/l/YOUR_GUMROAD_PRODUCT_URL
```

with your actual Gumroad product link (e.g. `https://gumroad.com/l/dreamstack-nodejs`).

### 💌 Gumroad Follow / Fan

1. Log into Gumroad → Profile → Widgets → "Follow" or "Embed" section.
2. Copy the snippet Gumroad provides.
3. Paste it into the hero area where the comment indicates:

```html
<!-- Replace this section with Gumroad follow/fan embed code -->
```

**Example:**

```html
<script src="https://gumroad.com/js/gumroad.js"></script>
<a class="gumroad-button" href="https://gumroad.com/YOURUSERNAME">Follow on Gumroad</a>
```

### 📧 Email capture form

If you prefer your own waitlist backend:

1. Replace the `handleNotify()` function in `<script>` with a `fetch()` POST to your API.

**Example (pseudo):**

```javascript
fetch('/api/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
})
```

---

## 🚀 Deploying

Once you've run:

```bash
npm run build
```

You can deploy the contents of the `dist/` folder to any static host:

- **Vercel**: drag-and-drop `dist` or use `vercel --prod`
- **Netlify**: drag-and-drop folder or run `netlify deploy --prod`
- **GitHub Pages**: push `dist` to `gh-pages` branch

---

## 🧠 Tips

- ✅ Always minify via `npm run build` before deployment.
- 🌐 Add analytics or tracking scripts inside `<head>` of `index.html`.
- 🧱 You can later port this exact layout into a React/Next app — all Tailwind classes remain identical.

---

## 🪶 Credits

Designed for **DreamVerse** by **Kata ⚡**  
© 2025 DreamVerse – All rights reserved