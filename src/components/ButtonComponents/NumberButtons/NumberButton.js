import React from "react";

const NumberButton = props => {
  return (
    <button className="button">
      {props.number}
    </button>
  );
};

export default NumberButton;