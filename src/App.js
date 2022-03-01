import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./Components/AboutPage";
import CityMeterTariffPage from "./Components/CityMeterTariffPage";
import HomePage from "./Components/HomePage";
import ServicePage from "./Components/ServicePage";
import MyMap from "./Components/MyMap";


function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/service" element={<ServicePage/>} />
          <Route exact path="/about" element={<AboutPage/>} />
          <Route exact path="/citymeter-tariff" element={<CityMeterTariffPage/>} />

          <Route exact path="/mymap" element={<MyMap/>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
