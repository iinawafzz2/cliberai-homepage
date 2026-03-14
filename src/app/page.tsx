export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-cream-dark/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="group/logo flex items-center h-10 rounded-xl bg-white border border-cream-dark shadow-sm overflow-hidden cursor-default transition-all duration-300 w-10 hover:w-[140px]">
            <div className="flex items-center justify-center min-w-10 h-10">
              <span className="text-brand-orange font-heading text-2xl leading-none">C</span>
            </div>
            <span className="text-sm font-heading font-medium tracking-tight text-gray-900 whitespace-nowrap opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 pr-3">
              liber AI
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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
          <div className="absolute top-20 right-[15%] w-72 h-72 bg-brand-green/5 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-32 left-[10%] w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "3s" }}
          />

          <div className="absolute top-1/4 left-[8%] w-px h-32 bg-gradient-to-b from-transparent via-brand-green/20 to-transparent" />
          <div className="absolute top-1/3 right-[12%] w-px h-24 bg-gradient-to-b from-transparent via-brand-orange/20 to-transparent" />
          <div className="absolute bottom-1/4 left-[20%] w-16 h-px bg-gradient-to-r from-transparent via-brand-green/15 to-transparent" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-cream-dark text-sm text-gray-500 mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" aria-hidden="true" />
                Building domain-specific AI
              </div>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-gray-900 leading-[0.95] mb-8 animate-fade-in-up-delay-1">
              Intelligence,
              <br />
              <span className="text-brand-orange">Specialized.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed font-arabic animate-fade-in-up-delay-2">
              We don&apos;t build general-purpose AI. We build systems that
              master specific domains — understanding the rules, the context, and
              the stakes that matter.
            </p>

            <div className="animate-fade-in-up-delay-3">
              <a
                href="https://www.saudi-judge.cliberai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-green hover:bg-brand-green-dark text-white rounded-2xl text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-glow hover:scale-[1.02]"
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
              <p className="mt-4 text-sm text-gray-500">
                AI-powered Saudi legal judgment prediction
              </p>
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
