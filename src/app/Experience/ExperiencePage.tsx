import React from "react";
import { ExperienceContextProvider, getExperiences } from "./ExperienceContext";
import ExperienceItemList from "./ExperienceItemList";

const ExperiencePage: React.FC = () => {
	return (
		<ExperienceContextProvider value={{ experiences: getExperiences() }}>
			<ExperienceItemList />
		</ExperienceContextProvider>
	);
};

export default ExperiencePage;
