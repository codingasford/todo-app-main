import React, { useState } from "react";

function Checkbox() {
  const defaultImgSrc = "/images/default.png";
  const checkImgSrc = "/images/icon-check.svg";
  const [imgSrc, setImgSrc] = useState(defaultImgSrc);
  const [checkBackground, setCheckBackground] = useState("");

  function HandleClick() {
    // Toggle checkbox image on off
    imgSrc === defaultImgSrc ? CheckBoxOn() : CheckBoxOff();
  }

  function CheckBoxOn() {
    setImgSrc(checkImgSrc);
    setCheckBackground("check-background");
  }
  function CheckBoxOff() {
    setImgSrc(defaultImgSrc);
    setCheckBackground("");
  }

  return (
    <div>
      <div
        className={`check-box ${checkBackground}`}
        onClick={HandleClick}
        alt="checkbox"
      >
        <img
          src={imgSrc}
          id="check-icon"
        ></img>
      </div>
    </div>
  );
}

export default Checkbox;
