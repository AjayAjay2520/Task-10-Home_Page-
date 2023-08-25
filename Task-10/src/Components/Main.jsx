import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from 'react-bootstrap';
import {HashLink as Link} from 'react-router-hash-link'

import banner from "../images/banner.1.jpg"
import pic1 from "../images/pic1.jpeg"
import pic2 from "../images/pic2.jpeg"
import pic3 from "../images/pic3.jpeg"
import pic4 from "../images/pic4.jpeg"

const Main = () => {
  return (
    <div className="pages">
      <div className="container mb-xxl-5">
        <div className='cr '>        
          <Carousel
              className=" _Carousel  "
              interval={2000}>     
              <Carousel.Item className='item'>
                <img className="d-block w-100" src={banner} alt="" />
              </Carousel.Item>     
              <Carousel.Item className='item'>
                <img className="d-block w-100" src={pic1} alt="" />
              </Carousel.Item>
              <Carousel.Item className='item'>
                <img className="d-block w-100" src={pic2} alt="" />
              </Carousel.Item>
              <Carousel.Item className='item'>
                <img className="d-block w-100" src={pic3} alt="" />
              </Carousel.Item>
              <Carousel.Item className='item'>
                <img className="d-block w-100 " src={pic4} alt="" />
              </Carousel.Item>
          </Carousel>
        </div>

        <div className="con">
              <p>Tourist Place To Tamil Nadu <br /> Here are The Top Place To Visit In Tamil Nadu In 2023 </p>
          </div>
      </div>
      <div className="distic container-fluid ">
              <Link smooth to="#chennai">
                Chennai
              </Link>     
              <Link smooth to="#kodaikanal">
                Kodaikanal
              </Link>
              <Link smooth to="#madurai">
                Madurai
              </Link>
              <Link smooth to="#kumbakonam">
                Kumbakonam
              </Link>
              <Link smooth to="#theni">
                Theni
              </Link>
              <Link smooth to="#rameshwaram">
                Rameshwaram
              </Link>
              <Link smooth to="#ooty">
                Ooty
              </Link>
              <Link smooth to="#kanyakumari">
                Kanyakumari
              </Link>
              <Link smooth to="#yarcaud">
                Yarcaud
              </Link>
              <Link smooth to="#hogenakkal">
                Hogenakkal
              </Link>
          </div>
    </div>
  )
}

export default Main