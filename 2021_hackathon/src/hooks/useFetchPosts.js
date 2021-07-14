import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getPosts } from "../lib/post.api";

const useFetchPosts = () => {
  const history = useHistory();
  const [data, setData] = useState([]);

  const onclick = (index) => {
    history.push(`/post/detail/${index}`);
  };

  const requestFetch = async () => {
    try {
      const { data } = await getPosts();
      setData(data);
    } catch (error) {}
  };

  useEffect(() => {
    const loginCheck = localStorage.getItem("token");
    if (loginCheck) {
      requestFetch();
    } else {
      history.push("/login");
    }
  }, []);

  return { data, onclick };
};

export default useFetchPosts;
