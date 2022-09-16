import React, { useState, useEffect } from "react";
import ToDoBox from "./ToDoBox.js";

function ToDos(props) {
  const [dataInput, setInputData] = useState("");
  const [dataArr, setDataArr] = useState([]);
  const [state, setState] = useState();
  const [isCheckedOnMount, setIsCheckedOnMount] = useState(false);

  function getInputData(event) {
    setInputData(event.target.value);
  }

  function addToDoToList() {
    let updatedArr = dataArr;
    updatedArr.push(dataInput);
    setDataArr(updatedArr);
  }

  return (
    <div>
      <ToDoBox
        isCreateBox={true}
        getInputData={getInputData}
        addToDoToList={addToDoToList}
        setState={setState}
        colorMode={props.colorMode}
        setIsCheckedOnMount={setIsCheckedOnMount}
        boxStyling={props.boxStyling}
      />
      <div id="todos-container">
        {dataArr.map((inputData, index) => {
          return (
            <ToDoBox
              isCreateBox={false}
              key={index}
              index={index}
              data={inputData}
              dataArr={dataArr}
              setDataArr={setDataArr}
              setState={setState}
              colorMode={props.colorMode}
              isCheckedOnMount={isCheckedOnMount}
              boxStyling={props.boxStyling}
            ></ToDoBox>
          );
        })}
      </div>
    </div>
  );
}

export default ToDos;
