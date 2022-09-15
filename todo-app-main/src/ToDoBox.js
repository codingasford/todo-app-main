import React, { useState, useEffect, useRef } from "react";
import Checkbox from "./Checkbox.js";

function ToDoBox(props) {
  const [isChecked, setIsChecked] = useState(props.isCheckedOnMount);
  const [textStylingClass, setTextStylingClass] = useState("");
  const [boxStyling, setBoxStyling] = useState("dark-mode-box-styling");
  const isMounted = useRef(false);

  useEffect(() => {
    console.log("this checkbox is checked?", isChecked);

    if (isChecked) {
      //add checked text styling
      setTextStylingClass("checked-text-styling");
    } else {
      //remove checked text styling
      setTextStylingClass("");
    }
  }, [isChecked]);

  useEffect(() => {
    if (props.colorMode === "light") {
      setBoxStyling("light-mode-box-styling");
    } else {
      setBoxStyling("dark-mode-box-styling");
    }
  }, [props.colorMode]);

  function handleClick() {
    props.addToDoToList();
    props.setState({});
  }

  if (props.isCreateBox) {
    //decide if todo should be checked after it is added, according to if checked in create box
    if (isChecked) {
      props.setIsCheckedOnMount(true);
    } else {
      props.setIsCheckedOnMount(false);
    }

    return (
      <div className={`todo-box create-box ${boxStyling}`}>
        <Checkbox
          setIsChecked={setIsChecked}
          isChecked={isChecked}
        />
        <input
          className={`todo-input ${textStylingClass}`}
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
      <div className={`todo-box ${boxStyling}`}>
        <Checkbox
          setIsChecked={setIsChecked}
          isCheckedOnMount={props.isCheckedOnMount}
        />
        <div className={textStylingClass}>{props.data}</div>
      </div>
    );
  }
}

export default ToDoBox;
