import React, { useRef } from "react";
import { Quiz } from "./components/Quiz";

function App() {
  const scoreRef = useRef(0);

  return (
    <div className="wrapper">
      <header>
        <div>
          <img src="./image/score.png" alt="Scores" />
        </div>
        <div className="nick_name">
          <b>Fantasy Quiz #156</b>
        </div>
        <div>
          <img src="./image/outt.png" alt="Close" />
        </div>
      </header>
      <Quiz score={scoreRef} />
    </div>
  );
}

export default App;
