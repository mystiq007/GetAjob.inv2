'use client';

import { useState } from 'react';
import { ResumeUpload } from '@/components/ResumeUpload';
import { JobList } from '@/components/JobList';
import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"

export default function LandingPage() {
  const [resumeId, setResumeId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col justify-center items-center">
        <div className="w-full max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-montserrat uppercase text-4xl md:text-6xl font-bold text-black leading-tight mb-6">
              STOP APPLYING.<br />START MATCHING.
            </h1>
            <div className="w-20 h-1 bg-pastel-purple mb-8"></div>
            <p className="font-montserrat text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              The AI-powered job matcher that finds design opportunities you actually want. No more endless scrolling through irrelevant listings.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pastel-purple"></div>
                <span className="font-montserrat text-sm uppercase text-black">INSTANT AI MATCHING</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pastel-purple"></div>
                <span className="font-montserrat text-sm uppercase text-black">DESIGN JOBS ONLY</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pastel-purple"></div>
                <span className="font-montserrat text-sm uppercase text-black">NO BS, JUST RESULTS</span>
              </div>
            </div>
            <Link href="/upload">
              <button className="font-montserrat uppercase text-xl bg-white border-2 border-black px-8 py-4 hover:bg-pastel-purple hover:border-pastel-purple transition-colors duration-200">
                GET STARTED
              </button>
            </Link>
          </div>
          <div className="relative">
            <div className="bg-white border-2 border-black p-8 relative">
              <div className="space-y-4">
                <div className="bg-white border-2 border-black p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-montserrat uppercase text-lg font-bold">SENIOR UI DESIGNER</h3>
                    <span className="bg-pastel-purple border-2 border-black px-2 py-1 font-montserrat uppercase text-xs">MATCH</span>
                  </div>
                  <p className="font-montserrat text-sm text-gray-600">TECH STARTUP • $120K</p>
                </div>
                <div className="bg-white border-2 border-black p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-montserrat uppercase text-lg font-bold">PRODUCT DESIGNER</h3>
                    <span className="bg-pastel-purple border-2 border-black px-2 py-1 font-montserrat uppercase text-xs">MATCH</span>
                  </div>
                  <p className="font-montserrat text-sm text-gray-600">DESIGN AGENCY • $95K</p>
                </div>
                <div className="bg-white border-2 border-black p-4 opacity-50">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-montserrat uppercase text-lg font-bold">VISUAL DESIGNER</h3>
                    <span className="bg-gray-200 border-2 border-black px-2 py-1 font-montserrat uppercase text-xs">NO MATCH</span>
                  </div>
                  <p className="font-montserrat text-sm text-gray-600">MARKETING CO • $65K</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-pastel-purple border-2 border-black px-3 py-2">
                <span className="font-montserrat uppercase text-sm font-bold">AI POWERED</span>
              </div>
            </div>
          </div>
        </div>
        <section className="py-16 bg-black text-white w-full mt-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-montserrat uppercase text-4xl font-bold mb-2">2.3X</h3>
                <p className="font-montserrat uppercase text-sm">FASTER HIRING</p>
              </div>
              <div>
                <h3 className="font-montserrat uppercase text-4xl font-bold mb-2">94%</h3>
                <p className="font-montserrat uppercase text-sm">MATCH ACCURACY</p>
              </div>
              <div>
                <h3 className="font-montserrat uppercase text-4xl font-bold mb-2">500+</h3>
                <p className="font-montserrat uppercase text-sm">DESIGN JOBS</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
