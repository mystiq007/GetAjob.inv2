import os
from fastapi import FastAPI, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from . import crud
from . import career_agents

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload_resume/")
async def upload_resume(file: UploadFile, user_id: int = 1):
    """Upload a resume file and start processing."""
    # Validate file extension
    if not file.filename.endswith('.txt'):
        raise HTTPException(status_code=400, detail="Only .txt files are allowed")
    
    # Ensure uploads directory exists
    os.makedirs("uploads", exist_ok=True)
    
    # Save file
    file_path = f"uploads/{user_id}_{file.filename}"
    with open(file_path, "wb") as f:
        content = await file.read()
        f.write(content)
    
    # Ensure demo user exists
    user = crud.get_or_create_demo_user()
    
    # Create resume record
    resume = crud.create_resume_record(user_id, file_path)
    
    # Launch processing pipeline
    career_agents.launch_full_pipeline(resume["id"], file_path)
    
    return {
        "message": "Resume uploaded. Processing started.",
        "resume_id": resume["id"]
    }

@app.get("/parsed_resume/{resume_id}")
async def get_parsed_resume(resume_id: int):
    """Get the parsed resume data."""
    resume = crud.get_resume_record(resume_id)
    if not resume:
        raise HTTPException(status_code=404, detail="Resume not found")
    
    if resume["status"] != "parsed" or not resume["parsed_data"]:
        return {"status": "pending"}
    
    return {
        "status": "parsed",
        "parsed_data": resume["parsed_data"]
    }

@app.get("/eligible_jobs/{resume_id}")
async def get_eligible_jobs(resume_id: int):
    """Get eligible jobs for a resume."""
    jobs = crud.get_eligible_jobs(resume_id)
    return {"eligible_jobs": jobs}

@app.post("/auto_apply/{resume_id}")
async def auto_apply(resume_id: int):
    """Handle auto-apply request."""
    jobs = crud.get_job_listings_for_resume(resume_id)
    
    response = {
        "submitted": [],
        "needs_info": {}
    }
    
    for job in jobs:
        if job["eligible"]:
            response["needs_info"][str(job["id"])] = ["cover_letter", "phone_number"]
    
    return response 