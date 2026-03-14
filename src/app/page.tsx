export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-cream-dark/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/favicon.svg"
              alt="Cliber AI logo"
              className="w-10 h-10 rounded-xl shadow-sm"
            />
            <span className="text-xl font-heading font-medium tracking-tight text-gray-900">
              Cliber AI
            </span>
          </div>
          <a
            href="#contact"
            className="text-sm text-gray-500 hover:text-brand-green transition-colors"
          >
            Contact
          </a>
        </div>
      </header>

      <main>
        <section className="relative pt-32 pb-16 overflow-hidden grid-pattern">
          <div className="absolute top-20 right-[15%] w-72 h-72 bg-brand-green/5 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-32 left-[10%] w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "3s" }}
          />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-gray-900 leading-[0.95] mb-6 animate-fade-in-up-delay-1">
              Intelligence,
              <br />
              <span className="text-brand-orange">Specialized.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-arabic animate-fade-in-up-delay-2">
              We don&apos;t build general-purpose AI. We build systems that
              master specific domains — understanding the rules, the context, and
              the stakes that matter.
            </p>
          </div>
        </section>

        <section className="relative px-6 pb-20">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-widest mb-4 animate-fade-in-up-delay-2">
              Our First Product
            </p>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-cream-dark/50 animate-fade-in-up-delay-3">
              <iframe
                src="https://www.saudi-judge.cliberai.com"
                title="Saudi Judge Interface"
                className="w-full h-[500px] sm:h-[600px] pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40 flex flex-col items-center justify-center gap-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs text-white/80">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" />
                  </svg>
                  AI-Powered Legal Prediction
                </div>
                <h3 className="text-white text-3xl sm:text-4xl font-heading font-medium">
                  Saudi Judge
                </h3>
                <p className="text-white/70 text-sm sm:text-base max-w-md text-center font-arabic">
                  Predict Saudi court judgments using AI trained on real legal data
                </p>
                <a
                  href="https://www.saudi-judge.cliberai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-green hover:bg-brand-green-dark text-white rounded-2xl text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] mt-2"
                >
                  <span>Try Saudi Judge</span>
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-24 bg-white border-t border-cream-dark/50"
        >
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-medium text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-10 font-arabic">
              Interested in our products or want to explore a partnership?
              We&apos;d love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:contact@cliberai.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cream border border-cream-dark text-gray-700 hover:bg-cream-dark transition-all duration-200"
              >
                <svg
                  className="w-5 h-5 text-brand-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                contact@cliberai.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-cream border-t border-cream-dark/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img
              src="/favicon.svg"
              alt=""
              className="w-7 h-7 rounded-lg"
              aria-hidden="true"
            />
            <span className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Cliber AI
            </span>
          </div>
          <p className="text-xs text-gray-500">
            Intelligence, Specialized.
          </p>
        </div>
      </footer>
    </div>
  );
}
