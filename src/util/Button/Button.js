import React from "react";
import "./Button.css";

const Button = ({ categoryBtnClass, handleClick, btnText }) => {
  return (
    <div className="btn-container">
      <button
        className={`btn ${categoryBtnClass}`}
        onClick={handleClick}
        // name={name}
      >
        {/* <i className={`${this.props.icon} btn--icon`}></i> */}
        {btnText}
      </button>
    </div>
  );
};

export default Button;
