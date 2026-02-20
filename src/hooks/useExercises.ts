import { useCallback, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { ClozeExercise } from '@/types/exercise';

type ExerciseRow = ClozeExercise & {
  id: string;
  is_published: boolean;
  created_at: string;
};

export function useExercises(filters?: { format?: string; language?: string; level?: string; theme?: string }) {
  const [data, setData] = useState<ExerciseRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const listExercises = useCallback(async () => {
    setLoading(true);
    let query = supabase
      .from('exercises')
      .select('*')
      .eq('type', 'cloze')
      .order('created_at', { ascending: false });

    if (filters?.format) query = query.eq('format', filters.format);
    if (filters?.language) query = query.eq('language', filters.language);
    if (filters?.level) query = query.eq('level', filters.level);
    if (filters?.theme) query = query.eq('theme', filters.theme);

    const { data: rows, error: err } = await query;
    if (err) setError(err.message);
    setData((rows as ExerciseRow[]) ?? []);
    setLoading(false);
  }, [filters?.format, filters?.language, filters?.level, filters?.theme]);

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
