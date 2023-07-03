import React from "react";
import { QuizData } from "../Data/QuizData";
import { QuizResult } from "./QuizResult";

export const Quiz = ({ score }) => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [clickedOption, setClickedOption] = React.useState(0);
  const [showResult, setShowResult] = React.useState(false);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
      score.current = score.current + 1;
    }
  };

  return (
    <div className="variants">
      {showResult ? (
        <QuizResult score={score.current} totalScore={QuizData.length} />
      ) : (
        <>
          <div className="question">
            <span id="question-number">{currentQuestion + 1} </span>
            <span id="question-txt">{QuizData[currentQuestion].question}</span>
          </div>
          <div className="variant">
            {QuizData[currentQuestion].options.map((option, i) => {
              return (
                <button
                  className={`option-btn ${
                    clickedOption === i + 1 ? "checked" : null
                  }`}
                  key={i}
                  onClick={() => setClickedOption(i + 1)}
                >
                  {option}
                </button>
              );
            })}
          </div>
          <input
            type="button"
            value="Continue"
            id="continue-button"
            onClick={changeQuestion}
          />
        </>
      )}
    </div>
  );
};
