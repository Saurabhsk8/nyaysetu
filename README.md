# NyaySetu (न्यायसेतु) — Bridge to Justice

A legal access platform that bridges the justice gap by providing AI-powered legal guidance to underserved communities.

## Monorepo Structure

```
nyaysetu/
├── apps/
│   ├── web/          # Next.js 15 frontend
│   └── api/          # FastAPI backend
├── packages/
│   └── shared/       # Shared TypeScript types & Zod schemas
├── docker/
│   └── nginx/        # Nginx reverse proxy
├── docker-compose.yml
└── docker-compose.prod.yml
```

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | Next.js 15, TypeScript, TailwindCSS v4, shadcn/ui |
| Backend    | FastAPI (Python)                    |
| Database   | PostgreSQL via Supabase             |
| Cache      | Redis via Upstash                   |
| LLM        | Groq                                |
| Deployment | Docker Compose + Nginx              |

## Getting Started

### Prerequisites

- Node.js ≥ 20
- pnpm ≥ 9
- Python ≥ 3.12
- Docker & Docker Compose

### Setup

```bash
# Install JS dependencies
pnpm install

# Copy and fill env vars
cp .env.example .env.local

# Start all services
docker compose up
```

### Development (without Docker)

```bash
# Frontend
pnpm --filter web dev

# Backend
cd apps/api
python -m uvicorn main:app --reload

# All apps in parallel
pnpm dev
```

## Scripts

| Command          | Description                        |
|------------------|------------------------------------|
| `pnpm dev`       | Start all apps in parallel         |
| `pnpm build`     | Build all packages and apps        |
| `pnpm lint`      | Lint all workspaces                |
| `pnpm typecheck` | Type-check all workspaces          |
| `pnpm test`      | Run all test suites                |
| `pnpm format`    | Format all files with Prettier     |

## Environment Variables

See `.env.example` for all required environment variables with descriptions.

## Contributing

1. Fork and create a feature branch (`feat/your-feature`)
2. Follow conventional commits (`feat:`, `fix:`, `docs:`, etc.)
3. Open a PR — never push directly to `main`
