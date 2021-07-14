import "./Header.scss";
import Logo from "../../../assets/logo.svg";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const handleHome = useCallback(() => {
    history.push("/");
  }, []);

  const handleLogin = useCallback(() => {
    history.push("/login");
  }, []);

  return (
    <div className="header">
      <div className="header-logo">
        <img onClick={handleHome} src={Logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
