import { axiosInstance } from "../axiosInstance";
import type { Score, ScoresOptions } from "./interfaces";

export const fetchScores = async ({ outcome }: ScoresOptions) => {
  const res = await axiosInstance.get(
    "api/scores?" + (outcome ? `outcome=${outcome}&` : ""),
  );
  return res.data as Score[];
};
