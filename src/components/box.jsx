import React from "react";

const Box = (props) => {
  return (
    <button
      disabled={props.currentBox.disabler}
      onClick={() => props.onBtnClick(props.currentBox)}
      className="btn-outline-dark btn btn-lg"
    >
      {props.currentBox.value}
    </button>
  );
};

export default Box;
