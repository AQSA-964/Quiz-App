import React from "react";
import he from "he"; // Import the 'he' library to decode HTML entities
import "./Question.css";

function Question({ question, handleAnswer }) {
	const shuffleAnswers = (answers) => {
		for (let i = answers.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[answers[i], answers[j]] = [answers[j], answers[i]];
		}
		return answers;
	};

	const answers = shuffleAnswers([
		...question.incorrect_answers,
		question.correct_answer,
	]);

	return (
		<div className="question-container">
			{/* Decode the question text using he.decode() */}
			<h2 className="question-text">{he.decode(question.question)}</h2>
			<div className="answer-options">
				{answers.map((answer, index) => (
					// Decode the answers as well using he.decode()
					<button
						key={index}
						onClick={() => handleAnswer(answer === question.correct_answer)}
					>
						{he.decode(answer)}
					</button>
				))}
			</div>
		</div>
	);
}

export default Question;
