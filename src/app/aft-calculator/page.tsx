'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import {
  calculateAftScore,
  parseAftTime,
  type AftScoreResult,
} from '../../lib/aft/calculate-score';
import type { AftStandard } from '../../data/aft';

type FormState = {
  age: string;
  standard: AftStandard;
  deadlift: string;
  pushups: string;
  sdc: string;
  plank: string;
  run: string;
};

const initialForm: FormState = {
  age: '',
  standard: 'male',
  deadlift: '',
  pushups: '',
  sdc: '',
  plank: '',
  run: '',
};

export default function AftCalculatorPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [result, setResult] = useState<AftScoreResult | null>(null);
  const [error, setError] = useState('');

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setResult(null);
    setError('');
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const age = Number(form.age);
    const deadlift = Number(form.deadlift);
    const pushups = Number(form.pushups);
    const sdcSeconds = parseAftTime(form.sdc);
    const plankSeconds = parseAftTime(form.plank);
    const runSeconds = parseAftTime(form.run);

    if (!Number.isInteger(age) || age < 17) {
      setError('Enter a valid age (17+).');
      return;
    }

    if (
      !Number.isFinite(deadlift) ||
      deadlift < 0 ||
      !Number.isInteger(pushups) ||
      pushups < 0
    ) {
      setError('Check the deadlift and push-up values.');
      return;
    }

    if (sdcSeconds === null || plankSeconds === null || runSeconds === null) {
      setError('Use MM:SS for SDC, plank, and 2-mile time.');
      return;
    }

    setResult(
      calculateAftScore({
        age,
        standard: form.standard,
        deadlift,
        pushups,
        sdcSeconds,
        plankSeconds,
        runSeconds,
      }),
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 sm:px-6">
      <section className="mx-auto w-full max-w-xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-400">
              88M Red Book
            </p>
            <h1 className="mt-1 text-3xl font-black tracking-tight">AFT Calculator</h1>
          </div>
          <Link
            href="/"
            className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-amber-500 hover:text-white"
          >
            Home
          </Link>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-3xl border border-slate-800 bg-[#111214] p-5 shadow-2xl sm:p-7"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-bold text-slate-200">Age</span>
              <input
                inputMode="numeric"
                type="number"
                min={17}
                step={1}
                required
                value={form.age}
                onChange={(e) => updateField('age', e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-amber-500"
                placeholder="28"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-bold text-slate-200">Standard</span>
              <select
                value={form.standard}
                onChange={(e) => updateField('standard', e.target.value as AftStandard)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-amber-500"
              >
                <option value="male">Male / Combat (M | C)</option>
                <option value="female">Female (F)</option>
              </select>
            </label>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field
              label="Deadlift"
              suffix="lb"
              value={form.deadlift}
              onChange={(value) => updateField('deadlift', value)}
              placeholder="300"
              type="number"
            />
            <Field
              label="Hand-release push-ups"
              suffix="reps"
              value={form.pushups}
              onChange={(value) => updateField('pushups', value)}
              placeholder="44"
              type="number"
            />
            <Field
              label="Sprint / Drag / Carry"
              suffix="MM:SS"
              value={form.sdc}
              onChange={(value) => updateField('sdc', value)}
              placeholder="1:44"
            />
            <Field
              label="Plank"
              suffix="MM:SS"
              value={form.plank}
              onChange={(value) => updateField('plank', value)}
              placeholder="3:40"
            />
          </div>

          <Field
            label="2-Mile Run"
            suffix="MM:SS"
            value={form.run}
            onChange={(value) => updateField('run', value)}
            placeholder="17:20"
          />

          {error && (
            <p role="alert" className="rounded-xl border border-red-900/70 bg-red-950/40 px-4 py-3 text-sm font-semibold text-red-200">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-2xl bg-amber-500 px-5 py-4 text-base font-black text-slate-950 shadow-lg transition hover:bg-amber-400 active:scale-[0.99]"
          >
            Calculate
          </button>
        </form>

        {result && (
          <section className="mt-5 rounded-3xl border border-amber-500/40 bg-amber-500/10 p-5 sm:p-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
                  Final Score
                </p>
                <p className="mt-1 text-4xl font-black text-white">
                  {result.total}
                  <span className="text-xl text-slate-400"> / 500</span>
                </p>
              </div>
              <p className="text-sm font-bold text-slate-300">{result.ageBand}</p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-5">
              {result.events.map((event) => (
                <div key={event.key} className="rounded-2xl bg-slate-950/70 px-3 py-3 text-center">
                  <p className="text-xs font-semibold text-slate-400">{event.label}</p>
                  <p className="mt-1 text-xl font-black text-white">{event.score}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <p className="mt-4 text-center text-xs text-slate-500">
          AFT score tables approved 15 May 2025 · effective 1 June 2025
        </p>
      </section>
    </main>
  );
}

function Field({
  label,
  suffix,
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  label: string;
  suffix: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: 'text' | 'number';
}) {
  return (
    <label className="space-y-2">
      <span className="flex items-center justify-between gap-2 text-sm font-bold text-slate-200">
        {label}
        <span className="text-xs font-semibold text-slate-500">{suffix}</span>
      </span>
      <input
        type={type}
        inputMode={type === 'number' ? 'numeric' : 'text'}
        min={type === 'number' ? 0 : undefined}
        step={type === 'number' ? 1 : undefined}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-amber-500"
        placeholder={placeholder}
      />
    </label>
  );
}
