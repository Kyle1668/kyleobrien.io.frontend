import React, { useContext } from "react";
import { ArticleContextProvider, getArticles } from "./ArticlesContext";
import ArticleItemsList from "./ArticleItemsList";

const ArticlesPage: React.FC = () => {
	return (
		<ArticleContextProvider value={{ articles: getArticles() }}>
			<ArticleItemsList />
		</ArticleContextProvider>
	);
};

export default ArticlesPage;
