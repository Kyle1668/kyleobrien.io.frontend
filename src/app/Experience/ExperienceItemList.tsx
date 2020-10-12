import React from "react";
import styled from "styled-components";
import Experience from "./Experience";
import IExperience from "../../library/IExperience";
import { mockExperiences } from "../../tests/mockData";

const GetExperiences = (): JSX.Element[] => {
	const experiences = mockExperiences;
	return experiences.map((experience: IExperience) => {
		return (
			<Experience
				company={experience.company}
				title={experience.title}
				startDate={experience.startDate}
				endDate={experience.endDate}
				summarySections={experience.summarySections}
				tags={experience.tags}
			/>
		);
	});
};

const ExperienceItemsListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 30%;
	padding-right: 30%;
	padding-bottom: 10%;
`;

const ExperienceItemList: React.FC = () => {
	return <ExperienceItemsListWrapper>{GetExperiences()}</ExperienceItemsListWrapper>;
};

export default ExperienceItemList;
