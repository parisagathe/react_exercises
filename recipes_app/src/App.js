import React from "react";
import axios from "axios";

const App = () => {
  return (
    <div className="app-container">
      <h1>React Recipes App</h1>
      <input type="text" placeholder="Type the name of an ingredient" />
      <div className="meals-container"></div>
    </div>
  );
};

export default App;
