import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Header from "../components/header/Header";

const Routers = () => {
  return (

    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>

    
  );
};

export default Routers;
