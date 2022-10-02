import React, { useState, useEffect, useRef } from "react";
import Checkbox from "./Checkbox.js";
import { nanoid } from "nanoid";

function ToDoBox(props) {
  const [isChecked, setIsChecked] = useState(props.isCheckedOnMount);
  const [textStylingClass, setTextStylingClass] = useState("");
  const [toDoInfo, setToDoInfo] = useState({});
  const initialRender = useRef(true);
  const hasClickedCheckbox = useRef(false);
  //got error that todos and todobox cannot update component while
  //rendering another component pointing to this code (props.setIsCheckedOnMount)
  //this blank useEffect with no second param makes sure it calls after a render to avoid this

  function setHasClickedCheckbox() {
    hasClickedCheckbox.current = true;
  }

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
    //MOUNT

    if (!props.isCreateBox) {
      //on mount we can store data for this todo since on mount itll be the last index of dataArr..

      setToDoInfo({
        id: props.dataArr[props.dataArr.length - 1].id,
        value: props.dataArr[props.dataArr.length - 1].todo,
      });

      //increment items left count
      props.setItemsLeftCount((count) => count + 1);

      return function removeToDoFromItemsLeft() {
        // have to check if not create box here too or else will double decrement
        props.setItemsLeftCount((count) => count - 1);
      };
    }
  }, []);

  useEffect(() => {
    // ALL callbacks (like useEffect) run when component mounts no matter dependency array
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      if (!props.isCreateBox) {
        //we can avoid this by checking if state is equal to the initial value (i set it as string "init")
        // if (toDoInfo !== null) console.log(toDoInfo);

        //check if todo was set to completed on creation, and add to compeletedToDosArr
        if (isChecked) {
          props.setCompletedToDosArr((completedToDos) =>
            completedToDos.concat({ id: toDoInfo.id, todo: toDoInfo.value })
          );
        }
      }
    }
  }, [toDoInfo]);

  useEffect(() => {
    //its ok that it calls a bunch of times for each render, it makes sense cuz each box has this component
    //so yeah it will call a bunch of times but this is just for me to see the contents of ARR
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      if (!props.isCreateBox) {
        console.log(props.completedToDosArr);
      }
    }
  }, [props.completedToDosArr]);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      if (isChecked) {
        //add checked class
        setTextStylingClass("checked");
        //add item to c ompletedTodosArr
        // if (!props.isCreateBox) {
        //   props.setCompletedToDosArr((completedToDos) =>
        //     completedToDos.concat({ id: toDoInfo.id, todo: toDoInfo.value })
        //   );
        // }
      } else {
        //remove checked class
        setTextStylingClass("");
        //remove item from completedTodosArr
        // if (hasClickedCheckbox.current) {
        //   if (!props.isCreateBox) {
        //     props.setCompletedToDosArr((completedToDos) => {
        //       completedToDos.filter(
        //         (completedToDo) => completedToDo.id !== toDoInfo.id
        //       );
        //     });
        //   }
        // }
      }
    }
  }, [isChecked]);

  function handleKeyPressed(event) {
    if (event.key == "Enter") {
      props.addTodo();
    }
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
          onClick={props.addToDo}
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
          setHasClickedCheckbox={setHasClickedCheckbox}
        />
        <div className={`todo-box-text ${textStylingClass}`}>
          {props.data.todo}
        </div>
        <img
          className="cross-icon"
          src="/images/icon-cross.svg"
          onClick={() => props.removeToDo(props.data.id)}
        ></img>
      </div>
    );
  }
}

export default ToDoBox;
