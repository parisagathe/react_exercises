import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=").then((res) => setData(res.data.meals));
  }, []);

  return (
    <div>
      <h1>Recipes App - React</h1>
      <ul>
          {data.map((meal, index) => (
            <Card key={index} meal={meal} />
          ))}
        </ul>
    </div>
  );
};

export default App;
