import type { ReviewRating, SrsCard, SrsUpdateResult } from '@/types/srs';

const MIN_EASE_FACTOR = 1.3;

/**
 * Exact SM-2 update function (Anki-style baseline).
 * q: quality in [0..5]
 * EF':= max(1.3, EF + (0.1 - (5-q)*(0.08 + (5-q)*0.02)))
 * if q < 3 => repetitions=0, interval=1
 * else repetitions++ and interval: 1, 6, then round(interval*EF')
 */
export function sm2Update(card: SrsCard, quality: ReviewRating, now = new Date()): SrsUpdateResult {
  const nextEase = Math.max(
    MIN_EASE_FACTOR,
    card.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );

  let repetitions = card.repetitions;
  let interval: number;
  let lapses = card.lapses;

  if (quality < 3) {
    repetitions = 0;
    interval = 1;
    lapses += 1;
  } else {
    repetitions += 1;
    if (repetitions === 1) interval = 1;
    else if (repetitions === 2) interval = 6;
    else interval = Math.max(1, Math.round(card.interval * nextEase));
  }

  const dueDate = new Date(now);
  dueDate.setDate(dueDate.getDate() + interval);

  return {
    repetitions,
    interval,
    easeFactor: Number(nextEase.toFixed(2)),
    dueDate: dueDate.toISOString(),
    lapses
  };
}

export function isDueToday(dueDateIso: string, now = new Date()): boolean {
  return new Date(dueDateIso).getTime() <= now.getTime();
}

export function weakWordScore(card: SrsCard, now = new Date()): number {
  const overdueDays = Math.max(0, (now.getTime() - new Date(card.dueDate).getTime()) / 86400000);
  const accuracy = card.correct + card.incorrect === 0 ? 0.5 : card.correct / (card.correct + card.incorrect);
  return overdueDays * 2 + card.lapses * 3 + (1 - accuracy) * 4 + 1 / Math.max(card.easeFactor, 1.3);
}

export function buildDueTodayQueue(params: {
  reviewCards: SrsCard[];
  newCards: SrsCard[];
  maxItems?: number;
  newToReviewRatio?: number;
  now?: Date;
}): SrsCard[] {
  const { reviewCards, newCards, maxItems = 20, newToReviewRatio = 0.3, now = new Date() } = params;

  const dueReviews = reviewCards
    .filter((c) => isDueToday(c.dueDate, now))
    .sort((a, b) => weakWordScore(b, now) - weakWordScore(a, now));

  const newSlots = Math.min(Math.floor(maxItems * newToReviewRatio), newCards.length);
  const reviewSlots = Math.min(maxItems - newSlots, dueReviews.length);

  const mixed: SrsCard[] = [];
  for (let i = 0; i < Math.max(newSlots, reviewSlots); i++) {
    if (i < reviewSlots) mixed.push(dueReviews[i]);
    if (i < newSlots) mixed.push(newCards[i]);
  }

  return mixed.slice(0, maxItems);
}
