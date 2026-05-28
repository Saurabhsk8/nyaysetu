from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env.local", extra="ignore")

    NODE_ENV: str = "development"

    # Database
    DATABASE_URL: str = "postgresql+asyncpg://postgres:postgres@localhost:5432/nyaysetu"

    # Next.js origin (used for CORS)
    NEXT_PUBLIC_APP_URL: str = "http://localhost:3000"

    # Groq
    GROQ_API_KEY: str = ""
    GROQ_MODEL: str = "llama-3.3-70b-versatile"

    # Google Generative AI
    GOOGLE_API_KEY: str = ""

    # Auth
    JWT_SECRET: str = "change-me-in-production"
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

    # Cloudinary
    CLOUDINARY_CLOUD_NAME: str = ""
    CLOUDINARY_API_KEY: str = ""
    CLOUDINARY_API_SECRET: str = ""

    # Logging
    LOG_LEVEL: str = "info"

    @property
    def cors_origins(self) -> list[str]:
        origins = {"http://localhost:3000", self.NEXT_PUBLIC_APP_URL}
        return list(origins)


settings = Settings()
