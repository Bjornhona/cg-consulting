# CG Consulting – HR Consultancy Website

Client project built with **Next.js** and deployed on **Vercel**.  
A high-conversion website for an HR consultancy, focused on employer branding, job offers, and lead generation.

🌐 Live site: https://cg-consulting.es

---

## ✨ Project Overview

This project is a **custom-designed HR consultancy website** featuring:

- Marketing-focused landing pages
- Job offers / vacancies listing
- Blog powered by a headless CMS
- Contact and lead generation forms
- SEO-optimized structure and metadata
- Smooth animations and transitions

The goal was to create a **professional, trustworthy, and conversion-oriented web presence** for an HR consulting business.

---

## 🛠 Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Sanity CMS** (blog & job offers)
- **Vercel** (deployment & hosting)

---

## 📄 Key Features

- **Custom UI & UX design** (not a template)
- **Headless CMS integration** (Sanity) for:
  - Blog posts
  - Job offers
- **SEO setup**
  - Metadata
  - Open Graph
  - Structured content
- **Animated UI** using Framer Motion
- **Contact form** with environment-based configuration
- **Responsive & performance-focused**

---

## 🚀 Deployment

The project is deployed on **Vercel**.

Typical deployment flow:
1. Connect GitHub repository to Vercel
2. Configure environment variables
3. Deploy via Vercel dashboard or automatic CI on push

---

## 🌍 Domain & DNS Setup

The domain is managed externally (Raiola Networks) and connected to Vercel via DNS.

Typical DNS configuration:
- `A` record for root domain (`@`) → Vercel IP
- `CNAME` for `www` → Vercel domain

Exact values depend on the Vercel project and are provided in the Vercel dashboard.

---

## 🔐 Environment Variables

This project relies on environment variables for configuration.

Create a `.env.local` file based on `.env.example`.

Typical variables include:
- Sanity project ID
- Sanity dataset
- Sanity API token
- Public site configuration values

Example:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=xxxx
⚠️ Environment variables are not committed to the repository.

🧑‍💻 Development
Install dependencies and run the development server:

bash
Copy code
npm install
npm run dev
# or
yarn install
yarn dev
Then open:

arduino
Copy code
http://localhost:3000
📌 Notes
This repository represents a delivered client project

The codebase is intentionally stable and not used as an evolving template

A separate internal starter/template is used for future client work

👩‍💻 Author
Built by Asa Eriksson
Frontend Developer & Designer
Specialized in Next.js, UI systems, and conversion-focused websites
