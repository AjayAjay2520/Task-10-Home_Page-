import React from "react";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Route,Routes  } from "react-router-dom";
import './index.css'

import Place_Visit from "../src/Components/Place_to_visit"
import Navbar from "../src/Navbar";
import Home from "../src/Components/Home";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/Place_Visit" element={<Place_Visit />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
