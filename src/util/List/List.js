import React, { useState } from "react";
import "./List.css";

function List({ listData }) {
  const [data, setData] = useState(listData);

  const handleClick = (itemIdx) => {
    const changedData = data.map((item, idx) => {
      if (idx === itemIdx) {
        return {
          name: item.name,
          completed: item.completed === false ? true : false,
        };
      } else {
        return item;
      }
    });
    setData(changedData);
  };

  const displayList = () => {
    return data.map((item, idx) => {
      return (
        <div className="list-item" key={idx}>
          <p className={item.completed ? "checked" : ""}>{item.name}</p>
          <i
            className={item.completed ? "fas fa-check" : "fas fa-times"}
            onClick={() => handleClick(idx)}
          ></i>
        </div>
      );
    });
  };

  return <div className="list">{displayList()}</div>;
}

export default List;
