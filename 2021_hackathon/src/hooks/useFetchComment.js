import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComment } from "../lib/post.api";

const useFetchComment = () => {
  const { idx } = useParams();
  const [item, setItem] = useState([]);

  const requestComment = useCallback(async () => {
    try {
      const { data } = await getComment(idx);
      setItem(data);
    } catch (error) {}
  }, []);

  useEffect(() => {
    requestComment();
  }, []);

  return { item };
};

export default useFetchComment;
