import React from "react";
import styles from "../Styles/Square.module.css";
import classNames from "classnames";
const Square = ({ onClick, value }) => {
  return (
    <button
      className={classNames(
        styles.square,
        value === "X" ? styles.squareX : styles.squareO
      )}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
