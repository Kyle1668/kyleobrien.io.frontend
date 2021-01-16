import { createContext } from "react";
import IArticle from "../../library/IArticle";
import { mockArticles } from "../../tests/mockData";

const defaultValues: ArticleContextData = {
	articles: []
};

const context = createContext<ArticleContextData>(defaultValues);

export const getArticles = (): IArticle[] => {
	return mockArticles;
};

export type ArticleContextData = {
	articles: IArticle[];
};

export const ArticleContextProvider = context.Provider;

export const ArticleContextConsumer = context.Consumer;
