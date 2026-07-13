export function getTimeRemaining(endsAt: number): { remainingMs: number; status: 'normal' | 'warning' | 'critical' } {
  const remainingMs = Math.max(0, endsAt - Date.now());
  if (remainingMs <= 5 * 60000) {
    return { remainingMs, status: 'critical' };
  }
  if (remainingMs <= 10 * 60000) {
    return { remainingMs, status: 'warning' };
  }
  return { remainingMs, status: 'normal' };
}

export function formatTimer(remainingMs: number): string {
  const minutes = Math.floor(remainingMs / 60000);
  const seconds = Math.floor((remainingMs % 60000) / 1000);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
