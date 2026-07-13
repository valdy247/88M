'use client';

import { useEffect, useMemo, useState } from 'react';
import type { TimeRemaining } from '../../types/exam';
import { formatTimer, getTimeRemaining } from '../../lib/exam/timer';

interface CountdownTimerProps {
  startedAt: number;
  endsAt: number;
  onExpire: () => void;
}

export function CountdownTimer({ startedAt, endsAt, onExpire }: CountdownTimerProps) {
  const [now, setNow] = useState(Date.now());
  const remaining = useMemo(() => getTimeRemaining(endsAt), [endsAt, now]);
  const timerText = formatTimer(remaining.remainingMs);

  useEffect(() => {
    if (remaining.remainingMs <= 0) {
      onExpire();
      return undefined;
    }
    const interval = window.setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => window.clearInterval(interval);
  }, [onExpire, remaining.remainingMs]);

  const statusClass = remaining.status === 'critical' ? 'text-red-400' : remaining.status === 'warning' ? 'text-amber-300' : 'text-slate-100';

  return (
    <div className="rounded-3xl border border-slate-800 bg-[#111214] p-6 shadow-glow">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-olive-300">Remaining time</p>
          <p className={`mt-2 text-4xl font-semibold ${statusClass}`}>{timerText}</p>
        </div>
        <div className="text-sm text-slate-300">
          <p>Exam started at {new Date(startedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
          <p>Ends at {new Date(endsAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        {remaining.status === 'critical'
          ? 'Less than five minutes remaining.'
          : remaining.status === 'warning'
          ? 'Less than ten minutes remaining.'
          : 'More than ten minutes remaining.'}
      </p>
    </div>
  );
}
