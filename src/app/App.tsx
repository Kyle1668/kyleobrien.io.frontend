import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";

const AppWrapper = styled.div`
	color: #343a40;
	background-color: #ffffff;
	font-family: "Roboto script=all rev=1";
	font-weight: 400;
`;

const App: React.FC = () => {
	return (
		<AppWrapper>
			<Header />
		</AppWrapper>
	);
};

export default App;
