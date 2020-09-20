import React from "react";
import NavButton from "./NavButton";

import "../stylesheets/Header.scss";

export const Header: React.FC = () => {
  return (
    <div className="Header">
      <h1>Kyle O'Brien</h1>
      <NavButton pageName="Articles" isCurrentPage={true} />
      <NavButton pageName="About" isCurrentPage={false} />
      <NavButton pageName="Experience" isCurrentPage={false} />
    </div>
  );
};

export default Header;
