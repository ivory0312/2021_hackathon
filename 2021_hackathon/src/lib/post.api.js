import customAxios from "./customAxios";

export const getPosts = async () => {
  const { data } = await customAxios.get("/post");

  return data;
};

export const getPost = async (postId) => {
  const { data } = await customAxios.get(`/post/detail/${postId}`);

  return data;
};

export const getComment = async (postId) => {
  const { data } = await customAxios.get(`/comment/${postId}`);

  return data;
};

export const postLogin = async (id, pw) => {
  const body = {
    id,
    pw,
  };
  const { data } = await customAxios.post("/auth/login", body);

  return data;
};
