import { axiosWordpressApiInstance } from "../axiosInstance";

export const getPosts = async () => {
  const res = await axiosWordpressApiInstance.get("/posts");
  return res.data;
};
