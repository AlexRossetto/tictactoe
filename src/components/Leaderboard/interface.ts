export type LeaderboardType = {
  round?: number | null;
  winner?: string | null;
  result?: string | null;
}

export interface LeaderboardProps {
  leaderboard: LeaderboardType[]
}