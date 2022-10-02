import React, { useState, useEffect, useRef } from "react";

function Checkbox(props) {
  const defaultImgSrc = "/images/default.png";
  const checkImgSrc = "/images/icon-check.svg";
  const [imgSrc, setImgSrc] = useState(defaultImgSrc);
  const [checkBackground, setCheckBackground] = useState("");

  //determine default imgSrc
  useEffect(() => {
    if (props.isCheckedOnMount) {
      setImgSrc(checkImgSrc);
      setCheckBackground("check-background");
    } else {
      setImgSrc(defaultImgSrc);
      setCheckBackground("");
    }
  }, []);

  function HandleClick() {
    // Toggle checkbox image on off
    imgSrc === defaultImgSrc ? CheckBoxOn() : CheckBoxOff();
    // props.setHasClickedCheckbox();
  }

  function CheckBoxOn() {
    setImgSrc(checkImgSrc);
    setCheckBackground("check-background");
    props.setIsChecked(true);
  }
  function CheckBoxOff() {
    setImgSrc(defaultImgSrc);
    setCheckBackground("");
    props.setIsChecked(false);
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
