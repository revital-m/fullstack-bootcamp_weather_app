// import React, { useState, useRef } from "react";
// // import React, { useState, useEffect } from "react";
// // import { BrowserRouter, Route } from 'react-router-dom';
// // import axios from "axios";
// // import { v4 as uuidv4 } from 'uuid';
// import "./App.css";
// import Button from "./components/Button/Button";
// import Input from "./components/Input/Input";

// function App() {
//   const [show, setShow] = useState(false);
//   const [value, setValue] = useState("");
//   const btnText = useRef('Edit');

//   const handleClick = () => {
//     if (btnText.current === "Edit") {
//       btnText.current = "Save";
//       setShow(true);
//     }
//     else {
//       btnText.current = "Edit";
//       setShow(false);
//     }

//   };

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   }

//   return (
//     <div className="container">
//       {!show && <Button categoryBtnClass="" handleClick={handleClick} btnText={btnText.current}/>}
//       {show && (
//         <div className="show-container">
//           <Input labelName="" handleInput={handleChange} userValue={value}/>
//           <Button categoryBtnClass="btn--category" handleClick={handleClick} btnText={btnText.current}/>
//         </div>
//       )}

//     </div>
//   );
// }

// export default App;

import React, { useRef } from "react";
import "./App.css";

const App = () => {
  const myVideo = useRef();

  const handlePlay = () => {
    myVideo.current.play();
  };

  const handlePause = () => {
    myVideo.current.pause();
  };

  return (
    <div className="container">
      <video ref={myVideo} width="750" height="500" controls >
      <source src="/video/pexels-ekaterina-bolovtsova-5703372.mp4" type="video/mp4"/>
      {/* <source src="/video/pexels-kelly-lacy-9722139.mp4" type="video/mp4"/> */}
     </video>
      <div className="btn-container">
        <button className="btn btn-play" onClick={handlePlay}>
        </button>
        <button className="btn btn-pause" onClick={handlePause}>
        </button>
      </div>
    </div>
  );
};

export default App;
