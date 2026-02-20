-- VocabForge schema (CLOZE-ONLY)
create extension if not exists "pgcrypto";

create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.profiles (
  id uuid primary key references public.users(id) on delete cascade,
  display_name text,
  avatar_url text,
  native_language text not null default 'en',
  learning_languages text[] not null default array['en']::text[],
  dyslexia_font_enabled boolean not null default false,
  theme text not null default 'midnight',
  tts_voice text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- exercises table supports multiple CLOZE formats only
create table if not exists public.exercises (
  id uuid primary key default gen_random_uuid(),
  slug text unique,
  type text not null default 'cloze' check (type = 'cloze'),
  format text not null check (format in ('single_blank_sentence', 'multi_blank_paragraph', 'progressive_story', 'themed_pack')),
  language text not null default 'en',
  level text not null default 'p1',
  theme text,
  tags text[] not null default '{}'::text[],
  title text not null,
  content jsonb not null,
  source text,
  is_published boolean not null default true,
  created_by uuid references public.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint exercises_content_object check (jsonb_typeof(content) = 'object'),
  constraint exercises_content_has_blanks check (content ? 'blanks')
);

create index if not exists exercises_lookup_idx
  on public.exercises(type, format, language, level, theme);
create index if not exists exercises_content_gin_idx
  on public.exercises using gin(content);

-- smart tutor metadata (pre-curated, safe for kids)
create table if not exists public.vocabulary_meta (
  id uuid primary key default gen_random_uuid(),
  word text not null unique,
  psle_level text not null,
  rich_json jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint rich_json_is_object check (jsonb_typeof(rich_json) = 'object'),
  constraint rich_json_required_keys check (
    rich_json ? 'contextExplanation' and
    rich_json ? 'exampleSentences' and
    rich_json ? 'mnemonic' and
    rich_json ? 'etymology' and
    rich_json ? 'commonMistakes' and
    rich_json ? 'relatedWords'
  )
);

create index if not exists vocabulary_meta_word_idx on public.vocabulary_meta(word);
create index if not exists vocabulary_meta_rich_gin_idx on public.vocabulary_meta using gin(rich_json);

-- optional m2m linkage so cloze exercises can quickly query word metadata
create table if not exists public.exercise_vocabulary_map (
  exercise_id uuid not null references public.exercises(id) on delete cascade,
  vocabulary_id uuid not null references public.vocabulary_meta(id) on delete cascade,
  primary key (exercise_id, vocabulary_id)
);

create table if not exists public.user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  exercise_id uuid not null references public.exercises(id) on delete cascade,
  word_id text not null,
  interval_days integer not null default 1,
  ease_factor numeric(4,2) not null default 2.50,
  repetitions integer not null default 0,
  due_date timestamptz,
  last_review timestamptz,
  next_review timestamptz,
  quality integer check (quality between 0 and 5),
  correct_count integer not null default 0,
  incorrect_count integer not null default 0,
  meta jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(user_id, exercise_id, word_id)
);

create index if not exists user_progress_user_due_idx
  on public.user_progress(user_id, due_date, next_review);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create or replace trigger users_set_updated_at before update on public.users
for each row execute function public.set_updated_at();
create or replace trigger profiles_set_updated_at before update on public.profiles
for each row execute function public.set_updated_at();
create or replace trigger exercises_set_updated_at before update on public.exercises
for each row execute function public.set_updated_at();
create or replace trigger vocabulary_meta_set_updated_at before update on public.vocabulary_meta
for each row execute function public.set_updated_at();
create or replace trigger user_progress_set_updated_at before update on public.user_progress
for each row execute function public.set_updated_at();

alter table public.users enable row level security;
alter table public.profiles enable row level security;
alter table public.exercises enable row level security;
alter table public.vocabulary_meta enable row level security;
alter table public.exercise_vocabulary_map enable row level security;
alter table public.user_progress enable row level security;

create policy "users_select_self" on public.users
for select using (auth.uid() = id);
create policy "users_upsert_self" on public.users
for all using (auth.uid() = id) with check (auth.uid() = id);

create policy "profiles_select_self" on public.profiles
for select using (auth.uid() = id);
create policy "profiles_upsert_self" on public.profiles
for all using (auth.uid() = id) with check (auth.uid() = id);

create policy "exercises_read_published" on public.exercises
for select using (is_published = true);

create policy "vocabulary_meta_read_all" on public.vocabulary_meta
for select using (true);

create policy "exercise_vocab_map_read" on public.exercise_vocabulary_map
for select using (true);

create policy "user_progress_owner" on public.user_progress
for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
