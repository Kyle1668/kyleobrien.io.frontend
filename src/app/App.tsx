import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import AbouteItemsList from "./About/AboutItemsList";
import ExperiencePage from "./Experience/ExperiencePage";
import ArticlesPage from "./Writing/ArticlesPage";
import { PageContext, startPage } from "../pages/PageContext";

const App: React.FC = () => {
	const [currentPage, setCurrentPage] = React.useState(startPage);

	return (
		<PageContext.Provider value={{ currentPage, setCurrentPage }}>
			<AppWrapper>
				<Header />
				{currentPage === "writing" && <ArticlesPage />}
				{currentPage === "about" && <AbouteItemsList />}
				{currentPage === "experience" && <ExperiencePage />}
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
