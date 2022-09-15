import "./App.css";
import "./styles.css";
import ToDos from "./ToDos.js";
import React, { useState, useEffect, useRef } from "react";

function App() {
  const [colorMode, setColorMode] = useState("dark");
  const [bgSrc, setBgSrc] = useState("/images/bg-desktop-dark.jpg");
  const [colorModeIconSrc, setColorModeIconSrc] = useState(
    "/images/icon-sun.svg"
  );
  const [appBgClass, setAppBgClass] = useState("dark-mode-app-background");
  const isMounted = useRef(false);

  function toggleColorMode() {
    if (colorMode === "dark") {
      setColorMode("light");
    } else {
      setColorMode("dark");
    }
  }

  useEffect(() => {
    if (isMounted.current) {
      console.log(colorMode);
      if (colorMode === "light") {
        setBgSrc("/images/bg-desktop-light.jpg");
        setColorModeIconSrc("/images/icon-moon.svg");
        setAppBgClass("");
      } else {
        setBgSrc("/images/bg-desktop-dark.jpg");
        setColorModeIconSrc("/images/icon-sun.svg");
        setAppBgClass("dark-mode-app-background");
      }
    } else {
      isMounted.current = true;
    }
  }, [colorMode]);

  return (
    <div
      id="app-container"
      className={appBgClass}
    >
      <img
        src={bgSrc}
        id="background-top"
        alt="background-img"
      />
      <div id="background-bottom" />
      <div id="content-container">
        <header>
          <span id="todo-title">T O D O</span>
          <img
            src={colorModeIconSrc}
            id="color-mode-img"
            alt="color-mode-img"
            onClick={toggleColorMode}
          />
        </header>
        <main>
          <ToDos colorMode={colorMode}></ToDos>
        </main>
        <footer>
          <div>0 items left</div>
          <div>All</div>
          <div>Active</div>
          <div>Completed</div>
          <div>Clear Completed</div>
        </footer>
      </div>
    </div>
  );
}

export default App;
