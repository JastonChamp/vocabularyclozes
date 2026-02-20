import { useState } from 'react';
import { motion } from 'framer-motion';
import { useReviewQueue } from '@/hooks/useReviewQueue';
import type { ReviewRating } from '@/types/srs';

const ratingButtons: Array<{ label: string; value: ReviewRating; className: string }> = [
  { label: 'Again', value: 1, className: 'bg-rose-500' },
  { label: 'Hard', value: 3, className: 'bg-amber-500' },
  { label: 'Good', value: 4, className: 'bg-emerald-500' },
  { label: 'Easy', value: 5, className: 'bg-sky-500' }
];

export function ReviewMode() {
  const { queue, reviewCard } = useReviewQueue();
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const card = queue[index];
  const total = queue.length;

  if (!card) {
    return (
      <div className="mx-auto max-w-3xl p-6 text-center text-white">
        <h2 className="text-2xl font-bold">Review Mode</h2>
        <p className="mt-3 opacity-80">You are all caught up. No cards due today.</p>
      </div>
    );
  }

  const handleRate = (quality: ReviewRating) => {
    reviewCard(card.cardId, quality);
    setRevealed(false);
    setIndex((i) => i + 1);
  };

  return (
    <div className="mx-auto max-w-3xl p-6 text-white">
      <div className="mb-4 flex items-center justify-between text-sm opacity-80">
        <span>Practice Session</span>
        <span>{Math.min(index + 1, total)} / {total}</span>
      </div>

      <motion.div
        key={card.cardId}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl"
      >
        <div className="mb-2 text-xs uppercase tracking-widest text-indigo-300">Due today</div>
        <h3 className="text-3xl font-extrabold">{card.word}</h3>
        <p className="mt-2 text-sm opacity-80">Tap “Reveal” to simulate Duolingo-style recall before grading yourself.</p>

        <div className="mt-6">
          {!revealed ? (
            <button className="rounded-xl bg-indigo-500 px-5 py-3 font-semibold" onClick={() => setRevealed(true)}>
              Reveal
            </button>
          ) : (
            <div className="space-y-4">
              <div className="rounded-xl bg-black/30 p-4 text-sm">
                <div>Interval: {card.interval} day(s)</div>
                <div>Repetitions: {card.repetitions}</div>
                <div>Ease factor: {card.easeFactor.toFixed(2)}</div>
              </div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {ratingButtons.map((rating) => (
                  <button
                    key={rating.label}
                    onClick={() => handleRate(rating.value)}
                    className={`rounded-xl px-4 py-3 text-sm font-bold ${rating.className}`}
                  >
                    {rating.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
