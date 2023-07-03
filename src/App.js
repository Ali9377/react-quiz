import React from "react";
import { Quiz } from "./components/Quiz";

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="scores">
          <img src="./image/scores.png" />
        </div>
        <div className="nick_name">
          <b>Fantasy Quiz #156</b>
        </div>
        <div className="close_button">
          <img src="./image/out.png" />
        </div>
      </header>
      <section className="progress">
        <div className="indication">
          <img src="./image/progress.png" />
        </div>
      </section>
      <Quiz />
    </div>
  );
}

export default App;
