import { createContext } from "react";
import IExperience from "../../library/IExperience";
import { mockExperiences } from "../../tests/mockData";

export const getExperiences = (): IExperience[] => {
	return mockExperiences;
};

export type ExperiencecontextType = {
	experiences: IExperience[];
};

const defaultContextValue: ExperiencecontextType = { experiences: [] };

const context = createContext<ExperiencecontextType>(defaultContextValue);

export const ExperienceContextProvider = context.Provider;

export const ExperienceContextConsumer = context.Consumer;
