# Abhishek Jaswal — Portfolio

A modern, responsive developer portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Features a dark aesthetic with glassmorphism cards, smooth animations, a real-time contact form, and full SEO optimization.

🌐 **Live:** [abhishek-jaswal.vercel.app](https://abhishek-jaswal.vercel.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Email | Nodemailer (Gmail SMTP) |
| Fonts | Syne + DM Sans (Google Fonts) |
| Icons | Lucide React, React Icons |
| Deployment | Vercel |

---

## Project Structure

```
├── app/
│   ├── layout.js           # Root layout, fonts, SEO metadata, JSON-LD schema
│   ├── page.js             # Home page — assembles all sections
│   ├── globals.css         # Global styles, design tokens, utility classes
│   └── api/
│       └── contact/
│           └── route.js    # POST endpoint — Nodemailer email handler
│
└── components/
    ├── Header.js           # Fixed navbar with scroll detection, mobile drawer
    ├── Main.js             # Hero section with typewriter, floating image, CTAs
    ├── Skills.js           # Color-coded skill category cards
    ├── Projects.js         # Featured projects with media, tags, live links
    ├── Experience.js       # Timeline-style work history
    ├── Education.js        # Academic background cards
    ├── ContactForm.js      # Contact form + info panel
    ├── Footer.js           # Footer with brand, social links, back-to-top
    └── LocalTime.js        # Live clock widget (top-right corner)
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- A Gmail account (for the contact form)

### Installation

```bash
# Clone the repo
git clone https://github.com/Abhishek-jaswal/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-gmail-app-password
RECEIVER_EMAIL=where-you-want-emails-sent@gmail.com
```

> **Important:** Use a [Gmail App Password](https://myaccount.google.com/apppasswords), not your regular Gmail password. You'll need to enable 2-Factor Authentication on your Google account first.

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Features

- **Responsive Design** — Mobile-first, tested across all screen sizes
- **Dark Theme** — Deep navy background (`#070a12`) with green accents
- **Smooth Animations** — Framer Motion scroll-triggered reveals and micro-interactions
- **Typewriter Effect** — Animated role titles in the hero section
- **Contact Form** — Fully functional email submission via Nodemailer (no third-party service needed)
- **SEO Optimized** — OpenGraph tags, Twitter cards, JSON-LD Person schema, canonical URLs
- **Performance** — `next/image` with priority loading, throttled scroll listeners, memoized components
- **Accessibility** — ARIA labels, semantic HTML, keyboard navigable, `aria-live` regions

---

## Deployment (Vercel)

1. Push your code to GitHub
2. Import the repository at [vercel.com/new](https://vercel.com/new)
3. Add the three environment variables in the Vercel dashboard under **Settings → Environment Variables**
4. Deploy — Vercel auto-detects Next.js

---

## Customization

### Update personal info

| File | What to change |
|---|---|
| `components/Main.js` | Name, bio, hero CTAs, photo |
| `components/Skills.js` | Skill categories and items |
| `components/Projects.js` | Project list, links, images |
| `components/Experience.js` | Work history |
| `components/Education.js` | Education entries |
| `components/ContactForm.js` | Email, phone, location, social links |
| `app/layout.js` | Page title, meta description, keywords, schema |

### Swap profile photo

Replace `/public/abhishekk.jpeg` with your own image (keep the same filename or update the `src` in `Main.js`).

### Add/remove sections

Each section is a standalone component. Simply add or remove it from `app/page.js`.

---

## Assets

Place all project media in `/public/assets/`:

```
public/
├── abhishekk.jpeg       # Profile photo
├── og-image.png         # OpenGraph image (1200×630)
├── niit.png             # Education logos
├── NIIT-1.png
├── dharamshala.png
├── mountainkidai.png    # Company logos
├── logo-mcm.png
├── MIS.png
└── assets/
    ├── fund.gif
    ├── tnh.mp4
    ├── ai-interview.gif
    ├── chatt.gif
    └── resume.gif
```

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Built with ❤️ by <a href="https://github.com/Abhishek-jaswal">Abhishek Jaswal</a></p>