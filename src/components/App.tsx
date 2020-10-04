import React from "react";
import Header from "./Header";
import SocialIconBar from "./SocialIconBar";
import "../stylesheets/App.scss";

function App() {
	return (
		<div className="App">
			<SocialIconBar />
			<Header />
		</div>
	);
}

export default App;
