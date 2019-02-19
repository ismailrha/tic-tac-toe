import React, { Component } from "react";
import Board from "./Board";
import calculateWinner from "../calculateWinner";
import Styles from "./Game.module.css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      xIsNext: true,
      stepNumber: 0
    };
  }

  jumpTo(move) {
    this.setState({
      stepNumber: move,
      xIsNext: move % 2 === 0 ? true : false
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const squares = { ...history[history.length - 1].squares };
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{ squares: squares }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const moves = history.map((step, move) => {
      const turn = move ? "Go to move " + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{turn}</button>
        </li>
      );
    });
    const winner = calculateWinner(current.squares);
    let status = winner
      ? "winner is " + winner
      : "Next Player is : " + (this.state.xIsNext ? "X" : "0");
    return (
      <>
        <div className={Styles.game}>
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
          <div className={Styles.gameInfo}>
            <div className={Styles.status}>{status}</div>
            <ul>{moves}</ul>
          </div>
        </div>
      </>
    );
  }
}

export default Game;
