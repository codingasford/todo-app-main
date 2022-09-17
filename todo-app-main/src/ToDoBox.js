import React, { useState, useEffect, useRef } from "react";
import Checkbox from "./Checkbox.js";

function ToDoBox(props) {
  const [isChecked, setIsChecked] = useState(props.isCheckedOnMount);
  const [textStylingClass, setTextStylingClass] = useState("");
  const prevItemsLeftCountRef = useRef();

  //got error that todos and todobox cannot update component while
  //rendering another component pointing to this code (props.setIsCheckedOnMount)
  //this blank useEffect with no second param makes sure it calls after a render to avoid this

  useEffect(() => {
    //AFTER A RENDER

    if (props.isCreateBox) {
      if (isChecked) {
        props.setIsCheckedOnMount(true);
      } else {
        props.setIsCheckedOnMount(false);
      }
    }
  });

  useEffect(() => {
    prevItemsLeftCountRef.current = props.itemsLeftCount;
  }, [props.itemsLeftCount]);

  useEffect(() => {
    //RUNS ON MOUNT
    //only apply this logic to todobox and not createbox
    if (!props.isCreateBox) {
      console.log("mount");
      props.setItemsLeftCount(prevItemsLeftCountRef.current + 1);
    }

    //return function will run on unMount

    return function removeToDoFromItemsLeft() {
      //this needs to onyl run after setitemsleftcount state is for sure done updating
      console.log("unmount");
      props.setItemsLeftCount(prevItemsLeftCountRef.current - 1);
    };
  }, []);

  useEffect(() => {
    if (isChecked) {
      //add checked text styling
      setTextStylingClass("checked-text-styling");
    } else {
      //remove checked text styling
      setTextStylingClass("");
    }
  }, [isChecked]);

  function handleKeyPressed(event) {
    if (event.key == "Enter") {
      handleClickCreateButton();
    }
  }

  function handleClickCreateButton() {
    props.addToDoToList();
    props.setState({});
  }

  function handleClickDeleteButton() {
    //if splice from dataArr that renders a component todobox for each piece of data
    //if remove data from dataArr, component removed...
    let updatedArr = props.dataArr;
    updatedArr.splice(props.index, 1);
    props.setDataArr(updatedArr);

    //then need to rerender todos... I have "decoy state" to help with that
    props.setState({});
  }

  if (props.isCreateBox) {
    return (
      <div className={`todo-box create-box ${props.boxStyling}`}>
        <Checkbox
          setIsChecked={setIsChecked}
          isChecked={isChecked}
        />
        <input
          className={`todo-input ${textStylingClass}`}
          placeholder="Create a new todo..."
          onChange={props.getInputData}
          tabIndex={-1} //-1 index makes it not tabable/interactive
          onKeyDown={handleKeyPressed}
        />
        <span
          id="create-icon"
          onClick={handleClickCreateButton}
        >
          +
        </span>
      </div>
    );
  } else {
    return (
      <div className={`todo-box ${props.boxStyling}`}>
        <Checkbox
          setIsChecked={setIsChecked}
          isCheckedOnMount={props.isCheckedOnMount}
        />
        <div className={`todo-box-text ${textStylingClass}`}>{props.data}</div>
        <img
          className="cross-icon"
          src="/images/icon-cross.svg"
          onClick={handleClickDeleteButton}
        ></img>
      </div>
    );
  }
}

export default ToDoBox;
