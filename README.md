# Find Your Feathers 🪶

> *Discover Your Wings. A sacred space for healing, transformation, and the journey home to yourself.*

[![License](https://img.shields.io/badge/license-Private-lightgrey?style=flat)](https://github.com/drasticstatic/findyourfeathers)
[![Public Preview](https://img.shields.io/badge/%F0%9F%8C%90%20Public%20Preview-Available-brightgreen)](https://drasticstatic.github.io/findyourfeathers-public-preview/) [![Synced via GitExporter](https://img.shields.io/badge/Synced%20via-GitExporter-blue)](https://github.com/open-condo-software/gitexporter) [![Built with Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code%20CLI-blueviolet)](https://code.claude.com/docs/en/overview) [![Status](https://img.shields.io/badge/Status-%F0%9F%94%A5%20Active%20Build-orange)](https://github.com/drasticstatic/findyourfeathers)

---

**🌐 [Explore the Public Preview →](https://drasticstatic.github.io/findyourfeathers-public-preview/)** · **🪶 [Visit the live site — findyourfeathers.org →](https://www.findyourfeathers.org)**

---

> 🔒 **Public mirror notice:** This repository is partially mirrored to a public preview via an automated GitExporter pipeline. The public version includes only sanitized source files. Private configuration, credentials, setup docs, and workflow files are excluded.

---

## 👋 About

**Find Your Feathers** 🪶 — a standalone personal healing & transformation site. Built as a luminous, contemplative space for self-discovery, with a focus on building an interactive FAQ interface and knowledge base in accordance with the services offered, enabling human and AI-assisted management of the Wix site.

This private repo is the build workspace. The public preview (`findyourfeathers-public-preview`) is the filtered output automatically synced on every push to `main`.

**Developer / builder:** Christopher Wilson (`drasticstatic`)
**AI agents:** Alfred (Claude Code CLI) — primary technical architect & builder

---

## 🎯 The Goal

Build a robust back-end context engine and interactive FAQ/knowledge-base interface in accordance with the healing and transformation services of findyourfeathers.org — a dev portal that collects data and presents content in an interactive Next.js static site. The FAQ database and Services pages serve as a workspace, enabling human and AI-assisted management of the Wix site. We aim to comply with GitHub Pages Terms of Service; as a solo developer learning to use code to help people, I may make mistakes along the way and welcome guidance.

---

## 🚀 Capabilities

### Core Features
- **Home** — Feather-branded landing page
- **Services** — Healing and transformation service listings
- **FAQ** — Comprehensive FAQ database (primary build focus)
- **Navbar** — Hamburger menu, "Explore" dropdown for FYF pages, GitHub link
- **Footer** — Discover Your Wings CTA, contact, GitHub source
- **Disclaimer Badge** — Persistent banner + concept-prototype disclosure modal
- **Custom 404** — Spiritual theme + site map

### Technical
- Next.js 16 (App Router) — Static Site Generation (`output: 'export'`)
- Tailwind CSS + Framer Motion — contemplative aesthetic, gentle animations
- TypeScript throughout — typed content data
- GitHub Pages deployment via public preview repo
- Private → public sync via GitExporter denylist pipeline
- Dark mode support across all pages
- Rainbow color theme (distinct from gold-themed iamoneself)
- Gold scroll progress bar, mobile hamburger menu

---

## 🗺️ Wix Site Map

The official Wix-hosted site at [findyourfeathers.org](https://www.findyourfeathers.org) includes:

| Page | URL |
|------|-----|
| Home | findyourfeathers.org |
| Services | findyourfeathers.org/services |
| FAQ | findyourfeathers.org/faq |
| Contact | findyourfeathers.org/contact |
| Who We Are | findyourfeathers.org/who-we-are |

> This dev portal serves as a workspace for building interactive FAQ interfaces and knowledge bases in accordance with the site's services, enabling human and AI-assisted management of the Wix site. It points to the official site for all services and contact.

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
│   ├── not-found.tsx         → Custom 404
│   ├── layout.tsx            → Root layout — Navbar, DisclaimerBadge, ScrollProgress, Footer
│   └── globals.css           → Tailwind imports and CSS variables
├── components/
│   ├── layout/               → Navbar (Feather icon, hamburger, Explore dropdown), Footer
│   ├── TeachingModal.tsx     → Teaching pill modal (scaffolded)
│   ├── DisclaimerBadge.tsx   → Persistent banner + disclosure modal
│   └── PageScrollProgress.tsx → Gold scroll progress bar
├── data/
│   └── faq.ts                → FAQ content data (scaffolded)
└── lib/
    └── utils.ts              → cn() and helpers
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
