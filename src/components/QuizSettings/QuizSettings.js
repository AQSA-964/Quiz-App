import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./QuizSettings.css";

function QuizSettings() {
	const [numQuestions, setNumQuestions] = useState(5);
	const [timeLimit, setTimeLimit] = useState(30);
	const navigate = useNavigate();

	const handleStartQuiz = () => {
		navigate("/quiz", { state: { numQuestions, timeLimit } });
	};

	return (
		<div className="quiz-settings">
			<h1>Quiz App</h1>
			<div>
				<label>Number of Questions: </label>
				<input
					type="number"
					value={numQuestions}
					onChange={(e) => setNumQuestions(e.target.value)}
					min="1"
					max="20"
				/>
			</div>
			<div>
				<label>Countdown time(seconds): </label>
				<input
					type="number"
					value={timeLimit}
					onChange={(e) => setTimeLimit(e.target.value)}
					min="10"
					max="60"
				/>
			</div>
			<button onClick={handleStartQuiz}>Start Quiz</button>
		</div>
	);
}

export default QuizSettings;
