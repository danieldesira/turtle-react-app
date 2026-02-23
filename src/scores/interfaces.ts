export interface Score {
  playerProfilePic?: string;
  playerName: string;
  level: number;
  duration: number;
  points: number;
}

export interface ScoresOptions {
  outcome?: string;
}
