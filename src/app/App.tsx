import React from "react";
import styled, { DefaultTheme, ThemeProvider } from "styled-components";
import Header from "./Header/Header";
import AboutItemsList from "./About/AboutItemsList";
import ExperiencePage from "./Experience/ExperiencePage";
import ArticlesPage from "./Writing/ArticlesPage";
import { AppContextProvider, startPage } from "./AppContex";

const App: React.FC = () => {
	const [currentPage, setCurrentPage] = React.useState(startPage);

	return (
		<ThemeProvider theme={lightTheme}>
			<AppContextProvider value={{ currentPage, setCurrentPage }}>
				<AppWrapper>
					<Header />
					{currentPage === "writing" && <ArticlesPage />}
					{currentPage === "about" && <AboutItemsList />}
					{currentPage === "experience" && <ExperiencePage />}
				</AppWrapper>
			</AppContextProvider>
		</ThemeProvider>
	);
};

export default App;

const lightTheme: DefaultTheme = {
	font: "Lato",
	colors: {
		darkGray: "#343a40",
		lightGray: "#c4c4c4",
		white: "#ffffff",
	},
};

const AppWrapper = styled.div`
  color: #343a40;
  background-color: #ffffff;
  font-family: "Roboto script=all rev=1", monospace;
  font-weight: 400;
`;
