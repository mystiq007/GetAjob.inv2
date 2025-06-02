import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-montserrat uppercase text-4xl md:text-5xl font-bold text-black mb-6">
              ABOUT GETAJOB.IN
            </h1>
            <div className="w-20 h-1 bg-pastel-purple mx-auto mb-8"></div>
            <p className="font-montserrat text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Born from a 72-hour sprint of pure determination, caffeine, and the relentless pursuit of solving job
              matching inefficiencies.
            </p>
          </div>

          {/* Buildathon Story */}
          <section className="mb-16">
            <div className="bg-white border-2 border-black p-8">
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-pastel-purple mr-4"></div>
                <h2 className="font-montserrat uppercase text-2xl font-bold text-black">THE 72-HOUR CHALLENGE</h2>
              </div>
              <div className="space-y-6">
                <p className="font-montserrat text-lg text-gray-700 leading-relaxed">
                  GetAJob.in was conceived and built during the{" "}
                  <span className="font-bold text-black">100X ENGINEERS BUILDATHON</span> — a grueling 72-hour coding
                  marathon where sleep was optional and innovation was mandatory.
                </p>
                <p className="font-montserrat text-lg text-gray-700 leading-relaxed">
                  What started as a simple idea to fix the broken job application process evolved into a brutalist,
                  no-nonsense platform that cuts through the noise and connects designers with opportunities that
                  actually matter.
                </p>
                <div className="bg-gray-50 border-2 border-black p-6 mt-6">
                  <h3 className="font-montserrat uppercase text-lg font-bold text-black mb-4">THE BIGGEST CHALLENGE</h3>
                  <p className="font-montserrat text-base text-gray-700">
                    <span className="font-bold">Figuring out the backend was the toughest part.</span> Building an AI
                    job matching system, handling file uploads, parsing resumes, and creating a robust API — all while
                    the clock was ticking — pushed our technical limits and problem-solving skills to the edge.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="font-montserrat uppercase text-3xl font-bold text-black mb-4">THE TEAM</h2>
              <div className="w-16 h-1 bg-pastel-purple mx-auto mb-6"></div>
              <p className="font-montserrat text-lg text-gray-600">
                Three engineers, one vision, endless determination.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-black p-6 text-center">
                <div className="w-20 h-20 bg-pastel-purple border-2 border-black mx-auto mb-4 flex items-center justify-center">
                  <span className="font-montserrat uppercase text-2xl font-bold text-black">M</span>
                </div>
                <h3 className="font-montserrat uppercase text-xl font-bold text-black mb-2">MOHANKUMAR</h3>
                <p className="font-montserrat text-sm text-gray-600">FULL-STACK ENGINEER</p>
              </div>

              <div className="bg-white border-2 border-black p-6 text-center">
                <div className="w-20 h-20 bg-pastel-purple border-2 border-black mx-auto mb-4 flex items-center justify-center">
                  <span className="font-montserrat uppercase text-2xl font-bold text-black">S</span>
                </div>
                <h3 className="font-montserrat uppercase text-xl font-bold text-black mb-2">SOUNDARYA</h3>
                <p className="font-montserrat text-sm text-gray-600">FULL-STACK ENGINEER</p>
              </div>

              <div className="bg-white border-2 border-black p-6 text-center">
                <div className="w-20 h-20 bg-pastel-purple border-2 border-black mx-auto mb-4 flex items-center justify-center">
                  <span className="font-montserrat uppercase text-2xl font-bold text-black">S</span>
                </div>
                <h3 className="font-montserrat uppercase text-xl font-bold text-black mb-2">SHREYANKA</h3>
                <p className="font-montserrat text-sm text-gray-600">FULL-STACK ENGINEER</p>
              </div>
            </div>

            <div className="bg-black text-white p-8 mt-8">
              <h3 className="font-montserrat uppercase text-xl font-bold mb-4 text-center">EQUAL CONTRIBUTION</h3>
              <p className="font-montserrat text-base text-center leading-relaxed">
                No hierarchy. No specialization. Just three engineers equally tackling frontend, backend, design, and
                everything in between. Every line of code, every design decision, every late-night debugging session —
                shared responsibility, shared success.
              </p>
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="mb-16">
            <div className="bg-white border-2 border-black p-8">
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-pastel-purple mr-4"></div>
                <h2 className="font-montserrat uppercase text-2xl font-bold text-black">OUR PHILOSOPHY</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-montserrat uppercase text-lg font-bold text-black mb-3">BRUTALIST BY DESIGN</h3>
                  <p className="font-montserrat text-base text-gray-700 mb-6">
                    No fluff. No unnecessary animations. No dark patterns. Just pure functionality wrapped in stark,
                    honest design that respects your time and intelligence.
                  </p>
                  <h3 className="font-montserrat uppercase text-lg font-bold text-black mb-3">AI-POWERED MATCHING</h3>
                  <p className="font-montserrat text-base text-gray-700">
                    Smart algorithms that actually understand your skills and match you with relevant opportunities.
                    Because applying to 100 irrelevant jobs is not a strategy.
                  </p>
                </div>
                <div>
                  <h3 className="font-montserrat uppercase text-lg font-bold text-black mb-3">DESIGN-FOCUSED</h3>
                  <p className="font-montserrat text-base text-gray-700 mb-6">
                    Built specifically for designers, by people who understand the creative industry's unique challenges
                    and requirements.
                  </p>
                  <h3 className="font-montserrat uppercase text-lg font-bold text-black mb-3">SPEED OVER PERFECTION</h3>
                  <p className="font-montserrat text-base text-gray-700">
                    Sometimes the best solution is the one that ships. Built fast, iterated faster, improved
                    continuously.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section>
            <div className="bg-pastel-purple border-2 border-black p-8 text-center">
              <h2 className="font-montserrat uppercase text-2xl font-bold text-black mb-8">
                BUILDATHON BY THE NUMBERS
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <h3 className="font-montserrat uppercase text-3xl font-bold text-black mb-2">72</h3>
                  <p className="font-montserrat uppercase text-sm text-black">HOURS</p>
                </div>
                <div>
                  <h3 className="font-montserrat uppercase text-3xl font-bold text-black mb-2">3</h3>
                  <p className="font-montserrat uppercase text-sm text-black">ENGINEERS</p>
                </div>
                <div>
                  <h3 className="font-montserrat uppercase text-3xl font-bold text-black mb-2">∞</h3>
                  <p className="font-montserrat uppercase text-sm text-black">COFFEE CUPS</p>
                </div>
                <div>
                  <h3 className="font-montserrat uppercase text-3xl font-bold text-black mb-2">1</h3>
                  <p className="font-montserrat uppercase text-sm text-black">VISION</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
