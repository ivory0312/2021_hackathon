import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { postLogin } from "../lib/post.api";

const useFetchLogin = () => {
  const history = useHistory();
  const [input, setInput] = useState({
    id: "",
    password: "",
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
      const { data } = await postLogin(input);
      localStorage.setItem("token", data.authToken);
      history.push("/");
    } catch (error) {
      const { status } = error.response.data;
      if (status === 500) {
        console.log("server error");
      }
    }
  }, [input]);

  return { input, onChangeInput, requestLogin };
};

export default useFetchLogin;
