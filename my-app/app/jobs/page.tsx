"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ResumeEditor from "@/components/resume-editor"

// Mock job data
const mockJobs = [
  {
    id: 1,
    title: "Senior UI/UX Designer",
    company_name: "Tech Startup Inc",
    raw_description:
      "We are looking for a creative and experienced UI/UX Designer to join our dynamic team. You will be responsible for creating intuitive and engaging user experiences across our digital platforms. The ideal candidate should have strong skills in user research, wireframing, prototyping, and visual design.",
    eligible: true,
    matching_skills: ["UI Design", "UX Research", "Prototyping"],
    missing_requirements: [],
    apply_url: "https://example.com/apply/1",
  },
  {
    id: 2,
    title: "Product Designer",
    company_name: "Design Agency Co",
    raw_description:
      "Join our award-winning design agency as a Product Designer. You'll work on diverse projects ranging from mobile apps to web platforms. We value creativity, attention to detail, and the ability to translate complex problems into simple, elegant solutions.",
    eligible: true,
    matching_skills: ["Product Design", "User Research"],
    missing_requirements: ["Figma"],
    apply_url: "https://example.com/apply/2",
  },
  {
    id: 3,
    title: "Visual Designer",
    company_name: "Creative Studio",
    raw_description:
      "We're seeking a talented Visual Designer to create compelling visual content for our clients. This role involves working on branding projects, marketing materials, and digital campaigns. Strong typography and layout skills are essential.",
    eligible: true,
    matching_skills: ["Visual Design", "Typography"],
    missing_requirements: [],
    apply_url: "https://example.com/apply/3",
  },
]

export default function JobsPage() {
  const [isEditorOpen, setIsEditorOpen] = useState(false)

  const handleApply = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1 py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="font-montserrat uppercase text-2xl font-bold text-black mb-2">JOB MATCHES</h1>
              <div className="w-full h-0.5 bg-black"></div>
            </div>
            <button
              onClick={() => setIsEditorOpen(true)}
              className="font-montserrat uppercase text-sm bg-white border-2 border-black px-4 py-2 hover:bg-pastel-purple hover:border-pastel-purple transition-colors"
            >
              EDIT RESUME
            </button>
          </div>

          {/* Job Cards */}
          {mockJobs.length > 0 ? (
            <div className="space-y-6">
              {mockJobs.map((job) => (
                <div key={job.id} className="bg-white border-2 border-black p-6">
                  {/* Title Row */}
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="font-montserrat uppercase text-xl font-bold text-black">{job.title}</h2>
                    <span className="bg-pastel-purple border-2 border-black px-3 py-1 font-montserrat uppercase text-xs text-black">
                      DESIGN
                    </span>
                  </div>

                  {/* Company */}
                  <p className="font-montserrat uppercase text-sm text-gray-500 mb-3">{job.company_name}</p>

                  {/* Description */}
                  <p className="font-montserrat text-base text-black mb-4 line-clamp-3 overflow-hidden">
                    {job.raw_description}
                  </p>

                  {/* Apply Button */}
                  <div className="flex justify-end">
                    <button
                      onClick={() => handleApply(job.apply_url)}
                      className="font-montserrat uppercase text-base bg-white border-2 border-black px-6 py-2 hover:bg-pastel-purple hover:border-pastel-purple transition-colors duration-200"
                    >
                      APPLY
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="font-montserrat uppercase text-xl text-gray-500 mb-4">
                NO DESIGN JOBS FOUND. TRY UPLOADING ANOTHER RESUME.
              </p>
              <Link
                href="/upload"
                className="font-montserrat uppercase text-base text-black hover:text-pastel-purple transition-colors"
              >
                BACK TO UPLOAD
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* Resume Editor Modal */}
      {isEditorOpen && <ResumeEditor onClose={() => setIsEditorOpen(false)} />}
    </div>
  )
}
