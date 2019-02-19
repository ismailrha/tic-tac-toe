import React from "react";

import Game from "./Game";
import "../index.css";

const App = props => {
  return (
    <>
      <h1 className="title">Tic-Tac-Toe</h1>
      <Game />
    </>
  );
};

export default App;
