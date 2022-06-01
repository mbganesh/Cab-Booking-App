import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "./HomeComponent";

import JobVacancyComponent from "./JobVacancyComponent";
import OurVehiclesComponent from "./OurVehiclesComponent";
import ServicesComponent from "./ServicesComponent";
import SpecialPackagesComponent from "./SpecialPackagesComponent";


function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<HomeComponent />} />
          <Route exact path="/jobVacancy" element={<JobVacancyComponent />} />
          <Route exact path="/ourVehicles" element={<OurVehiclesComponent />} />
          <Route exact path="/services" element={<ServicesComponent />} />
          <Route exact path="/specialPackages" element={<SpecialPackagesComponent />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
