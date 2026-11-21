# Ahmad Isah — Portfolio & Resume

Personal portfolio site for **Ahmad Isah**, a full-stack software engineer building mobile apps (Flutter, React Native), backend services (Node.js, Laravel) and payment systems.

Based in Gombe, Nigeria (GMT+1). Open to contract and remote work.

- **LinkedIn:** [linkedin.com/in/ahmerthiserh](https://linkedin.com/in/ahmerthiserh)
- **GitHub:** [github.com/ahmerthiserh](https://github.com/ahmerthiserh)
- **CV:** [`public/CV.pdf`](public/CV.pdf)

## What's on the site

### Experience

| Period | Role | Company |
| --- | --- | --- |
| April 2026 — Present | Software & Product Development Engineer | AWS Global Tech, Kano |
| 2024 — Present | Lead Software Engineer & Technical Co-Founder | Vetris Tech (Remote) |
| 2022 — April 2026 | Full-Stack Developer Intern | Briatek Computers Nigeria Limited, Gombe |

### Featured projects

- **[Mini Mart](https://minimart.vetristech.com/)**: an offline-first commerce marketplace built with Flutter, Node.js and PostgreSQL. Available on the web, [Google Play](https://play.google.com/store/apps/details?id=minimart.vetristech.com) and the [App Store](https://apps.apple.com/app/mini-mart-marketplace/id6804913345).
- **V Pay & FluxBills**: a payment and bill-payment API that issues virtual bank accounts and settles wallets. It processes webhooks idempotently using Node.js, Laravel, MySQL and Redis.
- **[SalesRepAnalytics](https://salesrepanalytics.com/)**: a platform that tracks sales performance, commissions and forecasts. Built with Next.js, TypeScript, Node.js and PostgreSQL.

### Technical stack

- **Mobile:** Flutter, Dart, React Native, offline data sync
- **Backend & APIs:** Node.js, Express, PHP, Laravel, REST, webhooks, microservices
- **Web frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Databases & cloud:** PostgreSQL, MySQL, Redis, MongoDB, Docker, Git, CI/CD
- **Fintech & integrations:** Paystack, Flutterwave, Stripe, OAuth2, JWT

### Certifications

- Meta Back-End Developer Specialization (Coursera, 2023)
- Meta Front-End Developer Specialization (Coursera, 2023)
- Database Structures and Management with MySQL (Coursera, 2023)
- Career Essentials in Software Development (Microsoft & LinkedIn, 2024)

## Built with

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4 and lucide-react.

## Project structure

```
app/            Layout, global styles and the single-page entry (page.tsx)
components/     Hero, experience, projects, skills, certifications, footer
data/           portfolio.ts holds all resume content in one place
public/         CV.pdf and project screenshots
```

## Updating the content

All resume content lives in [`data/portfolio.ts`](data/portfolio.ts):

- `PROFILE_DATA`: name, title, bio, contact links, CV path
- `EXPERIENCE`: roles, achievements, technologies
- `PROJECTS`: project cards, links, architecture notes
- `TECHNICAL_STACK`: skill categories
- `CREDENTIALS`: certifications and education

To refresh the downloadable CV, replace `public/CV.pdf`. To change a project screenshot, put the image in `public/projects/` and update that project's `image` path.

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Deployment

The site is a standard Next.js app, so it deploys to [Vercel](https://vercel.com/new) or any host that supports Node.js.
