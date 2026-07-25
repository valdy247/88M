create table if not exists public.hidden_questions (
  question_id text primary key,
  hidden_by uuid not null references auth.users(id),
  hidden_at timestamptz not null default now()
);

alter table public.hidden_questions enable row level security;

create policy "Hidden questions are publicly readable"
  on public.hidden_questions for select using (true);

create policy "Admins can hide questions"
  on public.hidden_questions for insert
  with check (
    auth.uid() = hidden_by and exists (
      select 1 from public.profiles
      where profiles.id = auth.uid() and profiles.role = 'admin'
    )
  );

create policy "Admins can restore questions"
  on public.hidden_questions for delete
  using (
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid() and profiles.role = 'admin'
    )
  );

