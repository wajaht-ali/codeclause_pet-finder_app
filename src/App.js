import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Pricing from "./components/Adopt"
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path={"/"} element={<Home />}/>
        </Routes>
        <Routes>
          <Route path={"/contact"} element={<Contact />}/>
        </Routes>
        <Routes>
          <Route path={"/services"} element={<Services />}/>
        </Routes>
        <Routes>
          <Route path={"/pricing"} element={<Pricing />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
