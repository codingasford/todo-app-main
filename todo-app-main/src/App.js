import "./App.css";
import "./styles.css";
import ToDos from "./ToDos.js";

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
          <ToDos></ToDos>
        </main>
      </div>
    </div>
  );
}

export default App;
