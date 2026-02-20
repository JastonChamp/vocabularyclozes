export type ReviewRating = 0 | 1 | 2 | 3 | 4 | 5;

export type SrsCard = {
  cardId: string;
  word: string;
  interval: number;
  repetitions: number;
  easeFactor: number;
  dueDate: string;
  lapses: number;
  correct: number;
  incorrect: number;
  lastReviewedAt?: string;
};

export type SrsUpdateResult = {
  interval: number;
  repetitions: number;
  easeFactor: number;
  dueDate: string;
  lapses: number;
};
