export type ClozeFormat =
  | 'single_blank_sentence'
  | 'multi_blank_paragraph'
  | 'progressive_story'
  | 'themed_pack';

export type ClozeBlankDifficulty = 'easy' | 'medium' | 'hard';

export type ClozeBlank = {
  id: string;
  answer: string;
  hint?: string;
  difficulty: ClozeBlankDifficulty;
  distractors?: string[];
  sentenceIndex?: number;
};

export type ClozeContent = {
  passage: string;
  sentences?: string[];
  blanks: ClozeBlank[];
  wordbank: string[];
  progressiveContext?: {
    enabled: boolean;
    revealOrder: string[];
    hintDependencies?: Array<{
      blankId: string;
      dependsOnBlankId: string;
      unlockedHint: string;
    }>;
  };
};

export type ClozeExercise = {
  id?: string;
  slug?: string;
  type: 'cloze';
  format: ClozeFormat;
  language: string;
  level: string;
  title: string;
  theme?: string;
  tags?: string[];
  source?: string;
  content: ClozeContent;
};

export type VocabularyMeta = {
  word: string;
  psle_level: string;
  rich_json: {
    contextExplanation: string;
    exampleSentences: string[];
    mnemonic: string;
    etymology: string;
    commonMistakes: Array<{
      wrongWord: string;
      whyWrong: string;
      correctTip: string;
    }>;
    relatedWords: {
      synonyms: string[];
      antonyms: string[];
      wordFamily: string[];
    };
    rootAffixNote?: string;
  };
};

export const clozeExerciseJsonSchema = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  title: 'VocabForgeClozeExercise',
  type: 'object',
  required: ['type', 'format', 'language', 'level', 'title', 'content'],
  properties: {
    type: { const: 'cloze' },
    format: {
      enum: ['single_blank_sentence', 'multi_blank_paragraph', 'progressive_story', 'themed_pack']
    },
    language: { type: 'string' },
    level: { type: 'string' },
    title: { type: 'string' },
    theme: { type: 'string' },
    tags: { type: 'array', items: { type: 'string' } },
    source: { type: 'string' },
    content: {
      type: 'object',
      required: ['passage', 'blanks', 'wordbank'],
      properties: {
        passage: { type: 'string' },
        sentences: { type: 'array', items: { type: 'string' } },
        blanks: {
          type: 'array',
          items: {
            type: 'object',
            required: ['id', 'answer', 'difficulty'],
            properties: {
              id: { type: 'string' },
              answer: { type: 'string' },
              hint: { type: 'string' },
              difficulty: { enum: ['easy', 'medium', 'hard'] },
              distractors: { type: 'array', items: { type: 'string' } },
              sentenceIndex: { type: 'number' }
            }
          }
        },
        wordbank: { type: 'array', items: { type: 'string' } },
        progressiveContext: {
          type: 'object',
          properties: {
            enabled: { type: 'boolean' },
            revealOrder: { type: 'array', items: { type: 'string' } },
            hintDependencies: {
              type: 'array',
              items: {
                type: 'object',
                required: ['blankId', 'dependsOnBlankId', 'unlockedHint'],
                properties: {
                  blankId: { type: 'string' },
                  dependsOnBlankId: { type: 'string' },
                  unlockedHint: { type: 'string' }
                }
              }
            }
          }
        }
      }
    }
  }
} as const;
