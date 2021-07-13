import Logo from "../../assets/logo1.png";
import "./Login.scss";

const Login = () => {
  return (
    <>
      <div className="loginWrap">
        <div className="login">
          <img className="login-logo" src={Logo} alt="logo" />
          <div className="login-inputBox">
            <span className="login-inputBox-title">아이디</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
