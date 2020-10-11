import React from "react";

import SocialIconBar from "./SocialIconBar";
import HeaderWrapper from "./HeaderWrapper";
import ImageContainer from "../../shared/ImageContainer";
import ProfilePicture from "./ProfilePicture";
import TextContainer from "../../shared/TextContainer";
import BioText from "./BioText";
import ButtonContainer from "../../shared/ButtonContainer";
import NavButton from "./NavButton";

const Header: React.FC = () => {
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
						Hi, I’m a software engineer and writer living in Bellevue, Washington{" "}
					</BioText>
				</TextContainer>
				<ButtonContainer>
					<NavButton isActive>Articles</NavButton>
					<NavButton isActive={false}>About</NavButton>
					<NavButton isActive={false}>Experience</NavButton>
				</ButtonContainer>
			</HeaderWrapper>
		</div>
	);
};

export default Header;
