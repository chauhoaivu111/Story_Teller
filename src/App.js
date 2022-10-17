import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "./config/Routers";

const App = () => {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
};

export default App;
