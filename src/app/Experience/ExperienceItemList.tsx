import React from "react";
import { Guid } from "guid-typescript";
import { ExperienceContextConsumer } from "./ExperienceContext";
import Experience from "./Experience";
import IExperience from "../../library/IExperience";
import ItemsListWrapper from "../../shared/ItemsListWrapper";

const renderExperiences = (experiences: IExperience[]): JSX.Element[] => {
	return experiences.map((experience: IExperience) => {
		return (
			<Experience
				key={Guid.create().toString()}
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
				<ItemsListWrapper>{renderExperiences(context.experiences)}</ItemsListWrapper>
			)}
		</ExperienceContextConsumer>
	);
};

export default ExperienceItemList;
