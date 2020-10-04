import React from "react";
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import "../stylesheets/SocialIconBar.scss";

const iconStyles: React.CSSProperties = {
	height: "25px",
	width: "25px",
	color: "#343a40",
	margin: "15px",
};

export const SocialIconBar: React.FC = () => {
	return (
		<div className="social-icon-bars">
			<a href="https://www.linkedin.com/in/kyle1668/" target="#">
				<FaLinkedin color="black" style={iconStyles} />
			</a>
			<a href="https://github.com/kyle1668" target="#">
				<FaGithub color="black" style={iconStyles} />
			</a>
			<a href="https://medium.com/@kyleobrien1668" target="#">
				<FaMedium color="black" style={iconStyles} />
			</a>
			<a href="mailto:kyledevinobrien1@gmail.com" target="#">
				<MdEmail color="black" style={iconStyles} />
			</a>
		</div>
	);
};

export default SocialIconBar;
