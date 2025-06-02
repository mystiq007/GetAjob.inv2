"use client"

import type React from "react"

import { useState } from "react"

interface ResumeEditorProps {
  open: boolean;
  onClose: () => void;
}

export default function ResumeEditor({ open, onClose }: ResumeEditorProps) {
  const [tab, setTab] = useState<'edit' | 'upload'>('edit');
  const [resumeContent, setResumeContent] = useState('');

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white border-2 border-black max-w-2xl w-full mx-4 p-8 relative">
        <button
          className="absolute top-4 right-4 text-2xl font-bold text-black hover:text-pastel-purple"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">RESUME EDITOR</h2>
        <p className="text-gray-700 mb-6">Modify your resume to improve job matching accuracy</p>
        <div className="bg-yellow-100 border-2 border-black p-4 flex items-start mb-6">
          <span className="font-bold text-lg mr-3">!</span>
          <div>
            <span className="font-bold uppercase text-sm">IMPORTANT</span>
            <p className="text-sm mt-1">Your resume accuracy directly impacts job matching quality. Consider the ethical implications of any modifications.</p>
          </div>
        </div>
        <div className="flex mb-4">
          <button
            className={`flex-1 py-3 border-2 border-black font-bold uppercase text-lg ${tab === 'edit' ? 'bg-pastel-purple' : 'bg-white'} transition-colors`}
            onClick={() => setTab('edit')}
          >
            EDIT TEXT
          </button>
          <button
            className={`flex-1 py-3 border-2 border-black font-bold uppercase text-lg ${tab === 'upload' ? 'bg-pastel-purple' : 'bg-white'} transition-colors -ml-2`}
            onClick={() => setTab('upload')}
          >
            UPLOAD NEW FILE
          </button>
        </div>
        {tab === 'edit' ? (
          <div className="mb-6">
            <label className="block font-bold mb-2 uppercase text-sm">RESUME CONTENT</label>
            <textarea
              className="w-full border-2 border-black p-4 min-h-[120px] font-mono text-base"
              placeholder="Enter your complete resume content here..."
              value={resumeContent}
              onChange={e => setResumeContent(e.target.value)}
            />
            <p className="text-xs text-gray-500 mt-2">Include all relevant skills, experience, and qualifications</p>
          </div>
        ) : (
          <div className="mb-6">
            <input type="file" accept=".txt" className="block w-full" />
          </div>
        )}
        <div className="flex justify-end space-x-4 mt-8">
          <button
            className="border-2 border-black px-8 py-3 font-bold uppercase bg-white hover:bg-pastel-purple transition-colors"
            onClick={onClose}
          >
            CANCEL
          </button>
          <button
            className="border-2 border-black px-8 py-3 font-bold uppercase bg-gray-200 text-gray-400 cursor-not-allowed"
            disabled
          >
            SAVE & RE-ANALYZE
          </button>
        </div>
      </div>
    </div>
  );
}
