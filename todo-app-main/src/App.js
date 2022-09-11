import "./App.css";
import "./styles.css";
import ToDoBox from "./ToDoBox";

function App() {
  return (
    <div>
      <img
        src="/images/bg-desktop-dark.jpg"
        id="background-top"
        alt="background-img"
      />
      <div id="background-bottom" />
      <div id="content-container">
        <header>
          <span id="todo-title">T O D O</span>
          <img
            src="/images/icon-sun.svg"
            id="color-mode-img"
            alt="color-mode-img"
          />
        </header>
        <main>
          <ToDoBox isCreateBox={true} />
          <ToDoBox isCreateBox={false} />
          <ToDoBox isCreateBox={false} />
          <ToDoBox isCreateBox={false} />
          <ToDoBox isCreateBox={false} />
          <ToDoBox isCreateBox={false} />
        </main>
      </div>
    </div>
  );
}

export default App;
