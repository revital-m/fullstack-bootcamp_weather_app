import React, { useState, useEffect } from "react";
import "./FilteredList.css";

const FilteredList = ({ data, userValue }) => {
  const [dataList, setDataList] = useState(data);
  const [searchValue, setSearchValue] = useState([userValue]);

  if (userValue !== searchValue) {
    setSearchValue(userValue);
  }

  useEffect(() => {
    const filteredList = filterData(data, userValue);
    setDataList(filteredList);
  }, [searchValue]);

  const filterData = (arrOfData, userInput) => {
    return arrOfData.filter((item) => {
      return item.title.toLowerCase().includes(userInput.toLowerCase());
    });
  };

  const displayList = () => {
    return dataList.map((item) => {
      return (
        <li key={item.id} className="list--item">
          <a className="list--link" href={item.url} target="_blank">{item.title}</a>
        </li>
      );
    });
  };

  return <ul>{displayList()}</ul>;
};

export default FilteredList;
