import { useState } from 'react';
import { api } from '@/lib/api';
import { Button } from '@components/ui/button';
import { Card } from '@components/ui/card';
import { toast } from 'sonner';

interface ResumeUploadProps {
  onUploadSuccess?: (resumeId: number) => void;
}

export function ResumeUpload({ onUploadSuccess }: ResumeUploadProps) {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    let resumeId: number | null = null;
    try {
      const response = await api.uploadResume(file, 1); // TODO: Replace with actual user ID
      toast.success("Resume uploaded", {
        description: "We're processing your resume to find the best matches.",
      });
      resumeId = response.resume_id || null;
    } catch (error) {
      toast.error("Upload failed (showing demo results)", {
        description: "There was an error uploading your resume, but you can still see demo results.",
      });
    } finally {
      setTimeout(() => {
        setIsUploading(false);
        if (onUploadSuccess) {
          onUploadSuccess(resumeId || 1); // Use 1 as a fallback demo ID
        }
      }, 2000); // 2 seconds loading
    }
  };

  return (
    <Card className="p-8 max-w-2xl mx-auto">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Upload Your Resume</h2>
          <p className="text-muted-foreground">
            Upload your resume to find matching job opportunities.
          </p>
        </div>

        <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
          <input
            type="file"
            accept=".txt"
            onChange={handleFileChange}
            className="hidden"
            id="resume-upload"
            disabled={isUploading}
          />
          <label
            htmlFor="resume-upload"
            className="cursor-pointer block"
          >
            <div className="space-y-4">
              <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">
                  {isUploading ? "Uploading..." : "Click to upload"}
                </p>
                <p className="text-xs text-muted-foreground">
                  TXT only, up to 10MB
                </p>
              </div>
            </div>
          </label>
        </div>
      </div>
    </Card>
  );
} 