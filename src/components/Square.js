import React from "react";
import styles from "./Square.module.css";

const Square = ({ onClick, value }) => {
  const square =
    value === "X" ? (
      <button
        className={[styles.square, styles.squareX].join(" ")}
        onClick={onClick}
      >
        {value}
      </button>
    ) : (
      <button
        className={[styles.square, styles.squareO].join(" ")}
        onClick={onClick}
      >
        {value}
      </button>
    );

  return square;
};

export default Square;
