import React from "react";

export const QuizResult = (props) => {
  return (
    <div className="score_block">
      <div className="show_score">
        Ты набрал: {props.score} балла из {props.totalScore}
      </div>
      <div>
        <button id="try_again_btn">
          <a href="/">Попробовать снова</a>
        </button>
      </div>
    </div>
  );
};
