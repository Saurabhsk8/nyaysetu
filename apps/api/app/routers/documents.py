from fastapi import APIRouter, UploadFile

router = APIRouter()


@router.post("/upload")
async def upload_document(file: UploadFile) -> dict[str, str]:
    # TODO: implement Supabase Storage upload
    raise NotImplementedError("document upload not yet implemented")


@router.get("/")
async def list_documents() -> list[dict[str, str]]:
    # TODO: fetch documents from Supabase
    return []
