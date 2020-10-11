import { createContext, useContext } from "react";

export type PageContextType = {
	currentPage: "writing" | "about" | "experience";
	setCurrentPage: (pageName: "writing" | "about" | "experience") => void;
};

export const startPage: "writing" | "about" | "experience" = "writing";

export const PageContext = createContext<PageContextType>({
	currentPage: "writing",
	setCurrentPage: () => "",
});

export const usePageContext = () => useContext(PageContext);
