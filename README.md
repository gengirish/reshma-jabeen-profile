# Reshma Jabeen — Digital Profile

An AI-powered digital profile portfolio for **Reshma Jabeen**, Program & Migration Manager (19+ years across cloud migration, integration and enterprise transformation).

Built with Next.js 14 (App Router), TypeScript and Tailwind CSS. Features a neural-themed dark UI, animated hero, career timeline, career-DNA visualizations, and a "Talk to My Resume" AI chat assistant.

> Built by [IntelliForge AI](https://www.intelliforge.tech/).

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Royal Blue neural theme)
- **AI Chat:** OpenRouter (`meta-llama/llama-3.3-70b-instruct`)
- **Hosting:** Vercel

## Getting Started

```bash
npm install
cp .env.example .env       # add your OPENROUTER_API_KEY
npm run dev                # http://localhost:3000
```

## Environment Variables

| Variable | Purpose | Required |
|----------|---------|----------|
| `OPENROUTER_API_KEY` | AI chat assistant | Yes (for chat) |
| `UPSTASH_REDIS_REST_URL` | Rate limiting (optional) | No |
| `UPSTASH_REDIS_REST_TOKEN` | Rate limiting (optional) | No |

Without `OPENROUTER_API_KEY`, the chat widget still loads and returns a friendly fallback message.

## Project Structure

```
src/
  app/
    layout.tsx            # SEO metadata + fonts
    page.tsx              # Section composition
    globals.css           # Theme + utilities
    api/chat/route.ts     # AI assistant (system prompt + OpenRouter)
    og-image.png/route.tsx# Dynamic Open Graph image
    robots.ts / sitemap.ts
  components/             # Hero, Timeline, SkillDNA, ChatWidget, etc.
  data/resume-data.ts     # All profile content
  middleware.ts           # Chat rate limiting
```

## Updating Content

Edit `src/data/resume-data.ts` for experience, skills, projects and testimonials. Update the `SYSTEM_PROMPT` in `src/app/api/chat/route.ts` if the career data changes so the AI assistant stays accurate.

## Deploy

```bash
npm i -g vercel
vercel --prod
vercel env add OPENROUTER_API_KEY production
```

Suggested project slug: `reshma-jabeen-profile`.

---

Want a profile like this? [Join our WhatsApp group](https://chat.whatsapp.com/LDqzLHYMlhg9GiO0yRrUOS?mode=gi_t).
