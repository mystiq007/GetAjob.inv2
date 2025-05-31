import os
import json
from dotenv import load_dotenv
import openai

# Load environment variables
load_dotenv()

# Initialize OpenAI client
openai.api_key = os.getenv("OPENAI_KEY")

def parse_resume_text(resume_text: str) -> dict:
    """Parse resume text using OpenAI GPT-4 to extract structured data."""
    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {
                    "role": "system",
                    "content": "You are a JSON extractor. Return valid JSON only."
                },
                {
                    "role": "user",
                    "content": f"""Extract the following information from this resume as JSON:
                    - name (string)
                    - email (string)
                    - phone (string)
                    - skills (array of strings)
                    - experience (object mapping skills to years of experience)
                    - education (array of objects with degree, institution, year)
                    - past_titles (array of strings)
                    
                    Resume text:
                    {resume_text}"""
                }
            ]
        )
        
        # Parse the JSON response
        parsed_data = json.loads(response.choices[0].message.content)
        return parsed_data
    except Exception as e:
        print(f"Error parsing resume: {e}")
        return {}

def classify_batch_eligibility(resume_data: dict, job_listings: list) -> list:
    """Classify job eligibility for a batch of jobs using OpenAI GPT-4."""
    try:
        # Prepare the prompt with resume data and job listings
        jobs_text = "\n".join([
            f"Job {job['id']}:\nTitle: {job['title']}\nCompany: {job['company_name']}\nDescription: {job['raw_description']}"
            for job in job_listings
        ])
        
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {
                    "role": "system",
                    "content": "You are an HR classifier. Output a JSON array only."
                },
                {
                    "role": "user",
                    "content": f"""Here is the candidate data and job listings. For each job ID, return a JSON array with objects containing:
                    - id: job ID
                    - eligible: true/false
                    - matching_skills: array of matching skills
                    - missing_requirements: array of missing requirements
                    
                    Candidate data:
                    {json.dumps(resume_data, indent=2)}
                    
                    Jobs:
                    {jobs_text}"""
                }
            ]
        )
        
        # Parse the JSON response
        eligibility_results = json.loads(response.choices[0].message.content)
        return eligibility_results
    except Exception as e:
        print(f"Error classifying job eligibility: {e}")
        return [] 