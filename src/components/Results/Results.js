import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Results.css";

function Results() {
	const navigate = useNavigate();
	const location = useLocation();
	const { score } = location.state;

	return (
		<div className="results-container">
			<h1>Quiz Completed!</h1>
			<p>Your Score: {score}</p>
			<button onClick={() => navigate("/")}>Go Back to home</button>
		</div>
	);
}

export default Results;
