import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../lib/post.api";

const useFetchPost = () => {
  const { idx } = useParams();
  const [data, setData] = useState([]);

  const requestFetch = useCallback(async () => {
    try {
      const { data } = await getPost(idx);
      setData(data);
    } catch (error) {}
  }, []);

  useEffect(() => {
    requestFetch();
  }, []);

  return { data };
};

export default useFetchPost;
