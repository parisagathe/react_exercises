import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import Error from "./components/Error";

const App = () => {
  const [data, setData] = useState([]);

  const getData = (search) => {
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

    if (search) {
      url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + search;
    }

    axios.get(url)
    .then((res) => {
      if (!res.data) {
        setData([]);
      } else {
        setData(res.data.meals);
      }
    });
  };

  useEffect(() => getData(), []);


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <h1>Recipes App - React</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" id="search" autoComplete="off" placeholder="Type the name of an ingredient" onChange={(e) => getData(e.target.value)} />
      </form>
      <ul>
          {
            data ? data
          .map((meal, index) => (
            <Card key={index} meal={meal} />
          )) : <Error /> }
        </ul>
    </div>
  );
};

export default App;