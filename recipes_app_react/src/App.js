import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=tomato").then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <h1>Recipes App - React</h1>
      <div className="cards-container">
        <Card />
      </div>
    </div>
  );
};

export default App;
