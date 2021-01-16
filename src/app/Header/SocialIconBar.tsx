import React from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styled, { css } from "styled-components";

const SocialIconBar: React.FC = () => {
	return (
		<SocialIconRowContainer>
			<SocialIconRow>
				<IconAnchorWrapper href="https://www.linkedin.com/in/kyle1668/" target="#">
					<LinkedInIcon />
				</IconAnchorWrapper>
				<IconAnchorWrapper href="https://github.com/kyle1668" target="#">
					<GithubIcon />
				</IconAnchorWrapper>
				<IconAnchorWrapper href="https://medium.com/@kyleobrien1668" target="#">
					<MediumIcon />
				</IconAnchorWrapper>
				<IconAnchorWrapper href="mailto:kyledevinobrien1@gmail.com" target="#">
					<EmailIcon />
				</IconAnchorWrapper>
			</SocialIconRow>
		</SocialIconRowContainer>
	);
};

export default SocialIconBar;

const SocialIconRowContainer = styled.div`
	margin-top: 50px;
	margin-left: 200px;
`;

const SocialIconRow = styled.div`
	display: flex;
	flex-direction: row;
`;

const IconAnchorWrapper = styled.a`
	color: inherit;
	text-decoration: none;
`;

const socialIconStyles = css`
	height: 30px;
	width: 30px;
	color: #343a40;
	margin: 15px;
`;

const LinkedInIcon = styled(FaLinkedin)`
	${socialIconStyles}
`;

const GithubIcon = styled(FaGithub)`
	${socialIconStyles}
`;

const MediumIcon = styled(FaMedium)`
	${socialIconStyles}
`;

const EmailIcon = styled(MdEmail)`
	${socialIconStyles}
`;
