import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import ServicePage from "./Pages/ServicePage/ServicePage";
import ServiceSuccess from "./Pages/ServiceSuccess/ServiceSuccess";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home/>} />
         <Route path="/ServicePage" element={<ServicePage/>} />
                  <Route path="/ServiceSuccess" element={<ServiceSuccess/>} />
         
      </Routes>
    </BrowserRouter>
  );
}

export default App;