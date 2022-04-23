export type LeaderboardType = {
  winner?: string;
  result?: string;
}

export interface LeaderboardProps {
  leaderboard: LeaderboardType[]
}