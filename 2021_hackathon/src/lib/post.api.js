import customAxios from "./customAxios";

export const getPosts = async () => {
  const { data } = await customAxios.get("/post");

  return data;
};

export const getPost = async () => {
  const { data } = await customAxios.get(`/post`);
  return data;
};
