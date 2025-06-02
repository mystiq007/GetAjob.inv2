import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export interface ResumeUploadResponse {
  message: string;
  resume_id: number;
}

export interface JobListing {
  id: string;
  company_name: string;
  title: string;
  raw_description: string;
  location?: string;
  salary?: string;
  url?: string;
}

export interface EligibleJobsResponse {
  eligible_jobs: JobListing[];
  review_jobs: JobListing[];
}

export const api = {
  async uploadResume(file: File, userId: number): Promise<ResumeUploadResponse> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('user_id', userId.toString());
    
    const response = await axios.post(`${API_BASE_URL}/upload_resume/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  async getParsedResume(resumeId: number) {
    const response = await axios.get(`${API_BASE_URL}/parsed_resume/${resumeId}`);
    return response.data;
  },

  async getEligibleJobs(parsedId: number): Promise<EligibleJobsResponse> {
    const response = await axios.get(`${API_BASE_URL}/eligible_jobs/${parsedId}`);
    return response.data;
  },
}; 