import { useCallback, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

type Profile = {
  id: string;
  display_name?: string;
  avatar_url?: string;
  native_language: string;
  learning_languages: string[];
  dyslexia_font_enabled: boolean;
  theme: string;
  tts_voice?: string;
};

export function useProfile(userId?: string) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchProfile = useCallback(async () => {
    if (!userId) return;
    setLoading(true);
    const { data } = await supabase.from('profiles').select('*').eq('id', userId).single();
    setProfile((data as Profile) ?? null);
    setLoading(false);
  }, [userId]);

  const upsertProfile = useCallback(
    async (payload: Profile) => {
      const { data, error } = await supabase.from('profiles').upsert(payload).select('*').single();
      if (error) throw error;
      setProfile(data as Profile);
      return data as Profile;
    },
    []
  );

  useEffect(() => {
    void fetchProfile();
  }, [fetchProfile]);

  return { profile, loading, fetchProfile, upsertProfile };
}
