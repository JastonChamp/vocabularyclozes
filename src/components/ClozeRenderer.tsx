import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FeedbackCard } from './FeedbackCard';
import { SmartTutorModal } from './SmartTutorModal';
import type { ClozeExercise, VocabularyMeta } from '@/types/exercise';

type ClozeRendererProps = {
  exercise: ClozeExercise;
  vocabularyMeta: VocabularyMeta[];
};

function splitWithBlankTokens(passage: string) {
  return passage.split(/(\[BLANK_\d+\])/g).filter(Boolean);
}

export function ClozeRenderer({ exercise, vocabularyMeta }: ClozeRendererProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ word: string; correct: boolean; picked?: string } | null>(null);
  const [showTutor, setShowTutor] = useState(false);

  const progressive = exercise.content.progressiveContext?.enabled;
  const revealOrder = exercise.content.progressiveContext?.revealOrder ?? exercise.content.blanks.map((b) => b.id);
  const nextBlankId = revealOrder.find((id) => !answers[id]);

  const resolvedWordbank = useMemo(() => {
    const used = new Set(Object.values(answers));
    return exercise.content.wordbank.filter((w) => !used.has(w));
  }, [answers, exercise.content.wordbank]);

  const onDropWord = (blankId: string, word: string) => {
    setAnswers((prev) => ({ ...prev, [blankId]: word }));
    const blank = exercise.content.blanks.find((b) => b.id === blankId);
    const isCorrect = blank?.answer.toLowerCase() === word.toLowerCase();
    setFeedback({ word: blank?.answer ?? word, correct: Boolean(isCorrect), picked: word });

    const allCorrect = exercise.content.blanks.every((b) => (blankId === b.id ? word : answers[b.id])?.toLowerCase() === b.answer.toLowerCase());
    if (allCorrect) {
      const confetti = document.getElementById('confetti-container');
      confetti?.classList.add('show');
      setTimeout(() => confetti?.classList.remove('show'), 900);
    }
  };

  const tokens = splitWithBlankTokens(exercise.content.passage);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-white">{exercise.title}</h3>
          <p className="text-xs text-slate-300">Format: {exercise.format} • Theme: {exercise.theme ?? 'general'}</p>
        </div>
        <button onClick={() => setShowTutor(true)} className="rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white">Ask Tutor</button>
      </div>

      <motion.div layout className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4 text-slate-100">
        {tokens.map((token, idx) => {
          const m = token.match(/^\[BLANK_(\d+)\]$/);
          if (!m) return <span key={`${token}-${idx}`}>{token} </span>;

          const blankId = m[1];
          const blank = exercise.content.blanks.find((b) => b.id === blankId);
          const canShow = !progressive || blankId === nextBlankId || Boolean(answers[blankId]);

          if (!canShow) {
            return <span key={blankId} className="mx-1 rounded-md bg-slate-700 px-2 py-1 text-slate-400">...</span>;
          }

          const answer = answers[blankId];
          const isCorrect = answer && blank?.answer.toLowerCase() === answer.toLowerCase();
          const isWrong = answer && !isCorrect;

          return (
            <motion.button
              whileTap={{ scale: 0.97 }}
              key={blankId}
              onClick={() => selectedWord && onDropWord(blankId, selectedWord)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const dropped = e.dataTransfer.getData('text/plain');
                if (dropped) onDropWord(blankId, dropped);
              }}
              className={`mx-1 min-w-24 rounded-lg border px-2 py-1 text-left ${isCorrect ? 'border-emerald-400 bg-emerald-500/20' : isWrong ? 'border-rose-400 bg-rose-500/20' : 'border-slate-500 bg-slate-800'}`}
            >
              {answer || `Blank ${blankId} (${blank?.difficulty ?? 'easy'})`}
            </motion.button>
          );
        })}
      </motion.div>

      <div className="flex flex-wrap gap-2">
        <AnimatePresence>
          {resolvedWordbank.map((w) => (
            <motion.button
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={w}
              draggable
              onDragStart={(e) => e.dataTransfer.setData('text/plain', w)}
              onClick={() => setSelectedWord(w)}
              className={`rounded-full border px-3 py-1 text-sm ${selectedWord === w ? 'border-indigo-400 bg-indigo-500/20 text-white' : 'border-slate-600 bg-slate-800 text-slate-200'}`}
            >
              {w}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {feedback ? (
        <FeedbackCard
          word={feedback.word}
          isCorrect={feedback.correct}
          distractorPicked={feedback.correct ? undefined : feedback.picked}
          meta={vocabularyMeta.find((v) => v.word.toLowerCase() === feedback.word.toLowerCase())?.rich_json}
        />
      ) : null}

      <SmartTutorModal
        open={showTutor}
        onClose={() => setShowTutor(false)}
        vocabulary={vocabularyMeta}
        currentContext={exercise.content.passage}
      />
    </div>
  );
}
