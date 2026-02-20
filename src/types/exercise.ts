export type ExerciseType =
  | 'cloze'
  | 'multiple-choice'
  | 'sentence-building'
  | 'image-association'
  | 'speaking';

export type ExerciseBase = {
  id?: string;
  type: ExerciseType;
  language: string;
  level: string;
  title: string;
  tags?: string[];
  source?: string;
};

export type ClozeContent = {
  passage: string;
  blanks: Array<{ id: string; answer: string; hint?: string }>;
  wordbank: string[];
};

export type MultipleChoiceContent = {
  prompt: string;
  options: Array<{ id: string; text: string }>;
  answerId: string;
  explanation?: string;
};

export type SentenceBuildingContent = {
  prompt: string;
  tokens: string[];
  acceptedAnswers: string[];
};

export type ImageAssociationContent = {
  prompt: string;
  imageUrl: string;
  options: string[];
  answer: string;
};

export type SpeakingContent = {
  prompt: string;
  targetText: string;
  rubric?: {
    pronunciationWeight: number;
    fluencyWeight: number;
    accuracyWeight: number;
  };
};

export const exerciseJsonSchema = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  title: 'VocabForgeExercise',
  type: 'object',
  required: ['type', 'language', 'level', 'title', 'content'],
  properties: {
    type: {
      enum: ['cloze', 'multiple-choice', 'sentence-building', 'image-association', 'speaking']
    },
    language: { type: 'string' },
    level: { type: 'string' },
    title: { type: 'string' },
    tags: { type: 'array', items: { type: 'string' } },
    source: { type: 'string' },
    content: {
      oneOf: [
        {
          title: 'Cloze',
          type: 'object',
          required: ['passage', 'blanks', 'wordbank'],
          properties: {
            passage: { type: 'string' },
            blanks: {
              type: 'array',
              items: {
                type: 'object',
                required: ['id', 'answer'],
                properties: {
                  id: { type: 'string' },
                  answer: { type: 'string' },
                  hint: { type: 'string' }
                }
              }
            },
            wordbank: { type: 'array', items: { type: 'string' } }
          }
        },
        {
          title: 'MultipleChoice',
          type: 'object',
          required: ['prompt', 'options', 'answerId'],
          properties: {
            prompt: { type: 'string' },
            options: {
              type: 'array',
              items: {
                type: 'object',
                required: ['id', 'text'],
                properties: {
                  id: { type: 'string' },
                  text: { type: 'string' }
                }
              }
            },
            answerId: { type: 'string' },
            explanation: { type: 'string' }
          }
        },
        {
          title: 'SentenceBuilding',
          type: 'object',
          required: ['prompt', 'tokens', 'acceptedAnswers'],
          properties: {
            prompt: { type: 'string' },
            tokens: { type: 'array', items: { type: 'string' } },
            acceptedAnswers: { type: 'array', items: { type: 'string' } }
          }
        },
        {
          title: 'ImageAssociation',
          type: 'object',
          required: ['prompt', 'imageUrl', 'options', 'answer'],
          properties: {
            prompt: { type: 'string' },
            imageUrl: { type: 'string' },
            options: { type: 'array', items: { type: 'string' } },
            answer: { type: 'string' }
          }
        },
        {
          title: 'Speaking',
          type: 'object',
          required: ['prompt', 'targetText'],
          properties: {
            prompt: { type: 'string' },
            targetText: { type: 'string' },
            rubric: {
              type: 'object',
              required: ['pronunciationWeight', 'fluencyWeight', 'accuracyWeight'],
              properties: {
                pronunciationWeight: { type: 'number' },
                fluencyWeight: { type: 'number' },
                accuracyWeight: { type: 'number' }
              }
            }
          }
        }
      ]
    }
  }
} as const;
