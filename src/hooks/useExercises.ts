import { useCallback, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { ExerciseBase } from '@/types/exercise';

type ExerciseRow = ExerciseBase & {
  id: string;
  slug?: string;
  content: Record<string, unknown>;
  is_published: boolean;
  created_at: string;
};

export function useExercises(filters?: { type?: string; language?: string; level?: string }) {
  const [data, setData] = useState<ExerciseRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const listExercises = useCallback(async () => {
    setLoading(true);
    let query = supabase.from('exercises').select('*').order('created_at', { ascending: false });
    if (filters?.type) query = query.eq('type', filters.type);
    if (filters?.language) query = query.eq('language', filters.language);
    if (filters?.level) query = query.eq('level', filters.level);

    const { data: rows, error: err } = await query;
    if (err) setError(err.message);
    setData((rows as ExerciseRow[]) ?? []);
    setLoading(false);
  }, [filters?.language, filters?.level, filters?.type]);

  const createExercise = useCallback(async (payload: Omit<ExerciseRow, 'id' | 'created_at'>) => {
    const { data: row, error: err } = await supabase
      .from('exercises')
      .insert(payload)
      .select('*')
      .single();
    if (err) throw err;
    setData((prev) => [row as ExerciseRow, ...prev]);
    return row as ExerciseRow;
  }, []);

  const updateExercise = useCallback(async (id: string, patch: Partial<ExerciseRow>) => {
    const { data: row, error: err } = await supabase
      .from('exercises')
      .update(patch)
      .eq('id', id)
      .select('*')
      .single();
    if (err) throw err;
    setData((prev) => prev.map((e) => (e.id === id ? (row as ExerciseRow) : e)));
    return row as ExerciseRow;
  }, []);

  const deleteExercise = useCallback(async (id: string) => {
    const { error: err } = await supabase.from('exercises').delete().eq('id', id);
    if (err) throw err;
    setData((prev) => prev.filter((e) => e.id !== id));
  }, []);

  useEffect(() => {
    void listExercises();
  }, [listExercises]);

  return { data, loading, error, listExercises, createExercise, updateExercise, deleteExercise };
}
