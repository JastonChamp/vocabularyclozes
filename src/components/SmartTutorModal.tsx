import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import type { VocabularyMeta } from '@/types/exercise';

type SmartTutorModalProps = {
  open: boolean;
  onClose: () => void;
  vocabulary: VocabularyMeta[];
  currentContext?: string;
};

function scoreMatch(query: string, item: VocabularyMeta, context?: string) {
  const q = query.toLowerCase().trim();
  if (!q) return 0;
  const text = `${item.word} ${item.rich_json.contextExplanation} ${(item.rich_json.exampleSentences || []).join(' ')} ${context || ''}`.toLowerCase();
  if (item.word.toLowerCase() === q) return 100;
  if (text.includes(q)) return 60;
  const words = text.split(/\W+/);
  const overlaps = q.split(/\W+/).filter((w) => words.includes(w)).length;
  return overlaps * 10;
}

function buildTutorReply(query: string, hit?: VocabularyMeta) {
  if (!query) return 'Ask about any word in this cloze passage.';
  if (!hit) return 'I could not find an exact match. Try another keyword or open Advanced Local AI mode.';
  return `${hit.word}: ${hit.rich_json.contextExplanation} Mnemonic: ${hit.rich_json.mnemonic}`;
}

export function SmartTutorModal({ open, onClose, vocabulary, currentContext }: SmartTutorModalProps) {
  const [query, setQuery] = useState('');
  const [advancedLocalAi, setAdvancedLocalAi] = useState(false);

  const ranked = useMemo(() => {
    return [...vocabulary]
      .map((item) => ({ item, score: scoreMatch(query, item, currentContext) }))
      .filter((x) => x.score > 0 || !query)
      .sort((a, b) => b.score - a.score)
      .slice(0, 20);
  }, [currentContext, query, vocabulary]);

  const topHit = ranked[0]?.item;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-3xl rounded-2xl bg-slate-900 p-5 text-white">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-xl font-bold">Ask Tutor</h3>
          <button onClick={onClose} className="rounded-lg bg-slate-800 px-3 py-1">Close</button>
        </div>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search any vocabulary word..."
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2"
        />

        <div className="mt-3 flex items-center justify-between rounded-xl bg-slate-800 p-3 text-sm">
          <span>{buildTutorReply(query, topHit)}</span>
          <label className="ml-3 flex items-center gap-2">
            <input type="checkbox" checked={advancedLocalAi} onChange={(e) => setAdvancedLocalAi(e.target.checked)} />
            Advanced Local AI
          </label>
        </div>

        <div className="mt-1 text-xs text-slate-400">
          {advancedLocalAi
            ? 'Local AI enabled: use WebLLM/Transformers in-browser (one-time model download ~1.5GB).'
            : 'Rule-based tutor mode (zero API cost).'}
        </div>

        <div className="mt-4 max-h-72 space-y-2 overflow-auto">
          {ranked.map(({ item }) => (
            <div key={item.word} className="rounded-xl border border-slate-700 bg-slate-800/80 p-3">
              <div className="flex items-center justify-between">
                <div className="font-semibold">{item.word}</div>
                <span className="text-xs text-indigo-300">{item.psle_level}</span>
              </div>
              <div className="mt-1 text-sm text-slate-200">{item.rich_json.contextExplanation}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
