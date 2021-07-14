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

export const postLogin = async (input) => {
  const body = {
    id: input.id,
    password: input.password,
  };
  const { data } = await customAxios.post("/auth/login", body);

  return data;
};
