import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import ServicePage from "./Pages/ServicePage/ServicePage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home/>} />
         <Route path="/ServicePage" element={<ServicePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;