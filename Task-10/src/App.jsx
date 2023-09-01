import React from "react";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Route,Routes  } from "react-router-dom";
import './index.css'
import './App.css'

import Place_Visit from "../src/Components/Place_to_visit"
import Navbar from "../src/Navbar";
import Home from "../src/Components/Home";
import Time_to_visit from "../src/Components/Time_to_visit";
import Packeges from "../src/Components/Packages"
import Food from "../src/Components/Food"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/Place_Visit" element={<Place_Visit />} />
        <Route path="/Time_Visit" element={<Time_to_visit />} />
        <Route path="/Packeges" element={<Packeges />} />
        <Route path="/Food" element={<Food />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
