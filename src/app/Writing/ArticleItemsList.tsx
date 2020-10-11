import React from "react";
import styled from "styled-components";
import Article from "./Article";
import IArticle from "../../library/IArticle";

const GetArticles = (): JSX.Element[] => {
	const articles: IArticle[] = [
		{
			title: "Essense of Technical Leadership",
			subTitle: "Guide for students on how to get yoru first internship.",
			date: "December 2018",
			url:
				"https://medium.com/students-corner/strategies-for-landing-a-tech-internship-57f9370f533c",
			body:
				"Looking for an internship is fucking stressful. The task ahead of you is daunting. Convince a company to spend thousands of dollars to interview, onboard, train, and mentor you. I’ve found that most of my peers are eager to obtain these opportunities, but ...",
		},
		{
			title: "Essense of Technical Leadership",
			subTitle: "Guide for students on how to get yoru first internship.",
			date: "December 2018",
			url:
				"https://medium.com/students-corner/strategies-for-landing-a-tech-internship-57f9370f533c",
			body:
				"Looking for an internship is fucking stressful. The task ahead of you is daunting. Convince a company to spend thousands of dollars to interview, onboard, train, and mentor you. I’ve found that most of my peers are eager to obtain these opportunities, but ...",
		},
		{
			title: "Essense of Technical Leadership",
			subTitle: "Guide for students on how to get yoru first internship.",
			date: "December 2018",
			url:
				"https://medium.com/students-corner/strategies-for-landing-a-tech-internship-57f9370f533c",
			body:
				"Looking for an internship is fucking stressful. The task ahead of you is daunting. Convince a company to spend thousands of dollars to interview, onboard, train, and mentor you. I’ve found that most of my peers are eager to obtain these opportunities, but ...",
		},
		{
			title: "Essense of Technical Leadership",
			subTitle: "Guide for students on how to get yoru first internship.",
			date: "December 2018",
			url:
				"https://medium.com/students-corner/strategies-for-landing-a-tech-internship-57f9370f533c",
			body:
				"Looking for an internship is fucking stressful. The task ahead of you is daunting. Convince a company to spend thousands of dollars to interview, onboard, train, and mentor you. I’ve found that most of my peers are eager to obtain these opportunities, but ...",
		},
	];

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

const ArticleItemsListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 30%;
	padding-right: 30%;
	padding-bottom: 10%;
`;

const ArticleItemsList: React.FC = () => {
	return <ArticleItemsListWrapper>{GetArticles()}</ArticleItemsListWrapper>;
};

export default ArticleItemsList;
