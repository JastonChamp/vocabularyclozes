#!/usr/bin/env node
import { readFile } from 'node:fs/promises';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const PROMPT = `You are generating high-quality vocabulary training data for VocabForge. Return strict JSON only.
JSON shape:
{"type":"cloze","language":"en","level":"p3","title":"...","tags":["context-inference"],"content":{"passage":"... [BLANK_1] ...","blanks":[{"id":"1","answer":"...","hint":"..."}],"wordbank":["...","..."]}}`;

function parseCsv(text) {
  const [headerLine, ...rows] = text.trim().split('\n');
  const headers = headerLine.split(',').map((h) => h.trim());
  return rows.map((line) => {
    const values = line.split(',').map((v) => v.trim());
    return Object.fromEntries(headers.map((h, i) => [h, values[i] ?? '']));
  });
}

async function seedFromCsv(path) {
  const content = await readFile(path, 'utf8');
  const rows = parseCsv(content);
  const payload = rows.map((r) => ({
    slug: r.slug,
    type: r.type || 'cloze',
    language: r.language || 'en',
    level: r.level || 'p1',
    title: r.title,
    tags: r.tags ? r.tags.split('|') : [],
    content: JSON.parse(r.content_json),
    source: r.source || 'csv-import'
  }));

  const { error } = await supabase.from('exercises').insert(payload);
  if (error) throw error;
  console.log(`Inserted ${payload.length} exercises.`);
}

async function generateWithAI() {
  const provider = process.env.AI_PROVIDER === 'grok' ? 'grok' : 'openai';
  const endpoint = provider === 'grok' ? 'https://api.x.ai/v1/chat/completions' : 'https://api.openai.com/v1/chat/completions';
  const model = process.env.AI_MODEL || (provider === 'grok' ? 'grok-2-latest' : 'gpt-4o-mini');

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.AI_API_KEY}`
    },
    body: JSON.stringify({
      model,
      temperature: 0.8,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: PROMPT },
        { role: 'user', content: `Create a cloze exercise about ${process.env.AI_TOPIC || 'science and discovery'} at ${process.env.AI_LEVEL || 'p3'}.` }
      ]
    })
  });

  if (!response.ok) throw new Error(`AI generation failed (${response.status})`);
  const json = await response.json();
  return JSON.parse(json.choices[0].message.content);
}

async function seedFromAI() {
  const generated = await generateWithAI();
  const { error } = await supabase.from('exercises').insert({
    slug: `ai-${Date.now()}`,
    type: generated.type,
    language: generated.language,
    level: generated.level,
    title: generated.title,
    tags: generated.tags ?? [],
    content: generated.content,
    source: 'ai-generated'
  });
  if (error) throw error;
  console.log('Inserted 1 AI-generated exercise');
}

const mode = process.argv[2];
if (mode === 'csv') {
  await seedFromCsv(process.argv[3]);
} else if (mode === 'ai') {
  await seedFromAI();
} else {
  console.log('Usage:\n  node scripts/admin/seed-exercises.mjs csv ./exercises.csv\n  node scripts/admin/seed-exercises.mjs ai');
}
