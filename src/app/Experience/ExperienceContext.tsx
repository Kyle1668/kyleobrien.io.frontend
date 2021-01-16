import { createContext } from "react";
import IExperience from "../../library/IExperience";
import { mockExperiences } from "../../tests/mockData";

export const getExperiences = (): IExperience[] => {
	return mockExperiences;
};

export type ExperienceContextType = {
	experiences: IExperience[];
};

const defaultContextValue: ExperienceContextType = { experiences: [] };

const context = createContext<ExperienceContextType>(defaultContextValue);

export const ExperienceContextProvider = context.Provider;

export const ExperienceContextConsumer = context.Consumer;
