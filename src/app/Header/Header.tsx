import React from "react";
import styled from "styled-components";
import SocialIconBar from "./SocialIconBar";
import ImageContainer from "../../shared/ImageContainer";
import TextContainer from "../../shared/TextContainer";
import ButtonContainer from "../../shared/ButtonContainer";
import NavButton from "./NavButton";
import { AppContextConsumer } from "../AppContex";

const Header: React.FC = () => {
	return (
		<AppContextConsumer>
			{(context) => (
				<div>
					<SocialIconBar />
					<HeaderPrimaryContent>
						<ImageContainer>
							<ProfilePicture
								id="profile-picture"
								src="https://koioassets.blob.core.windows.net/images/zoka-profile-cropped.png"
								alt="Kyle in a coffee shop"
							/>
						</ImageContainer>
						<TextContainer>
							<BioText>
								Hi, I’m a software engineer and writer living in Bellevue,
								Washington
							</BioText>
						</TextContainer>
						<ButtonContainer>
							<NavButton
								isActive={context.currentPage === "writing"}
								onClick={() => context.setCurrentPage("writing")}
							>
								Writing
							</NavButton>
							<NavButton
								isActive={context.currentPage === "about"}
								onClick={() => context.setCurrentPage("about")}
							>
								About
							</NavButton>
							<NavButton
								isActive={context.currentPage === "experience"}
								onClick={() => context.setCurrentPage("experience")}
							>
								Experience
							</NavButton>
						</ButtonContainer>
					</HeaderPrimaryContent>
				</div>
			)}
		</AppContextConsumer>
	);
};

export default Header;

const HeaderPrimaryContent = styled.div`
	padding-top: 100px;
	padding-bottom: 100px;
	text-align: center;
`;

const ProfilePicture = styled.img`
	height: 150px;
	width: 150px;
	border-radius: 50%;
	border: 1px solid black;
`;

const BioText = styled.p`
	font-size: 20px;
`;
