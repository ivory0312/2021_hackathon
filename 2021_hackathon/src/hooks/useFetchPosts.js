import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getPost, getPosts } from "../lib/post.api";

const useFetchPosts = () => {
  const history = useHistory();
  const [data, setData] = useState([]);

  const onclick = (index) => {
    history.push(`/post/${index}`);
  };

  const requestFetch = async () => {
    try {
      const data = await getPosts();
      console.log(data);
      setData(data);
    } catch (error) {}
  };

  useEffect(() => {
    requestFetch();
  }, []);

  return { data, onclick };
};

export default useFetchPosts;
