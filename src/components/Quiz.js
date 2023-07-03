import React from "react";
import { QuizData } from "../Data/QuizData";

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0)
   const [clickedOption, setClickedOption] = React.useState(0)

  const changeQuestion = () => {
    updateScore()
    if (changeQuestion < QuizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
    } else {

    }
  };

  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
        setScore(score + 1)
    }
  }

  return (
    <div className="variants">
      <div className="question">
        <span id="question-number">{currentQuestion + 1} </span>
        <span id="question-txt">{QuizData[currentQuestion].question}</span>
      </div>
      <div className="variant">
        {QuizData[currentQuestion].options.map((option, i) => {
          return (
          <button
          className={`option-btn ${
            clickedOption == i + 1 ? 'cheked' : null
          }`}
          key={i}
          onClick={() => setClickedOption(i + 1)}
          >
            {option}
          </button>
          )
        })}
      </div>
      <input
        type="button"
        value="Continue"
        id="continue-button"
        onClick={changeQuestion}
      />
    </div>
  );
};
