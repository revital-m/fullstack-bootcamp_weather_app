import React, { useState } from "react";
import "./Text.css";

function Text({ str, strMaxLength }) {
  let strToShow =
    str.length > strMaxLength ? `${str.slice(0, strMaxLength)}...` : str;
  let isLonger = str.length > strMaxLength ? true : false;

  const [txtToShow, setTxtToShow] = useState(strToShow);
  const [btnText, setBtnText] = useState("read more");

  const handleClick = () => {
    if (btnText === "read more") {
      setTxtToShow(str);
      setBtnText("show less");
    } else {
      setTxtToShow(`${str.substring(0, strMaxLength + 1)}...`);
      setBtnText("read more");
    }
  };

  return (
    <div className="text-container">
      {txtToShow}
      {isLonger && (
        <button className="show-btn" onClick={handleClick}>
          {btnText}
        </button>
      )}
    </div>
  );
}

export default Text;
