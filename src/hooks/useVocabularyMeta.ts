import { useCallback, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { VocabularyMeta } from '@/types/exercise';

export function useVocabularyMeta(query?: string) {
  const [items, setItems] = useState<VocabularyMeta[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchVocabulary = useCallback(async () => {
    setLoading(true);
    let req = supabase.from('vocabulary_meta').select('word, psle_level, rich_json').order('word');
    if (query) req = req.ilike('word', `%${query}%`);

    const { data } = await req;
    setItems((data as VocabularyMeta[]) ?? []);
    setLoading(false);
  }, [query]);

  useEffect(() => {
    void fetchVocabulary();
  }, [fetchVocabulary]);

  return { items, loading, fetchVocabulary };
}
