import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getPost } from "../lib/post.api";

const useFetchPost = () => {
  const history = useHistory();
  const { idx } = useParams();
  const [data, setData] = useState(null);

  const onclick = (index) => {
    history.push(`/post/${index}`);
  };

  const requestFetch = async () => {
    try {
      const data = await getPost(idx);
      setData(data);
    } catch (error) {}
  };

  useEffect(() => {
    requestFetch();
  }, []);

  return { data, onclick };
};

export default useFetchPost;
