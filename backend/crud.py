import os
from dotenv import load_dotenv
from supabase import create_client, Client

# Load environment variables
load_dotenv()

# Initialize Supabase client
supabase: Client = create_client(
    os.getenv("SUPABASE_URL"),
    os.getenv("SUPABASE_KEY")
)

def get_or_create_demo_user():
    """Get or create a demo user in Supabase."""
    # Check if demo user exists
    response = supabase.table("users").select("*").eq("email", "demo@example.com").execute()
    
    if response.data:
        return response.data[0]
    
    # Create demo user if not exists
    new_user = {
        "email": "demo@example.com",
        "name": "Demo User"
    }
    response = supabase.table("users").insert(new_user).execute()
    return response.data[0]

def create_resume_record(user_id: int, file_path: str):
    """Create a new resume record in Supabase."""
    resume_data = {
        "user_id": user_id,
        "file_path": file_path,
        "parsed_data": None,
        "status": "pending"
    }
    response = supabase.table("resumes").insert(resume_data).execute()
    return response.data[0]

def get_resume_record(resume_id: int):
    """Get a resume record by ID."""
    response = supabase.table("resumes").select("*").eq("id", resume_id).execute()
    return response.data[0] if response.data else None

def update_resume_parsed(resume_id: int, parsed_json: dict):
    """Update resume record with parsed data."""
    update_data = {
        "parsed_data": parsed_json,
        "status": "parsed"
    }
    response = supabase.table("resumes").update(update_data).eq("id", resume_id).execute()
    return response.data[0]

def add_job_listing(resume_id: int, listing_dict: dict):
    """Add a job listing to Supabase."""
    job_data = {
        "resume_id": resume_id,
        "title": listing_dict["title"],
        "company_name": listing_dict["company_name"],
        "location": listing_dict["location"],
        "url": listing_dict["url"],
        "raw_description": listing_dict["raw_description"],
        "eligible": False,
        "match_reasons": None
    }
    response = supabase.table("job_listings").insert(job_data).execute()
    return response.data[0]

def get_job_listings_for_resume(resume_id: int):
    """Get all job listings for a resume."""
    response = supabase.table("job_listings").select("*").eq("resume_id", resume_id).execute()
    return response.data

def update_job_eligibility(job_id: int, eligible: bool, reasons: dict):
    """Update job listing eligibility and match reasons."""
    update_data = {
        "eligible": eligible,
        "match_reasons": reasons
    }
    response = supabase.table("job_listings").update(update_data).eq("id", job_id).execute()
    return response.data[0]

def create_application(job_listing_id: int, missing_fields: list):
    """Create a new application record."""
    app_data = {
        "job_listing_id": job_listing_id,
        "status": "needs_more_info",
        "missing_fields": missing_fields
    }
    response = supabase.table("applications").insert(app_data).execute()
    return response.data[0]

def get_eligible_jobs(resume_id: int):
    """Get all eligible jobs for a resume."""
    response = supabase.table("job_listings").select("*").eq("resume_id", resume_id).eq("eligible", True).execute()
    return response.data 