export function competitionStatus(rank: number | null | undefined) {
  if (rank === 1) return '🥇 Convoy Commander';
  if (rank && rank <= 10) return '🥈 Elite Driver';
  if (rank && rank <= 100) return '🥉 Road Warrior';
  return 'Unranked';
}

export function formatCompetitionTime(seconds: number) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
}
