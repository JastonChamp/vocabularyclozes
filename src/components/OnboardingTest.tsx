import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

type Question = { id: number; prompt: string; options: string[]; answer: string; topic: string };

const QUESTIONS: Question[] = Array.from({ length: 15 }).map((_, i) => ({
  id: i + 1,
  prompt: `Question ${i + 1}: The scientist made a ___ observation before writing the report.`,
  options: ['careful', 'noisy', 'random', 'broken'],
  answer: 'careful',
  topic: ['context', 'vocab', 'inference', 'collocation', 'grammar'][i % 5]
}));

type OnboardingTestProps = {
  onComplete: (result: { level: string; weakWords: string[]; radar: Array<{ topic: string; score: number }> }) => void;
};

export function OnboardingTest({ onComplete }: OnboardingTestProps) {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const q = QUESTIONS[idx];
  const done = idx >= QUESTIONS.length;

  const summary = useMemo(() => {
    const correct = QUESTIONS.filter((x) => answers[x.id] === x.answer).length;
    const pct = correct / QUESTIONS.length;
    const level = pct > 0.8 ? 'p5' : pct > 0.6 ? 'p4' : pct > 0.4 ? 'p3' : 'p2';

    const weakWords = QUESTIONS.filter((x) => answers[x.id] && answers[x.id] !== x.answer)
      .slice(0, 8)
      .map((x) => x.answer);

    const topics = ['context', 'vocab', 'inference', 'collocation', 'grammar'];
    const radar = topics.map((topic) => {
      const set = QUESTIONS.filter((x) => x.topic === topic);
      const c = set.filter((x) => answers[x.id] === x.answer).length;
      return { topic, score: Math.round((c / set.length) * 100) };
    });

    return { level, weakWords, radar };
  }, [answers]);

  if (done) {
    return (
      <div className="rounded-2xl border border-indigo-400/30 bg-slate-900/80 p-5 text-white">
        <h3 className="text-2xl font-bold">Your Starting Path</h3>
        <p className="mt-2 text-slate-300">We placed you at <span className="font-semibold uppercase">{summary.level}</span> and built your weak-word list.</p>
        <div className="mt-4 h-64 w-full">
          <ResponsiveContainer>
            <RadarChart data={summary.radar}>
              <PolarGrid />
              <PolarAngleAxis dataKey="topic" />
              <Radar dataKey="score" stroke="#6366f1" fill="#6366f1" fillOpacity={0.45} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <button onClick={() => onComplete(summary)} className="mt-4 rounded-xl bg-indigo-500 px-4 py-2 font-semibold">Start Personalised Path</button>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-2xl border border-slate-700 bg-slate-900/80 p-5 text-white">
      <div className="mb-2 text-xs uppercase tracking-wide text-indigo-300">Placement Test • {idx + 1}/15</div>
      <h3 className="text-lg font-semibold">{q.prompt}</h3>
      <div className="mt-4 grid gap-2">
        {q.options.map((o) => (
          <button
            key={o}
            onClick={() => {
              setAnswers((prev) => ({ ...prev, [q.id]: o }));
              setIdx((v) => v + 1);
            }}
            className="rounded-xl border border-slate-600 bg-slate-800 px-3 py-2 text-left hover:border-indigo-400"
          >
            {o}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
