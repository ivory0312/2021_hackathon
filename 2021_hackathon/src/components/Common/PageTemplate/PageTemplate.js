import { Children } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./PageTemplate.scss";

const PageTemplate = ({ children }) => {
  return (
    <div className="pageTemplate">
      <div className="pageTemplate-header">
        <Header />
      </div>
      <div className="pageTemplate-contents">{children}</div>
    </div>
  );
};

export default PageTemplate;
