import React, { useState, useEffect } from "react";

function Timer({ initialTime, onTimeOut }) {
	const [timeLeft, setTimeLeft] = useState(initialTime);

	useEffect(() => {
		if (timeLeft === 0) {
			onTimeOut(); // When the timer reaches zero, call the onTimeOut function
			return;
		}

		const intervalId = setInterval(() => {
			setTimeLeft((prevTime) => prevTime - 1);
		}, 1000); // Update the timer every second

		return () => clearInterval(intervalId); // Clear the interval when component unmounts
	}, [timeLeft, onTimeOut]);

	return <div className="timer">Time Left: {timeLeft} seconds</div>;
}

export default Timer;
