# Supabase CRUD hooks

- `useExercises`: list/create/update/delete exercises.
- `useProfile`: fetch/upsert profile preferences.
- `useUserProgress`: list/upsert/delete SRS rows keyed by `user_id + exercise_id + word_id`.

These hooks assume `src/lib/supabase.ts` is configured with `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
