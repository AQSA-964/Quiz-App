import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizSettings from "./components/QuizSettings/QuizSettings";
import Quiz from "./components/Quiz/Quiz";
import Results from "./components/Results/Results";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<QuizSettings />} />
					<Route path="/quiz" element={<Quiz />} />
					<Route path="/results" element={<Results />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
