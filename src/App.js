import React, { useRef } from "react";
import { Quiz } from "./components/Quiz";

function App() {
  const scoreRef = useRef(0);

  return (
    <div className="wrapper">
      <header>
        <div className="nick_name">
          <b>Fantasy Quiz #156</b>
        </div>
      </header>
      <Quiz score={scoreRef} />
    </div>
  );
}

export default App;
