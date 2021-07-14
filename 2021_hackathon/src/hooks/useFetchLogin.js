import { useCallback, useState } from "react";
import { postLogin } from "../lib/post.api";

const useFetchLogin = () => {
  const [input, setInput] = useState({
    id: "",
    pw: "",
  });

  const onChangeInput = useCallback(
    (event) => {
      const { name, value } = event.target;

      setInput({
        ...input,
        [name]: value,
      });
    },
    [input]
  );
  const requestLogin = useCallback(async () => {
    try {
      const data = await postLogin(input);
    } catch (error) {}
  }, [input]);

  return { input, onChangeInput, requestLogin };
};

export default useFetchLogin;
