import React from "react";

function ToDoBox(props) {
  return props.isCreateBox ? (
    <div
      className="todo-box"
      id="create-box"
    >
      CreateBox
    </div>
  ) : (
    <div className="todo-box">ToDo</div>
  );
  //   return <div>ToDoBox</div>;
}

export default ToDoBox;
