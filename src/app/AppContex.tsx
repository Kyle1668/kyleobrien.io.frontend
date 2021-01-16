import { createContext } from "react";

const context = createContext<PageContextType>({
	currentPage: "writing",
	setCurrentPage: () => ""
});

export type PageContextType = {
	currentPage: "writing" | "about" | "experience";
	setCurrentPage: (pageName: "writing" | "about" | "experience") => void;
};

export const startPage: "writing" | "about" | "experience" = "writing";

export const AppContextProvider = context.Provider;

export const AppContextConsumer = context.Consumer;
