import { useCallback, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

type UserProgress = {
  id: string;
  user_id: string;
  exercise_id: string;
  word_id: string;
  interval_days: number;
  ease_factor: number;
  repetitions: number;
  last_review?: string;
  next_review?: string;
  due_at?: string;
  quality?: number;
  correct_count: number;
  incorrect_count: number;
  meta: Record<string, unknown>;
};

export function useUserProgress(userId?: string) {
  const [progress, setProgress] = useState<UserProgress[]>([]);
  const [loading, setLoading] = useState(false);

  const listProgress = useCallback(async () => {
    if (!userId) return;
    setLoading(true);
    const { data } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .order('next_review', { ascending: true });
    setProgress((data as UserProgress[]) ?? []);
    setLoading(false);
  }, [userId]);

  const upsertProgress = useCallback(async (payload: Omit<UserProgress, 'id'>) => {
    const { data, error } = await supabase
      .from('user_progress')
      .upsert(payload, { onConflict: 'user_id,exercise_id,word_id' })
      .select('*')
      .single();
    if (error) throw error;
    setProgress((prev) => {
      const row = data as UserProgress;
      const idx = prev.findIndex(
        (p) =>
          p.user_id === row.user_id &&
          p.exercise_id === row.exercise_id &&
          p.word_id === row.word_id
      );
      if (idx === -1) return [...prev, row];
      const next = [...prev];
      next[idx] = row;
      return next;
    });
    return data as UserProgress;
  }, []);

  const deleteProgress = useCallback(async (id: string) => {
    const { error } = await supabase.from('user_progress').delete().eq('id', id);
    if (error) throw error;
    setProgress((prev) => prev.filter((p) => p.id !== id));
  }, []);

  useEffect(() => {
    void listProgress();
  }, [listProgress]);

  return { progress, loading, listProgress, upsertProgress, deleteProgress };
}
