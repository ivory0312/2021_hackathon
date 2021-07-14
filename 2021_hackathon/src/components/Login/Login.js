import Logo from "../../assets/logo1.png";
import useFetchLogin from "../../hooks/useFetchLogin";
import "./Login.scss";

const Login = () => {
  const { input, onChangeInput, requestLogin } = useFetchLogin();
  return (
    <>
      <div className="loginWrap">
        <div className="login">
          <img className="login-logo" src={Logo} alt="logo" />
          <div className="login-input">
            <div className="login-input-title">아이디</div>
            <input
              onChange={onChangeInput}
              value={input.id}
              name="id"
              className="login-input-inputBox"
              type="text"
            />
            <div className="login-input-title">비밀번호</div>
            <input
              onChange={onChangeInput}
              value={input.password}
              name="password"
              className="login-input-inputBox"
              type="password"
            />
          </div>
          <button onClick={requestLogin} className="login-btn">
            로그인하기
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
