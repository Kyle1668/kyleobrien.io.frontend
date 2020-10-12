import React from "react";
import styled from "styled-components";
import Article from "./Article";
import IArticle from "../../library/IArticle";
import { mockArticles } from "../../tests/mockData";

const GetArticles = (): JSX.Element[] => {
	const articles = mockArticles;

	return articles.map((article: IArticle) => {
		return (
			<Article
				title={article.title}
				subTitle={article.subTitle}
				date={article.date}
				url={article.url}
				body={article.body}
			/>
		);
	});
};

const ArticleItemsList: React.FC = () => {
	return <ArticleItemsListWrapper>{GetArticles()}</ArticleItemsListWrapper>;
};

export default ArticleItemsList;

const ArticleItemsListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 30%;
	padding-right: 30%;
	padding-bottom: 10%;
`;
