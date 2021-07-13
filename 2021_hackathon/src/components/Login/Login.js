import Logo from "../../assets/logo1.png";
import "./Login.scss";

const Login = () => {
  return (
    <>
      <div className="loginWrap">
        <div className="login">
          <img className="login-logo" src={Logo} alt="logo" />
          <div className="login-input">
            <div className="login-input-title">아이디</div>
            <input className="login-input-inputBox" type="text" />
            <div className="login-input-title">비밀번호</div>
            <input className="login-input-inputBox" type="text" />
          </div>
          <button className="login-btn">로그인하기</button>
        </div>
      </div>
    </>
  );
};

export default Login;
