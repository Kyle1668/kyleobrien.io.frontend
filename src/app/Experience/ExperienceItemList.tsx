import React from "react";
import styled from "styled-components";
import { ExperienceContextConsumer } from "./ExperienceContext";
import Experience from "./Experience";
import IExperience from "../../library/IExperience";

const renderExperiences = (experiences: IExperience[]): JSX.Element[] => {
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

const ExperienceItemList: React.FC = () => {
	return (
		<ExperienceContextConsumer>
			{(context) => (
				<ExperienceItemsListWrapper>
					{renderExperiences(context.experiences)}
				</ExperienceItemsListWrapper>
			)}
		</ExperienceContextConsumer>
	);
};

export default ExperienceItemList;

const ExperienceItemsListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 30%;
	padding-right: 30%;
	padding-bottom: 10%;
`;
