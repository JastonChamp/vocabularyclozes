import { CLOZE_GENERATION_PROMPT } from './promptTemplate';

export type AIProvider = 'openai' | 'grok';

type GenerateOpts = {
  provider: AIProvider;
  apiKey: string;
  topic: string;
  level: string;
  language?: string;
  model?: string;
};

function endpointFor(provider: AIProvider) {
  if (provider === 'grok') return 'https://api.x.ai/v1/chat/completions';
  return 'https://api.openai.com/v1/chat/completions';
}

export async function generateClozeExercise(opts: GenerateOpts) {
  const endpoint = endpointFor(opts.provider);
  const model = opts.model ?? (opts.provider === 'grok' ? 'grok-2-latest' : 'gpt-4o-mini');

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${opts.apiKey}`
    },
    body: JSON.stringify({
      model,
      temperature: 0.8,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: CLOZE_GENERATION_PROMPT },
        {
          role: 'user',
          content: `Create a ${opts.language ?? 'en'} ${opts.level} cloze exercise about: ${opts.topic}.`
        }
      ]
    })
  });

  if (!res.ok) {
    throw new Error(`Generation failed (${res.status})`);
  }

  const json = await res.json();
  const raw = json.choices?.[0]?.message?.content;
  if (!raw) throw new Error('No completion payload returned');

  return JSON.parse(raw);
}
