import "./Header.scss";
import Logo from "../../../assets/logo.svg";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const handleHome = useCallback(() => {
    history.push("/");
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    history.push("/login");
  }, []);

  return (
    <div className="header">
      <div className="header-logo">
        <img onClick={handleHome} src={Logo} alt="logo" />
      </div>
      <div onClick={logout} className="header-logout">
        로그아웃
      </div>
    </div>
  );
};

export default Header;
