import React, { useState, useEffect } from "react";
import ToDoBox from "./ToDoBox.js";
import { nanoid } from "nanoid";

function ToDos(props) {
  const [dataInput, setInputData] = useState("");
  const [dataArr, setDataArr] = useState([]);
  const [isCheckedOnMount, setIsCheckedOnMount] = useState(false);
  const [itemsLeftCount, setItemsLeftCount] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [completedToDosArr, setCompletedToDosArr] = useState([]);

  function getInputData(event) {
    setInputData(event.target.value);
  }

  useEffect(() => {
    //Todos updated, update item count in parent
    setItemsLeftCount(dataArr.length);
  }, [dataArr, setItemsLeftCount]);

  function addToDo() {
    setDataArr((data) =>
      data.concat({
        id: nanoid(),
        todo: dataInput,
      })
    );
  }

  function removeToDo(id) {
    setDataArr((data) => data.filter((todo) => todo.id !== id));
  }

  function onClickFilter(event) {
    const filterBtns = document.querySelectorAll(".filter");

    filterBtns.forEach((filterBtn) => filterBtn.classList.remove("selected"));

    //give element selected class
    event.target.classList.toggle("selected");
  }

  function onClearCompleted() {
    //loop through data arr
    //delete checked todos from arr
  }

  return (
    <div>
      <ToDoBox
        isCreateBox={true}
        getInputData={getInputData}
        addToDo={addToDo}
        colorMode={props.colorMode}
        setIsCheckedOnMount={setIsCheckedOnMount}
        boxStyling={props.boxStyling}
      />
      <div id="todos-container">
        {/* For filter can use map and filter together to filter selected */}
        {dataArr.map((data) => (
          <ToDoBox
            isCreateBox={false}
            key={data.id}
            data={data}
            dataArr={dataArr}
            setDataArr={setDataArr}
            removeToDo={removeToDo}
            colorMode={props.colorMode}
            isCheckedOnMount={isCheckedOnMount}
            boxStyling={props.boxStyling}
            itemsLeftCount={itemsLeftCount}
            setItemsLeftCount={setItemsLeftCount}
            completedToDosArr={completedToDosArr}
            setCompletedToDosArr={setCompletedToDosArr}
          ></ToDoBox>
        ))}
      </div>
      <footer
        id="footer"
        className={props.boxStyling}
      >
        <div className="footer-item">{itemsLeftCount} items left</div>
        {/* <div
          onClick={(e) => onClickFilter(e)}
          className="footer-item filter interactable"
        >
          All
        </div>
        <div
          className="footer-item filter interactable"
          onClick={(e) => onClickFilter(e)}
        >
          Active
        </div>
        <div
          className="footer-item filter interactable"
          onClick={(e) => onClickFilter(e)}
        >
          Completed
        </div>
        <div
          className="footer-item interactable"
          onClick={onClearCompleted}
        >
          Clear Completed
        </div> */}
      </footer>
    </div>
  );
}

export default ToDos;
