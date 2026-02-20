import { useMemo, useState } from 'react';
import { buildDueTodayQueue, sm2Update } from '@/lib/srs/sm2';
import type { ReviewRating, SrsCard } from '@/types/srs';

const STORAGE_KEY = 'vocabforge_srs_cards';

function bootstrapCards(): SrsCard[] {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return JSON.parse(saved) as SrsCard[];

  const sample: SrsCard[] = [
    { cardId: 'w1', word: 'meticulous', interval: 3, repetitions: 2, easeFactor: 2.5, dueDate: new Date(Date.now() - 3600_000).toISOString(), lapses: 1, correct: 3, incorrect: 2 },
    { cardId: 'w2', word: 'ubiquitous', interval: 1, repetitions: 1, easeFactor: 2.4, dueDate: new Date(Date.now() - 86_400_000).toISOString(), lapses: 0, correct: 2, incorrect: 1 },
    { cardId: 'w3', word: 'pragmatic', interval: 0, repetitions: 0, easeFactor: 2.5, dueDate: new Date(Date.now() + 365 * 86_400_000).toISOString(), lapses: 0, correct: 0, incorrect: 0 },
    { cardId: 'w4', word: 'coherent', interval: 0, repetitions: 0, easeFactor: 2.5, dueDate: new Date(Date.now() + 365 * 86_400_000).toISOString(), lapses: 0, correct: 0, incorrect: 0 }
  ];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(sample));
  return sample;
}

export function useReviewQueue() {
  const [cards, setCards] = useState<SrsCard[]>(() => bootstrapCards());

  const queue = useMemo(() => {
    const reviews = cards.filter((c) => c.repetitions > 0);
    const newCards = cards.filter((c) => c.repetitions === 0);
    return buildDueTodayQueue({ reviewCards: reviews, newCards, maxItems: 12, newToReviewRatio: 0.35 });
  }, [cards]);

  const reviewCard = (cardId: string, quality: ReviewRating) => {
    setCards((prev) => {
      const next = prev.map((card) => {
        if (card.cardId !== cardId) return card;

        const updated = sm2Update(card, quality, new Date());
        return {
          ...card,
          ...updated,
          correct: card.correct + (quality >= 3 ? 1 : 0),
          incorrect: card.incorrect + (quality < 3 ? 1 : 0),
          lastReviewedAt: new Date().toISOString()
        };
      });

      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  return { cards, queue, reviewCard };
}
