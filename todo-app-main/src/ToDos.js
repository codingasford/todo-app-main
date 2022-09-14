import React, { useState } from "react";
import ToDoBox from "./ToDoBox.js";

function ToDos() {
  const [dataInput, setInputData] = useState("");
  const [dataArr, setDataArr] = useState([]);
  const [state, setState] = useState();

  function getInputData(event) {
    setInputData(event.target.value);
  }

  function addToDoToList() {
    let updatedArr = dataArr;
    updatedArr.push(dataInput);
    setDataArr(updatedArr);
    console.log(dataArr);
  }

  return (
    <div>
      <ToDoBox
        isCreateBox={true}
        getInputData={getInputData}
        addToDoToList={addToDoToList}
        setState={setState}
      />
      {dataArr.map((inputData, index) => {
        return (
          <ToDoBox
            isCreateBox={false}
            key={index}
            data={inputData}
          ></ToDoBox>
        );
      })}
    </div>
  );
}

export default ToDos;
