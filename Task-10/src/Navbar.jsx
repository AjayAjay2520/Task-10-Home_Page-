import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { Link } from "react-router-dom";
import {HashLink as Link} from 'react-router-hash-link'
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="navbar navbar-expand-md  ">
      <div className="container">
        <div className="logo navbar-brand text-light fw-bold fs-2">
          TAMILNADU TOURISM          
        </div>
        <button
          className="navbar-toggler text-dark"
          type="button"
          onClick={handleNav}
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
        <div className={`collapse navbar-collapse ${nav ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto gap-2  ">
            <li className="nav-item">
              <Link smooth to="/" className="nav-link text-light fst-italic fw-bold">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth to="/Place_Visit" className="nav-link text-light fst-italic fw-bold">
                Place To Visit
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth to="/Time_Visit" className="nav-link text-light fst-italic fw-bold">
                Best Time to Visit
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth to="/Packeges" className="nav-link text-light fst-italic fw-bold ">
                Packages
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth to="/Food" className="nav-link text-light fst-italic fw-bold ">
                Food
              </Link>
            </li>
          </ul>
        </div>   
      </div>
      <style>
          {`.navbar {background-color: #c9c5c3;}` 
          }
        </style>
    </nav>
  );
};

export default Navbar;