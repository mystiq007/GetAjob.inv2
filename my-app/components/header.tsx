import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-montserrat uppercase text-xl font-bold text-black hover:text-pastel-purple transition-colors"
        >
          GETAJOB.IN
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="font-montserrat uppercase text-sm text-black hover:text-pastel-purple transition-colors"
          >
            HOME
          </Link>
          <Link
            href="/jobs"
            className="font-montserrat uppercase text-sm text-black hover:text-pastel-purple transition-colors"
          >
            JOBS
          </Link>
          <Link
            href="/about"
            className="font-montserrat uppercase text-sm text-black hover:text-pastel-purple transition-colors"
          >
            ABOUT
          </Link>
        </nav>
      </div>
    </header>
  )
}
