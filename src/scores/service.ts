import { axiosInstance } from "../axiosInstance";
import type { Score } from "./interfaces";

export const fetchScores = async () => {
  const res = await axiosInstance.get("api/scores");
  return res.data as Score[];
};
