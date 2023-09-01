import React from 'react'
import "./Packages/Package.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import {HashLink as Link} from 'react-router-hash-link'

import img1 from "./Packages/Gallery/Bus Tourism.png"
import Chennai from "../Components/Packages/chennai"
import Hogenakkal from "../Components/Packages/Hogenakkal"
import Kanyakumari from "../Components/Packages/Kanyakumari"
import Kodaikanal from "../Components/Packages/Kodaikanal"
import Kumbakonam from "../Components/Packages/Kumbakonam"
import Madurai from "../Components/Packages/Madurai"
import Ooty from "../Components/Packages/Ooty"
import Rameshwaram from "../Components/Packages/Rameswaram"
import Theni from "../Components/Packages/Theni"
import Yarcaud from "../Components/Packages/Yarcaud"

const Packages = () => {
  return (
    <div className="container">
        <section className="section-1">
            <h1>Welcome to Tamil Nadu!</h1>
            <h4>Extra Services...</h4>  
                <div className="sub-bar">
                <div className="row ms-5  ">
                    <div className='col-2 card ' ><a href="#Chennai">Chennai to -----</a></div>
                    <div className='col-2 card ' ><a href="#Hogenakkal">Hokenakkal to -----</a></div>
                    <div className='col-2 card ' ><a href="#Theni">Theni to -----</a></div>
                    <div className='col-2 card ' ><a href="#Kanyakumari">kanyakumari to -----</a></div>
                    <div className='col-2 card ' ><a href="#Kodaikanal">Kodaikanal to -----</a></div>
                    <div className='col-2 card ' ><a href="#Kumbakonam">Kumbakonam to -----</a></div>
                    <div className='col-2 card ' ><a href="#Madurai">Madurai to -----</a></div>
                    <div className='col-2 card ' ><a href="#Yarcaud">Yarcaud to -----</a></div>
                    <div className='col-2 card ' ><a href="#Ooty">Ooty to -----</a></div>
                    <div className='col-2 card '><a href="#Rameswaram">Ramehswaram to -----</a></div>
                </div>
            </div>
            <div className='display-6'style={{textAlign:"center",marginTop:"30px" }} >MORE ABOUT PACKAGES</div>           
            <p style={{textAlign:"center",marginTop:"20px" }} >A potpourri of vibrant cultures, exotic destinations and enduring memories; welcome to one of <br/> the heartlands of human civilization.</p>
            <div className="row"style={{marginTop:"20px" }}>
                <div className="col-3"><img style={{width:"300px"}} src={img1} alt="" /></div>
                <div className="col-8" style={{lineHeight:"30px" }}>The Transport Division at present has a fleet of 12 coaches, of which Three are Volvo and Six are AC coaches and Three are Non-AC coaches. TTDC is offering a wide range of package tours covering the entire Southern States.
                <p className='mt-2' >Every coach allows passengers to travel with comfort, safety and hygiene while adhering to COVID-19 safety protocols. </p>
                <div className="list">
                    <ul>
                        <li>Transport Facilites</li>
                        <li>Hotel Facilities</li>
                        <li>Fun Activities</li>
                        <li>Guidence</li>
                    </ul>
                </div>
                </div>  
                
            </div>

        </section>
        <Chennai />
        <Kodaikanal></Kodaikanal>
        <Madurai></Madurai>
        <Kumbakonam></Kumbakonam>
        <Theni></Theni>
        <Rameshwaram></Rameshwaram>
        <Ooty></Ooty>
        <Kanyakumari></Kanyakumari>
        <Yarcaud></Yarcaud>
        <Hogenakkal></Hogenakkal> 

    </div>
  )
}

export default Packages