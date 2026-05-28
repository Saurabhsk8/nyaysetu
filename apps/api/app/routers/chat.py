from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class ChatRequest(BaseModel):
    message: str
    session_id: str | None = None


class ChatResponse(BaseModel):
    reply: str
    session_id: str


@router.post("/", response_model=ChatResponse)
async def chat(body: ChatRequest) -> ChatResponse:
    # TODO: implement Groq LLM call via app.services.llm
    raise NotImplementedError("chat not yet implemented")
