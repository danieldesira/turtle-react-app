export interface ScoresResponse {
  scores: Array<Score>;
  currentPage: number;
  totalPages: number;
}

export interface Score {
  playerProfilePic?: string;
  playerName: string;
  playerAge?: number;
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
