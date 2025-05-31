import os
import requests
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

ADZUNA_APP_ID = os.getenv("ADZUNA_APP_ID")
ADZUNA_APP_KEY = os.getenv("ADZUNA_APP_KEY")

def search_adzuna_jobs(keywords: str, location: str = "", results_per_page: int = 5) -> list:
    """Search for jobs using the Adzuna API."""
    try:
        # Construct the API URL
        url = "https://api.adzuna.com/v1/api/jobs/us/search/1"
        
        # Set up query parameters
        params = {
            "app_id": ADZUNA_APP_ID,
            "app_key": ADZUNA_APP_KEY,
            "results_per_page": results_per_page,
            "what": keywords,
            "where": location
        }
        
        # Make the API request
        response = requests.get(url, params=params)
        response.raise_for_status()
        
        # Parse the response
        data = response.json()
        results = data.get("results", [])
        
        # Format the results
        formatted_results = []
        for i, item in enumerate(results[:results_per_page], 1):
            formatted_result = {
                "id": i,
                "title": item["title"],
                "company_name": item["company"]["display_name"],
                "location": item["location"]["display_name"],
                "raw_description": item["description"],
                "url": item["redirect_url"]
            }
            formatted_results.append(formatted_result)
        
        return formatted_results
    except Exception as e:
        print(f"Error searching Adzuna jobs: {e}")
        return [] 