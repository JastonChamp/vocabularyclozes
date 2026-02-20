export const CLOZE_GENERATION_PROMPT = `You are generating high-quality vocabulary training data for VocabForge.
Return strict JSON only.

Requirements:
- Type: cloze
- Include one passage (80-160 words) with [BLANK_1], [BLANK_2], ... markers
- 4-8 blanks
- Provide answers and distractors to form a balanced wordbank
- Add concise hints for each blank
- CEFR-like difficulty mapped to p1..p6

JSON shape:
{
  "type": "cloze",
  "language": "en",
  "level": "p3",
  "title": "...",
  "tags": ["context-inference"],
  "content": {
    "passage": "... [BLANK_1] ...",
    "blanks": [{"id":"1","answer":"...","hint":"..."}],
    "wordbank": ["...", "..."]
  }
}`;
