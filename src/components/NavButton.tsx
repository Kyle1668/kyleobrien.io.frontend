import React from "react";

import "../stylesheets/NavButton.scss";

interface props {
	pageName: string;
	isCurrentPage: boolean;
}

const NavButton: React.FC<props> = (input: props) => {
	const activeClassName = input.isCurrentPage === true ? "ActiveNavButton" : "InactiveNavButton";

	return (
		<button className={`NavButton ${activeClassName}`} type="button">
			{input.pageName}
		</button>
	);
};

export default NavButton;
