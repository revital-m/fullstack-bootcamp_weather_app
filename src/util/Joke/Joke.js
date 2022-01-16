import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Joke.css";
import Spinner from "../Spinner/Spinner";

const Joke = () => {
  const [randomJoke, setRandomJoke] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let source = axios.CancelToken.source();
    const getData = async () => {
      try {
        const res = await axios.get("https://api.chucknorris.io/jokes/random", {
          cancelToken: source.token,
        });
        setRandomJoke(res.data.value);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    setIsLoading(true);
    getData();

    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, []);

  return (
    <div className="joke-container">
      {isLoading && <Spinner />}
      {!isLoading && <h1>{randomJoke}</h1>}
    </div>
  );
};

export default Joke;
