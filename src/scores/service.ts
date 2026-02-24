import { axiosInstance } from "../axiosInstance";
import type { ScoresResponse, ScoresOptions } from "./interfaces";

export const fetchScores = async (filters: ScoresOptions) => {
  const res = await axiosInstance.get(
    `api/scores?${Object.entries(filters)
      .filter(([, value]) => value)
      .map(([key, value]) => `${key}=${value === true ? "1" : value}`)
      .join("&")}`,
  );
  return res.data as ScoresResponse;
};
