import React from "react";
import NavButton from "./NavButton";

import "../stylesheets/Header.scss";

export const Header: React.FC = () => {
	return (
		<div className="Header">
			{/* <h1>Kyle O&apos;Brien</h1> */}
			<div className="image-container">
				<img
					id="profile-picture"
					src="https://koioassets.blob.core.windows.net/images/zoka-profile-cropped.png"
					alt="Kyle in a coffee shop"
				/>
			</div>
			<div className="text-container">
				<p>Hi, I’m a software engineer and writer living in Bellevue, Washington </p>
			</div>
			<div className="button-container">
				<NavButton pageName="Articles" isCurrentPage />
				<NavButton pageName="About" isCurrentPage={false} />
				<NavButton pageName="Experience" isCurrentPage={false} />
			</div>
		</div>
	);
};

export default Header;
