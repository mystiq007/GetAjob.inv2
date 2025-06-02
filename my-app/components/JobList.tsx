import { useEffect, useState } from 'react';
import { api, JobListing } from '@/lib/api';
import { Card } from '@components/ui/card';
import { Button } from '@components/ui/button';
import { toast } from 'sonner';
import ResumeEditor from './resume-editor';
import { useRouter } from 'next/navigation';

const FAKE_JOBS: JobListing[] = [
  {
    id: '1',
    company_name: 'TECH STARTUP INC',
    title: 'SENIOR UI/UX DESIGNER',
    raw_description: 'We are looking for a creative and experienced UI/UX Designer to join our dynamic team. You will be responsible for creating intuitive and engaging user experiences across our digital platforms. The ideal candidate should have strong skills in user research, wireframing, prototyping, and visual... ',
    location: '',
    salary: '',
    url: '#',
  },
  {
    id: '2',
    company_name: 'DESIGN AGENCY CO',
    title: 'PRODUCT DESIGNER',
    raw_description: "Join our award-winning design agency as a Product Designer. You'll work on diverse projects ranging from mobile apps to web platforms. We value creativity, attention to detail, and the ability to translate complex problems into simple, elegant solutions.",
    location: '',
    salary: '',
    url: '#',
  },
  {
    id: '3',
    company_name: 'CREATIVE STUDIO',
    title: 'VISUAL DESIGNER',
    raw_description: "We're seeking a talented Visual Designer to create compelling visual content for our clients. This role involves working on branding projects, marketing materials, and digital campaigns. Strong typography and layout skills are essential.",
    location: '',
    salary: '',
    url: '#',
  },
];

interface JobListProps {
  resumeId: number;
}

export function JobList({ resumeId }: JobListProps) {
  const [jobs, setJobs] = useState<JobListing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showEditor, setShowEditor] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await api.getEligibleJobs(resumeId);
        setJobs(response.eligible_jobs);
      } catch (error) {
        toast.error("Failed to fetch jobs, showing demo jobs.");
        setJobs(FAKE_JOBS);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, [resumeId]);

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="p-6 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold border-b-4 border-black pb-2">JOB MATCHES</h2>
        <Button
          variant="outline"
          className="uppercase border-2 border-black px-6 py-2 font-montserrat font-medium hover:bg-pastel-purple hover:border-pastel-purple"
          onClick={() => setShowEditor(true)}
        >
          EDIT RESUME
        </Button>
      </div>
      <div className="space-y-8">
        {jobs.map((job) => (
          <div key={job.id} className="border-2 border-black p-8 bg-white relative">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl md:text-2xl font-bold uppercase mb-1">{job.title}</h3>
                <p className="text-sm text-gray-500 font-semibold mb-2">{job.company_name}</p>
              </div>
              <span className="bg-pastel-purple border-2 border-black px-4 py-1 font-montserrat uppercase text-xs font-bold tracking-wider">
                DESIGN
              </span>
            </div>
            <p className="text-base text-black mb-6 line-clamp-3">{job.raw_description}</p>
            <div className="flex justify-end">
              <Button
                variant="outline"
                className="uppercase border-2 border-black px-8 py-2 font-montserrat font-medium hover:bg-pastel-purple hover:border-pastel-purple"
                onClick={() => router.push('/success')}
              >
                APPLY
              </Button>
            </div>
          </div>
        ))}
      </div>
      {/* Resume Editor Modal will be rendered here */}
      {showEditor && (
        <ResumeEditor open={showEditor} onClose={() => setShowEditor(false)} />
      )}
    </div>
  );
} 