# CG Consulting – HR Consultancy Website

Client project built with **Next.js** and deployed on **Vercel**.  
A high-conversion website for an HR consultancy, focused on employer branding, job offers, and lead generation.

Live site: https://cg-consulting.es

---

## Project overview

This project is a **custom-designed HR consultancy website** featuring:

- Marketing-focused landing pages
- Job offers / vacancies listing
- Blog powered by a headless CMS
- Contact and lead generation forms
- SEO-optimized structure and metadata
- Smooth animations and transitions

The goal was to create a **professional, trustworthy, and conversion-oriented web presence** for an HR consulting business.

---

## Tech stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Sanity CMS** (blog & job offers)
- **Vercel** (deployment & hosting)

---

## Key features

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

## Deployment

The project is deployed on **Vercel**.

Typical deployment flow:

1. Connect GitHub repository to Vercel
2. Configure environment variables
3. Deploy via Vercel dashboard or automatic CI on push

---

## Domain and DNS setup

The domain is managed externally (Raiola Networks) and connected to Vercel via DNS.

Typical DNS configuration:

- `A` record for root domain (`@`) → Vercel IP
- `CNAME` for `www` → Vercel domain

Exact values depend on the Vercel project and are provided in the Vercel dashboard.

---

## Environment variables

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
```

Environment variables are not committed to the repository.

**Analytics IDs** (GA4 Measurement ID, GTM Container ID) are **not** set in `.env` for this project—they are edited in **Sanity → Site Settings** so marketers can change them without redeploying.

---

## Analytics: Google Analytics 4 (GA4) and Google Tag Manager (GTM)

This section is written for **anyone** setting up or auditing tracking: developers, marketers, or agencies.

### What this site does (behaviour you must know)

1. **Cookie consent gates all third-party analytics.** The server reads the `cookie_consent` cookie. If it is not `accepted`, **no GA4 `gtag.js` script and no GTM container** are injected (`app/layout.tsx`).
2. **Configuration lives in Sanity**, not in environment variables. Open **Sanity Studio → Site Settings → Analytics setup** and choose **None**, **Google Analytics (GA4)**, or **Google Tag Manager (Recommended)**. Fill in the matching ID field.
3. **Choose one mode in production:** either **GA4 direct** or **GTM**. Do not rely on having both IDs active in Sanity at once; the UI is designed for a single mode.
4. **Single-page app (SPA) navigation:** after the first load, Next.js changes routes without a full reload. The app sends **explicit page-view-style updates** so GA4/GTM still see each URL.
   - **GA4 direct:** `gtag.js` is initialised with `send_page_view: false`; `components/Analytics.tsx` calls `gtag("config", measurementId, { page_path })` when the route changes.
   - **GTM:** the same component pushes `{ event: "virtual_pageview", page_path: "..." }` to `dataLayer` on each route change. **You must create a GTM tag/trigger for this event** or GA4 will miss most pages (see below).
5. **Custom events** (CTA clicks, nav, form submit) go through `lib/tracking.ts`: **GTM** → `dataLayer.push({ event, ...data })`; **GA4** → `gtag("event", event, data)`.
6. **Consent Mode (GTM path):** before the container loads, defaults deny `analytics_storage` and `ad_storage`; after the user accepts or rejects, the app updates consent and pushes `consent_update` to the data layer (`lib/CookieConsentContext.tsx`).

---

### Step 1 — Create the Google assets

**Always create a GA4 property** (you need a Measurement ID even if you only install tags via GTM).

1. Go to [Google Analytics](https://analytics.google.com/) → **Admin** → create or select a **property** → **Data streams** → **Web** → enter your production URL.
2. Copy the **Measurement ID** (format `G-XXXXXXXXXX`).

**If you use GTM** (recommended for production):

1. Go to [Google Tag Manager](https://tagmanager.google.com/) → **Create container** → **Web**.
2. Copy the **Container ID** (format `GTM-XXXXXXX`).

---

### Step 2 — Enter IDs in Sanity Studio

1. Deploy or run the site and open **Sanity Studio** (e.g. `https://your-domain.com/studio`).
2. Open the **Site Settings** singleton/document.
3. Set **Analytics setup**:
   - **None** — no tracking scripts.
   - **Google Analytics (GA4)** — paste the **GA4 Measurement ID** into **GA4 Measurement ID**.
   - **Google Tag Manager (Recommended)** — paste the **GTM Container ID** into **Google Tag Manager ID**.
4. **Publish** (or save, depending on your workflow) so the live site fetches the new settings.

---

### Step 3A — Track with GA4 only (no GTM)

Use this when you want the smallest setup and are happy to manage tags only in code + GA4.

1. Complete **Step 1** (GA4 stream) and **Step 2** with **GA4** selected in Sanity.
2. On the live site, open a **private/incognito** window, **accept** the cookie banner.
3. Verify:
   - Browser **DevTools → Network**: requests to Google appear **after** consent.
   - **GA4 → Reports → Realtime**: your visit appears.
4. Click internal links: each navigation should still produce measurement traffic (SPA page paths via `Analytics.tsx`).
5. Optional: while testing locally or with debug enabled, use **GA4 → Admin → DebugView**.

**Custom events in GA4:** `cta_click`, `navigation_click`, `form_submit` are sent with `gtag("event", …)` after consent. Inspect parameter names in **GA4 → Admin → Custom definitions** if you register them.

---

### Step 3B — Track with GTM (recommended) + GA4 inside GTM

Use this when marketers need to add pixels, conversions, and tags without code changes.

#### B1 — Install GA4 via GTM

1. Complete **Step 1** (GTM container + GA4 stream) and **Step 2** with **GTM** selected in Sanity.
2. In GTM, create a **Google tag** or **GA4 Configuration** tag (wording depends on GTM version) with your **Measurement ID** `G-XXXXXXXXXX`.
3. Trigger: **Initialization – All Pages** or **All Pages**, following Google’s template for your workspace.
4. **Submit** and **Publish** the container.

#### B2 — SPA page views: trigger on `virtual_pageview`

Without this, you often only see the first page after consent.

The site pushes to `dataLayer`:

```js
{
  event: "virtual_pageview",
  page_path: "/en/services"  // pathname + query string when present
}
```

In GTM:

1. **Triggers → New → Custom Event** → Event name: **`virtual_pageview`**.
2. **Tags → New → Google Analytics: GA4 Event** (or your GA4 event tag type):
   - Link to your GA4 **Measurement ID** / configuration tag.
   - **Event name:** e.g. `page_view` (or your naming convention).
   - **Event parameters:** add **`page_path`** or map Data Layer `page_path` to GA4’s **`page_location`** / **`page_path`** (match what you want in reports).
3. Attach this tag to the **`virtual_pageview`** trigger.
4. Publish.

#### B3 — Custom events: mirror what the site pushes

After consent, the data layer uses these **event names** (exact strings):

| Event name | When | Keys on the same object (Data Layer) |
|------------|------|--------------------------------------|
| `cta_click` | CTA / card clicks | `location`, `label` |
| `navigation_click` | Header / footer nav | `location`, `label` |
| `form_submit` | Successful contact form submit | `form` |
| `virtual_pageview` | Client-side route change | `page_path` |
| `consent_update` | User accepts or rejects cookies | `analytics_storage`, `ad_storage` |

For each event you want in GA4:

1. **Trigger:** Custom Event with that **exact** name.
2. **Tag:** GA4 Event; map **Data Layer variables** to GA4 event parameters.

**Create Data Layer variables** in GTM (Variables → New → Data Layer Variable) for: `location`, `label`, `form`, `page_path` (variable **name** = key the site sends).

#### B4 — Test GTM

1. **GTM → Preview** → connect to your production or staging URL.
2. Accept cookies on the site.
3. Confirm your **GA4 / Google** tag fires, then navigate: **`virtual_pageview`** should appear on each route.
4. Click navigation and CTAs; confirm **`navigation_click`** and **`cta_click`**.
5. Submit the contact form; confirm **`form_submit`**.
6. Use [Tag Assistant](https://tagassistant.google.com/) and GA4 **Realtime** / **DebugView** as needed.

#### B5 — Consent Mode in GTM

The site sets default denied consent and updates after the banner. Align your GTM tags with [Consent Mode](https://support.google.com/tagmanager/answer/10718549) if your organisation requires it.

---

### Event payload reference (for implementers)

Source: `lib/tracking.ts` (`EVENTS`) and components that call `trackEvent`.

- **`cta_click`:** `location` (e.g. `homepage_hero`, `cta_section`, `service_card`, `job_offer_card`, `blog_card`, `contact_form`), `label` (button text or title).
- **`navigation_click`:** `location` is `header_navigation` or `footer_navigation`; `label` is the link text.
- **`form_submit`:** `form` is e.g. `contact_form`.

---

### Troubleshooting

| Problem | What to check |
|--------|----------------|
| No scripts load | Sanity mode/ID; user must **accept** cookies; hard refresh after changing Sanity. |
| GA4: only one page | Direct GA4: ensure `Analytics.tsx` runs (consent `accepted`). GTM: add **`virtual_pageview` → GA4** (Step 3B2). |
| GTM Preview shows nothing | Wrong Container ID; ad blocker; cookies not accepted. |
| Events in GTM but not GA4 | GA4 tags unpublished; wrong Measurement ID; trigger event name must match **exactly** (`cta_click`, not `CTA Click`). |
| `window.__analyticsMode` | Set in layout from Sanity; must be `ga4` or `gtm` for custom events to send. |

---

### Privacy & compliance

Cookie copy and legal basis are your responsibility. This implementation **does not** inject GA4/GTM until the user **accepts** analytics cookies; ensure your banner and policy match applicable regulations.

---

## Development

Install dependencies and run the development server:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
```

Then open:

```txt
http://localhost:3000
```

---

## Notes

- This repository represents a delivered client project.
- The codebase is intentionally stable and not used as an evolving template.
- A separate internal starter/template is used for future client work.

---

## Author

Built by Asa Eriksson  
Frontend Developer & Designer  
Specialized in Next.js, UI systems, and conversion-focused websites.
