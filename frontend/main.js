async function uploadResume() {
    const userId = document.getElementById('user_id').value;
    const fileInput = document.getElementById('resume');
    const statusDiv = document.getElementById('status');
    
    if (!fileInput.files.length) {
        alert('Please select a resume file');
        return;
    }
    
    const file = fileInput.files[0];
    if (!file.name.endsWith('.txt')) {
        alert('Only .txt files are allowed');
        return;
    }
    
    statusDiv.textContent = 'Uploading resume...';
    
    const formData = new FormData();
    formData.append('file', file);
    
    try {
        const response = await fetch(`/upload_resume/?user_id=${userId}`, {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        statusDiv.textContent = data.message;
        
        // Start polling for parsed resume
        pollParsedResume(data.resume_id);
    } catch (error) {
        statusDiv.textContent = `Error: ${error.message}`;
    }
}

async function pollParsedResume(resumeId) {
    const statusDiv = document.getElementById('status');
    
    while (true) {
        try {
            const response = await fetch(`/parsed_resume/${resumeId}`);
            const data = await response.json();
            
            if (data.status === 'parsed') {
                statusDiv.textContent = 'Resume parsed! Fetching eligible jobs...';
                showEligibleJobs(resumeId);
                return;
            }
            
            statusDiv.textContent = 'Parsing resume... please wait.';
            await new Promise(resolve => setTimeout(resolve, 2000));
        } catch (error) {
            statusDiv.textContent = `Error: ${error.message}`;
            return;
        }
    }
}

async function showEligibleJobs(resumeId) {
    const statusDiv = document.getElementById('status');
    const jobsList = document.getElementById('jobs_list');
    
    try {
        const response = await fetch(`/eligible_jobs/${resumeId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const jobs = data.eligible_jobs;
        
        if (!jobs.length) {
            statusDiv.textContent = 'No eligible jobs found.';
            return;
        }
        
        statusDiv.textContent = 'Eligible jobs:';
        jobsList.innerHTML = '';
        
        jobs.forEach(job => {
            const li = document.createElement('li');
            li.className = 'job-card';
            li.innerHTML = `
                <strong>${job.title}</strong> @ <em>${job.company_name}</em><br>
                <span>${job.location}</span><br>
                <a href="${job.url}" target="_blank">View Job Posting</a><br>
                <button onclick="autoApply(${resumeId}, ${job.id})">Auto-Apply</button>
            `;
            jobsList.appendChild(li);
        });
    } catch (error) {
        statusDiv.textContent = `Error: ${error.message}`;
    }
}

async function autoApply(resumeId, jobId) {
    const statusDiv = document.getElementById('status');
    statusDiv.textContent = 'Attempting auto-apply...';
    
    try {
        const response = await fetch(`/auto_apply/${resumeId}`, {
            method: 'POST'
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.needs_info[jobId]) {
            alert('Additional info needed: cover_letter, phone_number');
            statusDiv.textContent = 'Additional information required to complete application.';
        } else {
            statusDiv.textContent = 'Application submitted!';
        }
    } catch (error) {
        statusDiv.textContent = `Error: ${error.message}`;
    }
} 