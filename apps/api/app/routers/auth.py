from fastapi import APIRouter
from pydantic import BaseModel, EmailStr

router = APIRouter()


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"


@router.post("/login", response_model=TokenResponse)
async def login(body: LoginRequest) -> TokenResponse:
    # TODO: implement Supabase auth
    raise NotImplementedError("auth not yet implemented")


@router.post("/logout")
async def logout() -> dict[str, str]:
    return {"message": "logged out"}
