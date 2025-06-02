import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="border-2 border-black p-12 bg-white text-center max-w-lg">
        <h1 className="text-3xl font-bold mb-4">Application Submitted!</h1>
        <p className="mb-8 text-lg">Thank you for applying. We'll notify you if you're a match for this role.</p>
        <Link href="/jobs">
          <button className="border-2 border-black px-8 py-3 font-bold uppercase bg-white hover:bg-pastel-purple transition-colors">
            Back to Jobs
          </button>
        </Link>
      </div>
    </div>
  );
} 