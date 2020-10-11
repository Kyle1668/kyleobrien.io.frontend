import React from "react";

import SocialIconBar from "./SocialIconBar";
import HeaderWrapper from "./HeaderWrapper";
import ImageContainer from "../../shared/ImageContainer";
import ProfilePicture from "./ProfilePicture";
import TextContainer from "../../shared/TextContainer";
import BioText from "./BioText";
import ButtonContainer from "../../shared/ButtonContainer";
import NavButton from "./NavButton";
import { PageContext, startPage } from "../../pages/PageContext";

const Header: React.FC = () => {
	const [currentPage, setCurrentPage] = React.useState(startPage);

	return (
		<PageContext.Provider value={{ currentPage, setCurrentPage }}>
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
		</PageContext.Provider>
	);
};

export default Header;
