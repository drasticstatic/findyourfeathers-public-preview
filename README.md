# Find Your Feathers 🪶

> *Discover Your Wings. A sacred space for healing, transformation, and the journey home to yourself.*

[![License](https://img.shields.io/badge/license-Private-lightgrey?style=flat)](https://github.com/drasticstatic/findyourfeathers)
[![Public Preview](https://img.shields.io/badge/%F0%9F%8C%90%20Public%20Preview-Coming%20Soon-yellow)](https://github.com/drasticstatic/findyourfeathers-public-preview) [![Synced via GitExporter](https://img.shields.io/badge/Synced%20via-GitExporter-blue)](https://github.com/open-condo-software/gitexporter) [![Built with Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code%20CLI-blueviolet)](https://code.claude.com/docs/en/overview) [![Status](https://img.shields.io/badge/Status-%F0%9F%94%A5%20Active%20Build-orange)](https://github.com/drasticstatic/findyourfeathers)

---

**🌐 [Explore the Public Preview →](https://drasticstatic.github.io/findyourfeathers-public-preview/)** · **🪶 [Visit the live site — findyourfeathers.org →](https://www.findyourfeathers.org)**

---

> 🔒 **Public mirror notice:** This repository is partially mirrored to a public preview via an automated GitExporter pipeline. The public version includes only sanitized source files. Private configuration, credentials, setup docs, and workflow files are excluded.

---

## 👋 About

**findyourfeathers.org** — a personal healing & transformation site. Built to be a luminous, contemplative space that invites deep self-inquiry and authentic transformation.

This private repo is the build workspace. The public preview (`findyourfeathers-public-preview`) is the filtered output automatically synced on every push to `main`.

**Developer / builder:** Christopher Wilson (`drasticstatic`)
**AI agents:** Alfred (Claude Code CLI) — primary technical architect & builder

---

## 🎯 The Goal

Build a high-performance Next.js static site that works **in tandem with Wix** — complimenting, not replacing. External pages callable from Wix, future CMS integration via Alfred:

- **Healing-centered design** — warm, spiritual aesthetic that feels like sacred space
- **Personal transformation content** — guided pathways for self-discovery and healing
- **Dark mode** as a first-class experience — the site glows in the dark
- **Framer Motion** — subtle entrance animations, scroll-driven transitions
- **Mobile-first responsive** — every page optimized for all screen sizes
- **GitHub Pages deployment** — lightning-fast static delivery worldwide

---

## 🚀 Capabilities

### Technical
- Next.js 15 (App Router) — Static Site Generation (`output: 'export'`)
- Tailwind CSS + Framer Motion — contemplative aesthetic, gentle animations
- TypeScript throughout — typed content data
- GitHub Pages deployment via public preview repo
- Private → public sync via GitExporter denylist pipeline
- Dark mode support across all pages

---

## 🏗️ Architecture

```
Private Repo (source + secrets)              Public Repo (GitHub Pages host)
github.com/drasticstatic/findyourfeathers →→→ github.com/drasticstatic/findyourfeathers-public-preview
        │                                        │
        │  GitExporter (on push to main)         │
        │  filters denylist → pushes clean       │
        └──────────────────────────────────────► └── GitHub Pages live URL
```

```text
src/
├── app/
│   ├── page.tsx              → Home / Landing
│   ├── layout.tsx            → Root layout with fonts and metadata
│   └── globals.css           → Tailwind imports and CSS variables
├── components/
│   ├── layout/               → Header, Footer, Navigation
│   ├── ui/                   → Button, Card, Accordion, etc.
│   └── sections/             → Hero, Welcome, and other page sections
├── lib/
│   └── utils.ts              → cn() and helpers
└── public/                    → Static assets (SVGs, images)
```

---

## 💻 Development

```bash
npm install
npm run dev
# Opens at http://localhost:3000
```

## 📦 Static Build

```bash
npm run build
# Produces static site in /out
```

---

## 📜 License

Private repository. All rights reserved.
