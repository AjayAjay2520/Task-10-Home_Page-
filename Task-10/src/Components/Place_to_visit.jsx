import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import Chennai from "../../src/Components/Place-Visit-Dirstict/Chennai"
import Hogenakkal from "../../src/Components/Place-Visit-Dirstict/Hogenakkal"
import Kanyakumari from "../../src/Components/Place-Visit-Dirstict/Kanyakumari"
import Kumbakonam from "../../src/Components/Place-Visit-Dirstict/Kumbakonam"
import Madurai from "../../src/Components/Place-Visit-Dirstict/Madurai"
import Ooty from "../../src/Components/Place-Visit-Dirstict/Ooty"
import Rameshwaram from "../../src/Components/Place-Visit-Dirstict/Rameshwaram"
import Theni from "../../src/Components/Place-Visit-Dirstict/Theni"
import Yarcaud from "../../src/Components/Place-Visit-Dirstict/Yarcaud"
import Kodaikanal from "../../src/Components/Place-Visit-Dirstict/Kodaikanal"

import Place from "../images/Place.jpeg"

const Place_to_visit = () => {
  return (
    <div className="play container">
      <div className="row">
          <div className="col-6">
              <h2>Tourist Places To Visit In Tamil Nadu </h2>
              <p>Chennai, Ooty, Pondicherry, Kodaikanal, Coimbatore, Yelagiri, Masinagudi, Conoor, Madumalai, Yercaud, Madurai, Thanjavur, Mahabalipuram, Kanyakumari, Kotagiri, Nilgiri, Krishnagiri, Auroville, Theni, Hullathy, Rameshwaram, Kalhatty Ghat and more. </p><br /> 
              <p>Enjoy a vacation to remember and cherish some amazing experiences while touring the most gorgeous places to visit in Tamil Nadu. With many serene beaches, beautiful temples known for Dravidian architecture, bustling shopping bazaars and adventurous wildlife places, these places offer a splendid mix to help you make superb travel itinerary. </p><br /> 
              <p>Looking forward to visiting the most stunning places to see in Tamil Nadu?Well, then you are in for a great time. From the thriving cosmopolitan vibes of Chennai to the emerald tea plantations of Ooty and the French style houses of Pondicherry to the scenic beauty of Kodaikanal, these places will leave you overwhelmed. There is an awesome experience in store, whether you are going for leisure, backpacking or looking for an adventure. </p><br /> 
          </div>
          <div className="col-4">
              <img src={Place } alt="image.jpg" />
              <p>Tourist Place To Visit In Tamil Nadu </p>               
          </div>
        <p className="pase_p" >The variety of tourist places in Tamil Nadu offers you a glimpse of all kinds of sightseeing and adventures. Tourists here can choose among many offbeat places like Yelagiri and Yercaud to the famous cultural citadels like Mahabalipuram and Madurai. Tamil Nadu is also home to the southernmost land of India- Kanyakumari and one of the char dhams-Rameshwaram. Whether it is an adventure you are looking for or a religious respite in the temples, these places are a delight for anyone wishing to escape the hustle and bustle of life. 
        </p>
        {/* {/* <!-- ----END HEADING---- -->} */}
      </div>
      <Chennai />
      <Hogenakkal />
      <Kanyakumari/>
      <Kodaikanal />
      <Kumbakonam/>
      <Madurai/>
      <Ooty/>
      <Rameshwaram/>
      <Theni/>
      <Yarcaud/>
      <Kodaikanal/>

    <style>
    {`/* -------Place-Visit CSS------------ */
      .play{
          margin-top: 50px;
      }
      .row .col-6 h2{
          margin-bottom: 30px;
      }
      .row .col-6 p{
          text-indent: 100px;
          letter-spacing: 2px;
          text-align:justify ;
      }
      .row .col-4 img{
          margin-right: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
      }
      .row .col-4 {
          justify-content: space-between; 
          height: 550px; 
          width: 650px;
          margin-right: 0;
      }
      .row .col-4 p{
          text-align: center;
      }
      .container .pase_p{
          text-indent: 100px;
          letter-spacing: 2px;
          text-align:justify;
          margin-top:10px;
          margin-left: 0;
          margin-bottom: 80px;
      }
      .chennai .heading{
          text-align: center;
      }
      .chennai{
          margin-top: 60px;
          margin-bottom: 30px;
      }
      .left_card{
          display: flex;
          margin:60px 0px;
          justify-content: space-between;
      }
      .left_card .image img{
          margin-left: 0;
          width: 250px;
          height:100%;  
      }
      .left_card .card-1 p{
          text-indent: 80px;
          letter-spacing: 2px;
          text-align:justify ;
          font-size: 15px;
          padding: 3px;   
      }`
          
    }
    </style>
    </div>
  );
};

export default Place_to_visit