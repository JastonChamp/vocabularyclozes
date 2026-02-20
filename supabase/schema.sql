-- VocabForge Supabase schema
-- Enable UUID helper
create extension if not exists "pgcrypto";

-- Users table maps to auth.users for product-level metadata
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

-- Exercise payload shape is validated with JSONB checks + app JSON schema
create table if not exists public.exercises (
  id uuid primary key default gen_random_uuid(),
  slug text unique,
  type text not null check (type in ('cloze', 'multiple-choice', 'sentence-building', 'image-association', 'speaking')),
  language text not null default 'en',
  level text not null default 'p1',
  tags text[] not null default '{}'::text[],
  title text not null,
  content jsonb not null,
  source text,
  is_published boolean not null default true,
  created_by uuid references public.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint exercises_content_object check (jsonb_typeof(content) = 'object')
);

create index if not exists exercises_type_language_level_idx
  on public.exercises(type, language, level);
create index if not exists exercises_content_gin_idx
  on public.exercises using gin(content);

create table if not exists public.user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  exercise_id uuid not null references public.exercises(id) on delete cascade,
  word_id text not null,
  interval_days integer not null default 1,
  ease_factor numeric(4,2) not null default 2.50,
  repetitions integer not null default 0,
  due_at timestamptz,
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
  on public.user_progress(user_id, next_review);

-- Generic updated_at trigger
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists users_set_updated_at on public.users;
create trigger users_set_updated_at before update on public.users
for each row execute function public.set_updated_at();

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at before update on public.profiles
for each row execute function public.set_updated_at();

drop trigger if exists exercises_set_updated_at on public.exercises;
create trigger exercises_set_updated_at before update on public.exercises
for each row execute function public.set_updated_at();

drop trigger if exists user_progress_set_updated_at on public.user_progress;
create trigger user_progress_set_updated_at before update on public.user_progress
for each row execute function public.set_updated_at();

-- RLS
alter table public.users enable row level security;
alter table public.profiles enable row level security;
alter table public.exercises enable row level security;
alter table public.user_progress enable row level security;

-- users/profile self access
create policy "users_select_self" on public.users
for select using (auth.uid() = id);
create policy "users_upsert_self" on public.users
for all using (auth.uid() = id) with check (auth.uid() = id);

create policy "profiles_select_self" on public.profiles
for select using (auth.uid() = id);
create policy "profiles_upsert_self" on public.profiles
for all using (auth.uid() = id) with check (auth.uid() = id);

-- published exercises are public; writes restricted to service role/admin path
create policy "exercises_read_published" on public.exercises
for select using (is_published = true);

-- progress is per user
create policy "user_progress_owner" on public.user_progress
for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
