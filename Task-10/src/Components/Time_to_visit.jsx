import climet from "../Components/Time_Visit-Dirstict/Gallery/Climate.jpeg" 
import march_may from "../Components/Time_Visit-Dirstict/Gallery/image.jpeg" 
import June_sep from "../Components/Time_Visit-Dirstict/Gallery/image1.jpeg" 
import oct_feb from "../Components/Time_Visit-Dirstict/Gallery/image2.jpeg" 

import { Image, Container, Row, Col, Accordion } from "react-bootstrap";

import Chennai from "../Components/Time_Visit-Dirstict/Chennai"
import Hoge from "../Components/Time_Visit-Dirstict/Hogenakkal"
import Kanya from "../Components/Time_Visit-Dirstict/Kanyakumari"
import Kodai from "../Components/Time_Visit-Dirstict/Kodaikanal"
import Kumba from "../Components/Time_Visit-Dirstict/Kumbakonam"
import Madu from "../Components/Time_Visit-Dirstict/Madurai"
import Ooty from "../Components/Time_Visit-Dirstict/Ooty"
import Ramesh from "../Components/Time_Visit-Dirstict/Rameshwaram"
import Theni from "../Components/Time_Visit-Dirstict/Theni"
import Yarcaud from "../Components/Time_Visit-Dirstict/Yarcaud"

function TimeToVisit() {
  return (
    <Container className="mt-5">
      <h3>TamilNadu</h3>
      <h2>Best Time To Visit</h2>
      <Row>
        <Col>
          <Image
            style={{ width: "550px", height: "300px", marginTop: "30px" }}
            src={climet}
            alt=""
          />
          <p style={{ marginRight: "100px" }} className="text-center">
            Best Time To Visit
          </p>
        </Col>
        <Col style={{ marginRight: "80px" }}>
          <h5
            style={{
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            More about Best Time to Travel to Tamil Nadu
          </h5>

          <Accordion className="mt-5 ">
            <Accordion.Item eventKey="summer">
              <Accordion.Header>
                Tamil Nadu in Summer (March-May)
              </Accordion.Header>
              <Accordion.Body
                style={{ textIndent: "3rem", textAlign: "justify",letterSpacing:"1px" }}
              >
                This season begins in March and lasts until May. The
                temperatures are high, ranging between 35°C and 40°C and so is
                the humidity especially in the coastal regions. Sightseeing
                during this time is not very convenient because of the improper
                temperature. The season, however, is visited to witness the
                festival of Chithirai held in the Madurai temple in the month of
                March-April. Puthandu, another important festival that marks the
                Tamil New year falls in mid-April and Mahamahan Festival is
                celebrated in March (celebrated once in 12 years). If visiting
                during summer, it is a good idea to visit the attractions on
                higher attitudes. Hill stations like Ooty, Kodaikanal and
                Yelagiri hills are the best where the temperature is pleasant
                and has scenic views that tourists can witness.
                <Image
                  style={{ width: "100%", height: "auto" }}
                  src={march_may}
                  alt="Pillar Rocks of Kodaikanal"
                />
                <p className="text-center">Pillar Rocks of Kodaikanal</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item eventKey="summer">
              <Accordion.Header>
                Tamil Nadu in Monsoon (June-September)
              </Accordion.Header>
              <Accordion.Body
                style={{ textIndent: "3rem", textAlign: "justify",letterSpacing:"1px" }}
              >
                This southern state sees monsoon two times a year - once between
                June to September and the retreating monsoon in November and
                December. The temperature is slightly less than what it is in
                the summer season. It ranges between 25°C and 30°C. The rains
                often occur in long spells and the humidity during this time is
                high especially in coastal regions. Some of the hilly areas see
                massive rainfall and venturing out during this time around is
                not a great idea. The Eastern seaboard of Tamil Nadu sometimes
                experiences cyclones during the late monsoon, making it an
                unsafe place to visit.
                <Image
                  style={{ width: "100%", height: "auto" }}
                  src={June_sep}
                  alt="Pillar Rocks of Kodaikanal"
                />
                <p className="text-center">A Rainy Day in Chennai Source</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>


          <Accordion>
            <Accordion.Item eventKey="summer">
              <Accordion.Header>
                Tamil Nadu in Winter (October-February)
              </Accordion.Header>
              <Accordion.Body
                style={{ textIndent: "3rem", textAlign: "justify",letterSpacing:"1px" }}
              >
                Winter in Tamil Nadu begins in October and lasts until February.
                November and December have intermittent rainfall because of the
                retreating monsoon, but otherwise, the temperature remains
                between 10°C and 15°C. The humidity is low, and it is the best
                climate for sightseeing and touring the cities. Most of the
                tourist attractions are bustling with activities during this
                season. The beaches call the beach lovers, and adventure seekers
                for bathing in the sun, swimming and water sports as the
                temperature remains moderate all through the day.
                <Image
                  style={{ width: "100%", height: "auto" }}
                  src={oct_feb}
                  alt="Pillar Rocks of Kodaikanal"
                />
                <p className="text-center">
                  Pechiparai Reservoir in Kanyakumari District Source
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      <div style={{ width: "1159px " }}>
        <p style={{textIndent: "6rem", textAlign: "justify",marginTop:"30px",lineHeight:"28px"  }}>
          The best time to visit Tamil Nadu is during the winter season, i.e.
          from November to February when the temperature is relatively low, and
          pleasant to explore the attractions in the state. Monsoons bring
          torrential downpour which makes it an inappropriate time to travel
          through Tamil Nadu. Summer, however, is perfect for exploring the
          hills stations. Tourists can pick the region they wish to see
          according to the season because offseason visits could be extremely
          inconvenient for some.
        </p>
      </div>
      <Chennai />
      <Ramesh/>
      <Kodai />
      <Ooty/>
      <Kanya/>
      <Kumba/>
      <Madu/>
      <Yarcaud/>
      <Theni/>
      <Hoge /> 
    </Container>
  );
}

export default TimeToVisit;
