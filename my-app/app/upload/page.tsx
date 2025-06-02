"use client"

import { useState } from 'react';
import { ResumeUpload } from '@/components/ResumeUpload';
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useRouter } from 'next/navigation';

export default function UploadPage() {
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const router = useRouter();

  const handleUploadSuccess = () => {
    setResumeUploaded(true);
    router.push('/loading');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Upload Your Resume</h1>
            <p className="text-muted-foreground">
              Upload your resume to find your next opportunity
            </p>
          </div>
          <ResumeUpload onUploadSuccess={handleUploadSuccess} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
