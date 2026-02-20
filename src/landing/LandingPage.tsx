import { motion } from 'framer-motion';

export function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-4 py-16">
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-extrabold">
          VocabForge — Context Cloze Mastery for PSLE
        </motion.h1>
        <p className="mt-4 max-w-2xl text-slate-300">A deeper cloze-first learning path with SRS, Smart Tutor, and mastery analytics.</p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-4 px-4 pb-16 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5">
          <h2 className="text-xl font-semibold">Live Cloze Demo</h2>
          <p className="mt-2 text-sm text-slate-300">Interactive progressive blank reveal with hints and instant feedback.</p>
        </div>
        <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5">
          <h2 className="text-xl font-semibold">Why VocabForge beats generic apps</h2>
          <table className="mt-3 w-full text-sm">
            <thead><tr><th className="text-left">Feature</th><th>VocabForge</th><th>Generic</th></tr></thead>
            <tbody>
              <tr><td>Context Cloze Depth</td><td>✅ Advanced</td><td>⚠️ Basic</td></tr>
              <tr><td>Weak-word Feedback</td><td>✅ Rich Tutor</td><td>⚠️ Limited</td></tr>
              <tr><td>PSLE Packs</td><td>✅ Curated</td><td>❌ None</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
