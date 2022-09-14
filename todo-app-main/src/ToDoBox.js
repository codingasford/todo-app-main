import React, { useState } from "react";
import Checkbox from "./Checkbox.js";

function ToDoBox(props) {
  function handleClick() {
    props.addToDoToList();
    props.setState({});
  }

  if (props.isCreateBox) {
    return (
      <div className="todo-box create-box">
        {/* <span className="check-box"></span> */}
        <Checkbox />
        <input
          className="todo-input"
          placeholder="Create a new todo..."
          onChange={props.getInputData}
        />
        <span
          id="create-icon"
          onClick={handleClick}
        >
          +
        </span>
      </div>
    );
  } else {
    return (
      <div className="todo-box">
        <Checkbox />
        <div>{props.data}</div>
      </div>
    );
  }
}

export default ToDoBox;
