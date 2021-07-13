import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getPost } from "../lib/post.api";

const useFetchPost = () => {
  const history = useHistory();
  const [data, setData] = useState();

  //해당 index의 값 가져와서 url로 보내는 함수
  const onclick = (index) => {
    history.push(`/post/detail/${index}`);
  };

  //한 개의 값을 가져오는 함수
  const requestFetch = async () => {
    try {
      const data = await getPost();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  //처음에 값 목록 가져오는 친구
  useEffect(() => {
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJxcXFxIiwiaWF0IjoxNjI2MTY1MjY0LCJleHAiOjE2MjY3NzAwNjR9.L8BWWde0UrekhgMltE2s6r-Dp9pYrvD0-LNZyfrmZRc"
    );
    requestFetch();
  }, []);

  return { data, onclick };
};

export default useFetchPost;
