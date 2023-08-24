import React from "react";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter  } from "react-router-dom";
import './index.css'

import Navbar from "../src/Navbar";
import Home from "../src/Components/Home";
import Chennai from "../src/Distic/chennai"
import Hogenakkal from "../src/Distic/hogenakkal"
import Kanyakumari from "../src/Distic/kanyakumari"
import Kodaikanal from "../src/Distic/Kodaikanal"
import Kumbakonam from "../src/Distic/kumbakonam"
import Madurai from "../src/Distic/madurai"
import Ooty from "../src/Distic/ooty"
import Rameshwaram from "../src/Distic/rameshwaram"
import Theni from "../src/Distic/theni"
import Yarcaud from "../src/Distic/Yarcaud"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Chennai></Chennai>
      <Kodaikanal></Kodaikanal>
      <Madurai></Madurai>
      <Kumbakonam></Kumbakonam>
      <Theni></Theni>
      <Rameshwaram></Rameshwaram>
      <Ooty></Ooty>
      <Kanyakumari></Kanyakumari>
      <Yarcaud></Yarcaud>
      <Hogenakkal></Hogenakkal>
    </BrowserRouter>
  )
}

export default App