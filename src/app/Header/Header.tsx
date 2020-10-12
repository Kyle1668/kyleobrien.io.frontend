import React from "react";
import styled from "styled-components";
import SocialIconBar from "./SocialIconBar";
import ImageContainer from "../../shared/ImageContainer";
import TextContainer from "../../shared/TextContainer";
import ButtonContainer from "../../shared/ButtonContainer";
import NavButton from "./NavButton";
import { usePageContext } from "../../pages/PageContext";

const Header: React.FC = () => {
	const { currentPage, setCurrentPage } = usePageContext();

	return (
		<div>
			<SocialIconBar />
			<HeaderWrapper>
				<ImageContainer>
					<ProfilePicture
						id="profile-picture"
						src="https://koioassets.blob.core.windows.net/images/zoka-profile-cropped.png"
						alt="Kyle in a coffee shop"
					/>
				</ImageContainer>
				<TextContainer>
					<BioText>
						Hi, I’m a software engineer and writer living in Bellevue, Washington
					</BioText>
				</TextContainer>
				<ButtonContainer>
					<NavButton
						isActive={currentPage === "writing"}
						onClick={() => setCurrentPage("writing")}
					>
						Writing
					</NavButton>
					<NavButton
						isActive={currentPage === "about"}
						onClick={() => setCurrentPage("about")}
					>
						About
					</NavButton>
					<NavButton
						isActive={currentPage === "experience"}
						onClick={() => setCurrentPage("experience")}
					>
						Experience
					</NavButton>
				</ButtonContainer>
			</HeaderWrapper>
		</div>
	);
};

export default Header;

const HeaderWrapper = styled.div`
	padding-top: 100px;
	padding-bottom: 100px;
	text-align: center;
`;

const ProfilePicture = styled.img`
	height: 150px;
	width: 150px;
	border-radius: 50%;
	border: 2px solid black;
`;

const BioText = styled.p`
	font-size: 20px;
`;
