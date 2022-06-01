import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Apppage from "./App";



function Root() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Apppage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Root;
