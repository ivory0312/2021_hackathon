import "./Header.scss";
import Logo from "../../../assets/logo.svg";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const onclick = useCallback(() => {
    history.push("/");
  }, []);

  return (
    <div className="header">
      <div className="header-logo">
        <img onClick={onclick} src={Logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
