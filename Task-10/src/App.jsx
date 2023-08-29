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


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/Place_Visit" element={<Place_Visit />} />
        <Route path="/Time_Visit" element={<Time_to_visit />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
