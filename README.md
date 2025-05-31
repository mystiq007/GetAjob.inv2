# GetAJob.in MVP

A minimal web application that helps job seekers find and apply to relevant positions by analyzing their resume and matching it with job listings.

## Features

- Resume parsing using OpenAI GPT-4
- Job search using Adzuna US API
- Job eligibility matching
- Stub auto-apply functionality
- Supabase backend for data persistence

## Prerequisites

1. Supabase Project with the following tables:

   ```sql
   -- users table
   create table users (
     id serial primary key,
     email text unique,
     name text
   );

   -- resumes table
   create table resumes (
     id serial primary key,
     user_id integer references users(id),
     file_path text unique,
     parsed_data jsonb,
     status text
   );

   -- job_listings table
   create table job_listings (
     id serial primary key,
     resume_id integer references resumes(id),
     title text,
     company_name text,
     location text,
     url text,
     raw_description text,
     eligible boolean,
     match_reasons jsonb
   );

   -- applications table
   create table applications (
     id serial primary key,
     job_listing_id integer references job_listings(id),
     status text,
     missing_fields jsonb
   );
   ```

2. API Keys:
   - OpenAI API key
   - Adzuna API credentials (App ID and App Key)
   - Supabase project URL and API key

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd GetAJob.in_v2
   ```

2. Create a `.env` file in the root directory with your API keys:
   ```
   OPENAI_KEY=sk-...
   ADZUNA_APP_ID=your_adzuna_id
   ADZUNA_APP_KEY=your_adzuna_key
   SUPABASE_URL=https://yourproject.supabase.co
   SUPABASE_KEY=your-service-role-or-anon-key
   ```

3. Set up Python virtual environment and install dependencies:
   ```bash
   cd backend
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   cd ..
   ```

## Running Locally

1. Start the FastAPI backend:
   ```bash
   cd backend
   uvicorn app:app --reload --port 8000
   ```

2. Serve the frontend:
   ```bash
   cd frontend
   python3 -m http.server 3000
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Deployment

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy to Vercel:
   ```bash
   vercel login
   vercel
   vercel --prod
   ```

This will deploy your application to `https://getajob-in-yourusername.vercel.app`

## Usage

1. Open the web application
2. Upload a plain text resume (.txt file)
3. Wait for the resume to be parsed
4. View eligible job matches
5. Click "Auto-Apply" on jobs you're interested in
6. Provide additional information when prompted

## License

MIT 