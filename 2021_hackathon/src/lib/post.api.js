import customAxios from "./customAxios";

export const getPosts = async () => {
  const { data } = await customAxios.get("/post");

  return data;
};

export const getPost = async () => {
  console.log("1232");
  const { data } = await customAxios.get(`/post`);
  console.log(data);
  return data;
};
