export default function Page() {
  const faqs = [
    {
      q: "How does the copyright scan work?",
      a: "We analyze your video's audio and visual content against major copyright databases before you upload, flagging risky segments so you can fix them first."
    },
    {
      q: "Can I monitor multiple YouTube channels?",
      a: "Yes. Connect as many channels as you manage and get a unified dashboard showing strike status, warnings, and history across all of them."
    },
    {
      q: "What are the AI-powered safe alternatives?",
      a: "When a copyrighted track is detected, our AI suggests royalty-free music with a similar mood and tempo so your video keeps its feel without the legal risk."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          YouTube Copyright Protection
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Copyright Strikes<br />
          <span className="text-[#58a6ff]">Before They Happen</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Scan videos for copyright issues before upload, monitor strikes across all your channels in real-time, and get AI-suggested royalty-free alternatives instantly.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start Protecting My Channel
        </a>
        <p className="mt-3 text-xs text-[#8b949e]">$15/mo · Cancel anytime · No credit card required to try</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🔍", title: "Pre-Upload Scan", desc: "Detect risky audio and visuals before your video goes live." },
            { icon: "📡", title: "Real-Time Monitoring", desc: "Get instant alerts when a strike or claim hits any channel." },
            { icon: "🎵", title: "Safe Alternatives", desc: "AI recommends royalty-free tracks that match your vibe." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$15<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] text-sm mb-6">Everything you need to stay strike-free</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited pre-upload video scans",
              "Monitor up to 10 YouTube channels",
              "Real-time strike & claim alerts",
              "AI royalty-free music suggestions",
              "Email & dashboard notifications",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started – $15/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        © {new Date().getFullYear()} CopyrightGuard. All rights reserved.
      </footer>
    </main>
  );
}
