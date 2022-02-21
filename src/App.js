import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ServicePage from "./Components/ServicePage";

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/service" element={<ServicePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
