import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import ArticleItemsList from "./Writing/ArticleItemsList";
import AbouteItemsList from "./About/AboutItemsList";
import { PageContext, startPage } from "../pages/PageContext";

const AppWrapper = styled.div`
	color: #343a40;
	background-color: #ffffff;
	font-family: "Roboto script=all rev=1";
	font-weight: 400;
`;

const App: React.FC = () => {
	const [currentPage, setCurrentPage] = React.useState(startPage);

	return (
		<PageContext.Provider value={{ currentPage, setCurrentPage }}>
			<AppWrapper>
				<Header />
				{currentPage === "writing" && <ArticleItemsList />}
				{currentPage === "about" && <AbouteItemsList />}
				{currentPage === "experience" && <ArticleItemsList />}
			</AppWrapper>
		</PageContext.Provider>
	);
};

export default App;
