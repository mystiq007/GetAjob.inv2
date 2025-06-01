# backend/app.py

import os
import time
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from supabase import create_client
from .career_agents import launch_full_pipeline

# 1) Load environment variables from your .env (should include SUPABASE_URL & SUPABASE_KEY)
load_dotenv()

# 2) Initialize Supabase client
supabase = create_client(os.getenv("SUPABASE_URL"), os.getenv("SUPABASE_KEY"))

# 3) Create FastAPI app and add CORS
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:3000", "http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)

@app.post("/upload_resume/")
async def upload_resume_minimal(user_id: int, file: UploadFile = File(...)):
    """
    STEP 1: Minimal handler – just write the uploaded file to disk.
    """
    try:
        # 1) Read bytes
        contents = await file.read()

        # 2) Ensure uploads/ exists
        os.makedirs("uploads", exist_ok=True)

        # 3) Write file to disk
        file_location = f"uploads/{file.filename}"
        with open(file_location, "wb") as f:
            f.write(contents)

        # 4) Return JSON success
        return JSONResponse({"message": f"Wrote {file.filename} to disk."})

    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})
