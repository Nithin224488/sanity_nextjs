export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        {/* 1. Hero / Headline */}
        <section className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight leading-tight mb-6">
            Stop wasting days wiring Sanity to Next.js.
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 mb-10 max-w-xl mx-auto">
            A production-ready Sanity + Next.js CMS starter with schemas, SEO,
            and dynamic routing — ready in minutes.
          </p>
          <a
            href="https://nithinspire53.gumroad.com/l/cvncl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-neutral-900 text-white font-semibold px-8 py-4 rounded-lg hover:bg-neutral-800"
          >
            Buy for $19
          </a>
          <p className="mt-4 text-sm text-neutral-500">
            Shipping in 5 days. Instant access after launch.
          </p>
        </section>

        {/* 2. What you get */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">
            What you get
          </h2>
          <ul className="space-y-3 text-neutral-700">
            <li className="flex gap-3">
              <span className="text-neutral-400 shrink-0">•</span>
              Next.js App Router setup
            </li>
            <li className="flex gap-3">
              <span className="text-neutral-400 shrink-0">•</span>
              Sanity Studio pre-configured
            </li>
            <li className="flex gap-3">
              <span className="text-neutral-400 shrink-0">•</span>
              Blog + page schemas
            </li>
            <li className="flex gap-3">
              <span className="text-neutral-400 shrink-0">•</span>
              Dynamic routing (/blog/[slug])
            </li>
            <li className="flex gap-3">
              <span className="text-neutral-400 shrink-0">•</span>
              SEO meta + OpenGraph setup
            </li>
            <li className="flex gap-3">
              <span className="text-neutral-400 shrink-0">•</span>
              GROQ examples
            </li>
            <li className="flex gap-3">
              <span className="text-neutral-400 shrink-0">•</span>
              Sample content
            </li>
            <li className="flex gap-3">
              <span className="text-neutral-400 shrink-0">•</span>
              Clean folder architecture
            </li>
            <li className="flex gap-3">
              <span className="text-neutral-400 shrink-0">•</span>
              README with setup instructions
            </li>
          </ul>
        </section>

        {/* 3. Who it's for */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Who it&apos;s for
          </h2>
          <p className="text-neutral-700 mb-4">For developers who:</p>
          <ul className="space-y-3 text-neutral-700">
            <li className="flex gap-3">
              <span className="text-neutral-400 shrink-0">•</span>
              Build Next.js projects
            </li>
            <li className="flex gap-3">
              <span className="text-neutral-400 shrink-0">•</span>
              Use or plan to use Sanity
            </li>
            <li className="flex gap-3">
              <span className="text-neutral-400 shrink-0">•</span>
              Want CMS + SEO without boilerplate pain
            </li>
            <li className="flex gap-3">
              <span className="text-neutral-400 shrink-0">•</span>
              Need a real production baseline
            </li>
          </ul>
        </section>

        {/* 4. Price section */}
        <section className="mb-20 text-center">
          <p className="text-5xl sm:text-6xl font-bold text-neutral-900 mb-3">
            $19 one-time
          </p>
          <p className="text-neutral-600">Lifetime access. Free updates.</p>
        </section>

        {/* 5. Buy button */}
        <section className="mb-20 text-center">
          <a
            href="https://nithinspire53.gumroad.com/l/cvncl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-neutral-900 text-white font-semibold px-10 py-4 rounded-lg hover:bg-neutral-800"
          >
            Buy now
          </a>
        </section>

        {/* 6. Footer */}
        <footer className="text-center pt-8 border-t border-neutral-200">
          <p className="text-sm text-neutral-500">
            Built for developers. Not affiliated with Sanity.io.
          </p>
        </footer>
      </div>
    </main>
  );
}
