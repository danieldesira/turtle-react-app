import { axiosWordpressApiInstance } from "../axiosInstance";

export const getPosts = async () => {
  const res = await axiosWordpressApiInstance.get("/posts");
  return res.data;
};

export const getSinglePost = async (id: number) => {
  const res = await axiosWordpressApiInstance.get(`/posts/${id}`);
  return res.data;
};

export const getPostReplies = async (postId: number) => {
  const res = await axiosWordpressApiInstance.get(`/posts/${postId}/replies`);
  return res.data;
};
