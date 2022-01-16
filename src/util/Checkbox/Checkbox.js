import React from "react";
import "./Checkbox.css";

function Checkbox({ labelName, handleInputChange, id, checked }) {
  return (
    <div className="Checkbox">
      <input
        className="checkbox--info"
        onChange={handleInputChange}
        type="checkbox"
        id={id}
        checked={checked}
      ></input>
      <label className="checkbox--label">{labelName}</label>
    </div>
  );
}

export default Checkbox;
