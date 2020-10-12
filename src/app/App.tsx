import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import ArticleItemsList from "./Writing/ArticleItemsList";
import AbouteItemsList from "./About/AboutItemsList";
import ExperienceItemList from "./Experience/ExperienceItemList";
import { PageContext, startPage } from "../pages/PageContext";

const App: React.FC = () => {
	const [currentPage, setCurrentPage] = React.useState(startPage);

	return (
		<PageContext.Provider value={{ currentPage, setCurrentPage }}>
			<AppWrapper>
				<Header />
				{currentPage === "writing" && <ArticleItemsList />}
				{currentPage === "about" && <AbouteItemsList />}
				{currentPage === "experience" && <ExperienceItemList />}
			</AppWrapper>
		</PageContext.Provider>
	);
};

export default App;

const AppWrapper = styled.div`
	color: #343a40;
	background-color: #ffffff;
	font-family: "Roboto script=all rev=1";
	font-weight: 400;
`;
