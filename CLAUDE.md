# NyaySetu (न्यायसेतु — Bridge to Justice)

## Project Overview
Internal police-only tool for Goa Home Ministry. Officers record complainant statements and AI drafts formal FIRs. No citizen-facing portal exists.

## Tech Stack
- **Frontend**: Next.js 15 App Router, TypeScript, TailwindCSS v4, shadcn/ui
- **Backend**: FastAPI (Python 3.12)
- **Database**: PostgreSQL via Supabase
- **Cache**: Redis via Upstash
- **LLM**: Groq
- **Deployment**: Docker Compose

## Architecture
Monorepo structure:
- `apps/web` — Next.js frontend application
- `apps/api` — FastAPI backend application
- `packages/shared` — Shared types, utilities, and constants

## Roles & Users
- **Roles**: officer, admin — no citizen role exists in this system
- **Complainant**: plain data fields on FIR form, never a system user, never logs in

## Code Style & Conventions
- **Components**: Functional components only, no class components
- **Async/await**: Use async/await everywhere (not promise chains)
- **Validation**: Zod for all input validation with explicit schemas
- **Return types**: All functions must have explicit return type annotations
- **File naming**: kebab-case (e.g., `user-profile.tsx`, `api-client.ts`)
- **Components**: PascalCase (e.g., `UserProfile`, `ApiClient`)
- **Variables**: camelCase (e.g., `userName`, `isLoading`)
- **Environment vars**: SCREAMING_SNAKE_CASE (e.g., `DATABASE_URL`, `API_KEY`)

## Git Workflow
- Use conventional commits (feat:, fix:, docs:, refactor:, test:, etc.)
- Create feature branches; never push directly to main
- Keep commits atomic and descriptive

## Docker
- All services run via `docker compose up` with no additional manual setup required
- Ensure all configurations are in `docker-compose.yml` or environment files

## Testing
- **Frontend**: Vitest for unit and integration tests
- **Backend**: Pytest for unit and integration tests
- **Minimum requirement**: Happy-path tests for each user story completed in a sprint

## LLM Integration
- **Critical**: All LLM calls must route through `apps/api` — never call Groq/external LLM directly from the frontend
- This ensures security, rate limiting, and audit logging at the backend

## Secrets & Configuration
- Read secrets exclusively from `process.env` (frontend) or environment variables (backend)
- Never hardcode secrets, API keys, or sensitive configuration
- Use `.env.local` for development (add to `.gitignore`)
