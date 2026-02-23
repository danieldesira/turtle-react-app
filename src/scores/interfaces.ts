export interface Score {
  playerProfilePic?: string;
  playerName: string;
  level: number;
  duration: number;
  points: number;
  outcome: string;
}

export interface ScoresOptions {
  outcome?: string;
  items?: number;
  page?: number;
}
