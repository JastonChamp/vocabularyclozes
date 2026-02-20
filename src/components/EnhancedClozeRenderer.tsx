import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ClozeRenderer } from './ClozeRenderer';
import type { ClozeExercise, VocabularyMeta } from '@/types/exercise';

const correctBeep = { freq: 880, durationMs: 90 };
const wrongBeep = { freq: 220, durationMs: 140 };

function playTone(freq: number, durationMs: number) {
  const ctx = new AudioContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.frequency.value = freq;
  gain.gain.value = 0.05;
  osc.start();
  setTimeout(() => {
    osc.stop();
    void ctx.close();
  }, durationMs);
}

type Props = {
  exercise: ClozeExercise;
  vocabularyMeta: VocabularyMeta[];
  lastAnswerCorrect?: boolean;
};

export function EnhancedClozeRenderer({ exercise, vocabularyMeta, lastAnswerCorrect }: Props) {
  const title = useMemo(() => `${exercise.title} • ${exercise.format}`, [exercise.format, exercise.title]);

  useEffect(() => {
    if (lastAnswerCorrect === true) playTone(correctBeep.freq, correctBeep.durationMs);
    if (lastAnswerCorrect === false) playTone(wrongBeep.freq, wrongBeep.durationMs);
  }, [lastAnswerCorrect]);

  return (
    <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <ClozeRenderer exercise={exercise} vocabularyMeta={vocabularyMeta} />
    </motion.section>
  );
}
