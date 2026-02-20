import { AnimatePresence, motion } from 'framer-motion';
import type { VocabularyMeta } from '@/types/exercise';

type FeedbackCardProps = {
  word: string;
  isCorrect: boolean;
  distractorPicked?: string;
  meta?: VocabularyMeta['rich_json'];
};

function getDistractorExplanation(meta: VocabularyMeta['rich_json'] | undefined, distractor: string | undefined) {
  if (!meta || !distractor) return undefined;
  return meta.commonMistakes.find((x) => x.wrongWord.toLowerCase() === distractor.toLowerCase());
}

export function FeedbackCard({ word, isCorrect, distractorPicked, meta }: FeedbackCardProps) {
  const mistake = getDistractorExplanation(meta, distractorPicked);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${word}-${isCorrect}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        className={`rounded-2xl border p-4 ${isCorrect ? 'border-emerald-400/40 bg-emerald-500/10' : 'border-rose-400/40 bg-rose-500/10'}`}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 className="text-base font-bold text-white">{isCorrect ? 'Great choice!' : 'Let\'s learn from this'}</h4>
            <p className="mt-1 text-sm text-slate-200">
              <span className="font-semibold">{word}</span> {meta?.contextExplanation ?? 'fits this context best.'}
            </p>
          </div>
          <span className={`rounded-full px-2 py-1 text-xs font-bold ${isCorrect ? 'bg-emerald-400 text-slate-900' : 'bg-rose-300 text-slate-900'}`}>
            {isCorrect ? 'Correct' : 'Try again'}
          </span>
        </div>

        {mistake ? (
          <div className="mt-3 rounded-xl bg-black/30 p-3 text-sm text-slate-100">
            <div><span className="font-semibold">Why “{mistake.wrongWord}” is wrong:</span> {mistake.whyWrong}</div>
            <div className="mt-1"><span className="font-semibold">Tip:</span> {mistake.correctTip}</div>
          </div>
        ) : null}
      </motion.div>
    </AnimatePresence>
  );
}
