import React, { useState, useEffect } from "react";
import axios from "axios";
import Question from "../Question/Question";
import Timer from "../Timer";
import { useNavigate, useLocation } from "react-router-dom";
import "./Quiz.css";

const fetchQuestions = async (numQuestions) => {
	try {
		const response = await axios.get(
			`https://opentdb.com/api.php?amount=${numQuestions}&type=multiple`
		);
		return response.data.results;
	} catch (error) {
		console.error("Error fetching questions:", error);
		throw error;
	}
};

function Quiz() {
	const [questions, setQuestions] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [loading, setLoading] = useState(true);
	const [score, setScore] = useState(0);
	const navigate = useNavigate();
	const location = useLocation();
	const { numQuestions, timeLimit } = location.state;

	useEffect(() => {
		const getQuestions = async () => {
			try {
				const fetchedQuestions = await fetchQuestions(numQuestions);
				setQuestions(fetchedQuestions);
				setLoading(false);
			} catch (error) {
				setLoading(false);
				// Optionally show an error message to the user
			}
		};
		getQuestions();
	}, [numQuestions]);

	const handleAnswer = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			navigate("/results", { state: { score } });
		}
	};

	const handleTimeOut = () => {
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			navigate("/results", { state: { score } });
		}
	};

	if (loading) {
		return <div>Loading Questions...</div>;
	}

	return (
		<div className="quiz-container">
			<h1>Quiz App</h1>
			<Timer initialTime={timeLimit} onTimeOut={handleTimeOut} />
			{questions.length > 0 && (
				<Question
					question={questions[currentQuestion]}
					handleAnswer={handleAnswer}
				/>
			)}
		</div>
	);
}

export default Quiz;
