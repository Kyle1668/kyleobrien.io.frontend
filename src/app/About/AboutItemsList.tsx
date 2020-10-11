import React from "react";
import styled from "styled-components";

const AboutPageHeader = styled.h1`
	font-size: 32px;
	text-align: center;
	font-family: Lato;
	font-weight: light;
`;

const AboutParagraph = styled.p`
	font-family: Lato;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 40px;
`;

const GetParagraphs = (): JSX.Element[] => {
	const paragraphs: string[] = [
		"Hello! My name is Kyle, and I’m a Junior at University of California, Santa Cruz. As a student of Computer Science, I’m fascinated by technology’s impact on daily life and innovation’s ability to spark societal change. Software Developers are the avant-garde of this movement, and I wish to be amongst their ranks.",
		"Through my various internships and side projects, I've experienced working across the entire stack. I'm primarily interested in bridging the gap between software engineering and data science. I find the challenge of developing the supporting infrastructure for machine learning models particularly exciting.",
		"Outside of academics, I'm an avid endurance athlete, foodie, and amateur historian! I love spending time in nature with friends and conversations over beer and coffee.",
		"I am currently on the search for summer internship opportunities in the fields of Software Engineering and Data Science while on summer break between June and mid-September 2019. If you're a part of an organization looking into summer interns, I would like to connect with you.",
		"I can be best reached via a linkedin message or at kyledevinobrien1@gmail.com.",
	];

	return paragraphs.map((paragraph: string) => <AboutParagraph>{paragraph}</AboutParagraph>);
};

const AboutItemsListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 30%;
	padding-right: 30%;
	padding-bottom: 10%;
`;

const AboutItemsList: React.FC = () => {
	return (
		<AboutItemsListWrapper>
			<AboutPageHeader>Kyle O&apos;Brien</AboutPageHeader>
			{GetParagraphs()}
		</AboutItemsListWrapper>
	);
};

export default AboutItemsList;
