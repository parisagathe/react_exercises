import React from "react";
import Card from "./components/Card"
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="*" element={<Home />} />
    //   </Routes>
    // </BrowserRouter>
    <div>
      <h1>Recipes App - React</h1>
      <div className="cards-container">
        <Card />
      </div>
    </div>
  );
};

export default App;
