import React from "react";

import "../stylesheets/NavButton.scss";

interface props {
  pageName: string;
  isCurrentPage: boolean;
}

const NavButton: React.FC<props> = (input: props) => {
  return (
    <button className="NavButton">
      {input.pageName}
    </button>
  );
};

export default NavButton;
