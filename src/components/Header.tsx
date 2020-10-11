import React from "react";
import styled from "styled-components";
import NavButton from "./NavButton";

const HeaderWrapper = styled.div`
	width: 100%;
	padding-top: 100px;
	padding-bottom: 100px;
	text-align: center;
`;

const ImageContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 25px;
`;

const ProfilePicture = styled.img`
	height: 150px;
	width: 150px;
	border-radius: 50%;
	border: 2px solid black;
`;

const TextContainer = styled.div`
	margin-top: 30px;
	margin-bottom: 40px;
`;

const BioText = styled.p`
	font-size: 20px;
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 25px;
`;

interface PageNavButtonProps {
	isActive: boolean;
}

const PageNavButton = styled(NavButton)<PageNavButtonProps>`
	margin-left: 25px;
	margin-right: 25px;
	width: 160px;
	text-align: center;
`;

const Header: React.FC = () => {
	return (
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
				<PageNavButton isActive>Articles</PageNavButton>
				<PageNavButton isActive={false}>About</PageNavButton>
				<PageNavButton isActive={false}>Experience</PageNavButton>
			</ButtonContainer>
		</HeaderWrapper>
	);
};

export default Header;
