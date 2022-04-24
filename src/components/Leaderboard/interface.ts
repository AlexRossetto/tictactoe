export type LeaderboardType = {
  winner?: string | null;
  result?: string | null;
}

export interface LeaderboardProps {
  leaderboard: LeaderboardType[]
}