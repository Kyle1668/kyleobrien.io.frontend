import React from "react";
import styled from "styled-components";
import { ArticleContextConsumer } from "./ArticlesContext";
import Article from "./Article";
import IArticle from "../../library/IArticle";

const renderArticles = (articles: IArticle[]): JSX.Element[] => {
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
	return (
		<ArticleContextConsumer>
			{(context) => (
				<ArticleItemsListWrapper>
					{renderArticles(context.articles)}
				</ArticleItemsListWrapper>
			)}
		</ArticleContextConsumer>
	);
};

export default ArticleItemsList;

const ArticleItemsListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 30%;
	padding-right: 30%;
	padding-bottom: 10%;
	@media (max-width: 768px) {
		padding-left: 20%;
		padding-right: 15%;
	}
`;
