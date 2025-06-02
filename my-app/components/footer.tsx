import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-black mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-montserrat uppercase text-lg font-bold text-black mb-4">GETAJOB.IN</h3>
            <p className="font-montserrat text-sm text-gray-500">
              The brutalist job matcher that gets you hired faster.
            </p>
          </div>
          <div>
            <h4 className="font-montserrat uppercase text-sm font-bold text-black mb-4">QUICK LINKS</h4>
            <div className="space-y-2">
              <Link
                href="/"
                className="block font-montserrat uppercase text-xs text-gray-500 hover:text-pastel-purple transition-colors"
              >
                HOME
              </Link>
              <Link
                href="/jobs"
                className="block font-montserrat uppercase text-xs text-gray-500 hover:text-pastel-purple transition-colors"
              >
                JOBS
              </Link>
              <Link
                href="/upload"
                className="block font-montserrat uppercase text-xs text-gray-500 hover:text-pastel-purple transition-colors"
              >
                UPLOAD RESUME
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-montserrat uppercase text-sm font-bold text-black mb-4">LEGAL</h4>
            <div className="space-y-2">
              <Link
                href="/privacy"
                className="block font-montserrat uppercase text-xs text-gray-500 hover:text-pastel-purple transition-colors"
              >
                PRIVACY
              </Link>
              <Link
                href="/terms"
                className="block font-montserrat uppercase text-xs text-gray-500 hover:text-pastel-purple transition-colors"
              >
                TERMS
              </Link>
              <Link
                href="/contact"
                className="block font-montserrat uppercase text-xs text-gray-500 hover:text-pastel-purple transition-colors"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-black mt-8 pt-6 text-center">
          <p className="font-montserrat text-xs text-gray-500">© 2025 GETAJOB.IN. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
}
