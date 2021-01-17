import React from "react";
import { Guid } from "guid-typescript";
import { ArticleContextConsumer } from "./ArticlesContext";
import Article from "./Article";
import IArticle from "../../library/IArticle";
import ItemsListWrapper from "../../shared/ItemsListWrapper";

const renderArticles = (articles: IArticle[]): JSX.Element[] => {
	return articles.map((article: IArticle) => {
		return (
			<Article
				key={Guid.create().toString()}
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
			{(context) => <ItemsListWrapper>{renderArticles(context.articles)}</ItemsListWrapper>}
		</ArticleContextConsumer>
	);
};

export default ArticleItemsList;
