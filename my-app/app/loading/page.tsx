 "use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoadingPage() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/jobs");
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin mb-8"></div>
      <h2 className="text-2xl font-bold mb-2">Processing your resume...</h2>
      <p className="text-muted-foreground">Finding the best matches for you</p>
    </div>
  );
}
