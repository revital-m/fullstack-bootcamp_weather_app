import React, { useState, useEffect } from "react";
// import React, { useState, useEffect } from "react";
// import { BrowserRouter, Route } from 'react-router-dom';
import axios from "axios";
// import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import Input from "./components/Input/Input";

const App = () => {
  const [userValue, setUserValue] = useState("");
  const [forecast, setForecast] = useState([]);
  const [location, setLocation] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    if (!userValue) {
      setForecast("");
      setLocation("");
      setError("");

    }
  }, [userValue])

  const handleInput = (e) => {
    setUserValue(e.target.value);
  }

  const handleData = async () => {
    try {
      const {data} = await axios.get(`/weather?address=${userValue}`);
      setForecast(data.forecast);
      setLocation(data.location);
    } catch (error) {
      setError(error.message);
      // console.log(error);
    }
  }

  return (
    <div className="container">
      <Input labelName="Enter a country:" handleInput={handleInput} userValue={userValue} handleClick={handleData} />
      <div className="info">
        <h1 className="info--location">{location}</h1>
        <h2 className="info--forecast">{forecast}</h2>
        <h2 className="info--error">{error}</h2>
      </div>
    </div>
  );
};

export default App;
