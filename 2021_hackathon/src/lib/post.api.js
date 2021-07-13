import customAxios from "./customAxios";

export const getPosts = async () => {
  const { data } = await customAxios.get("/post");

  return data;
};

export const getPost = async (postId) => {
  const { data } = await customAxios.get(`/post/${postId}`);

  return data;
};
