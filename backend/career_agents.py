import threading
from . import crud
from . import ai_utils
from . import job_scraper

def full_pipeline(resume_id: int, file_path: str):
    """Run the full pipeline for processing a resume and finding matching jobs."""
    try:
        # Read the resume file
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            raw_text = f.read()
        
        # Parse the resume
        parsed_data = ai_utils.parse_resume_text(raw_text)
        
        # Update resume record with parsed data
        crud.update_resume_parsed(resume_id, parsed_data)
        
        # Build keywords from skills and past titles
        keywords = []
        if parsed_data.get("skills"):
            keywords.extend(parsed_data["skills"])
        if parsed_data.get("past_titles"):
            keywords.extend(parsed_data["past_titles"])
        keywords_str = ", ".join(keywords)
        
        # Search for jobs
        job_listings = job_scraper.search_adzuna_jobs(keywords_str)
        
        # Add job listings to database
        for job in job_listings:
            crud.add_job_listing(resume_id, job)
        
        # Get all job listings for this resume
        db_jobs = crud.get_job_listings_for_resume(resume_id)
        
        # Classify job eligibility
        eligibility_results = ai_utils.classify_batch_eligibility(parsed_data, db_jobs)
        
        # Update job eligibility in database
        for result in eligibility_results:
            job_id = result["id"]
            eligible = result["eligible"]
            reasons = {
                "matching_skills": result["matching_skills"],
                "missing_requirements": result["missing_requirements"]
            }
            crud.update_job_eligibility(job_id, eligible, reasons)
            
            # Create application record for eligible jobs
            if eligible:
                crud.create_application(job_id, ["cover_letter", "phone_number"])
    
    except Exception as e:
        print(f"Error in full pipeline: {e}")

def launch_full_pipeline(resume_id: int, file_path: str):
    """Launch the full pipeline in a background thread."""
    thread = threading.Thread(target=full_pipeline, args=(resume_id, file_path))
    thread.start() 