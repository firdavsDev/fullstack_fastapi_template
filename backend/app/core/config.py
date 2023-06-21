from typing import Any, Dict, List, Optional

from pydantic import BaseSettings, HttpUrl, PostgresDsn, validator
from pydantic.networks import AnyHttpUrl


class Settings(BaseSettings):
    PROJECT_NAME: str = "FastAPI Template"

    SENTRY_DSN: Optional[HttpUrl] = None

    API_PATH: str = "/api/v1"

    ACCESS_TOKEN_EXPIRE_MINUTES: int = 7 * 24 * 60  # 7 days

    BACKEND_CORS_ORIGINS: List[AnyHttpUrl] = [
        "http://localhost",
        "http://localhost:3000",
    ]

    # The following variables need to be defined in environment

    DATABASE_URL: PostgresDsn
    ASYNC_DATABASE_URL: Optional[PostgresDsn]

    @validator("ASYNC_DATABASE_URL")
    def build_async_database_url(cls, v: Optional[str], values: Dict[str, Any]):
        """Builds ASYNC_DATABASE_URL from DATABASE_URL."""
        v = values["DATABASE_URL"]
        return v.replace("postgresql", "postgresql+asyncpg", 1) if v else v

    SECRET_KEY: str = "secret"
    #  END: required environment variables


settings = Settings()
