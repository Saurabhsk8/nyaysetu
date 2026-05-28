.PHONY: dev down logs migrate seed

dev:
	docker compose up --build -d

down:
	docker compose down

logs:
	docker compose logs -f

migrate:
	docker compose exec api uv run alembic upgrade head

seed:
	docker compose exec api uv run python scripts/seed.py
