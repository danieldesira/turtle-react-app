import { axiosInstance } from "../axiosInstance";
import type { Score, ScoresOptions } from "./interfaces";

export const fetchScores = async ({ outcome, items, page }: ScoresOptions) => {
  const res = await axiosInstance.get(
    "api/scores?" +
      (outcome ? `outcome=${outcome}&` : "") +
      (items ? `items=${items}&` : "") +
      (page ? `page=${page}&` : ""),
  );
  return res.data as Score[];
};
