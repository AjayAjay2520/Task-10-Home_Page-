import "bootstrap/dist/css/bootstrap.min.css";
import Chennai from "../../src/Distic/chennai"
import Hogenakkal from "../../src/Distic/hogenakkal"
import Kanyakumari from "../../src/Distic/kanyakumari"
import Kodaikanal from "../../src/Distic/Kodaikanal"
import Kumbakonam from "../../src/Distic/kumbakonam"
import Madurai from "../../src/Distic/madurai"
import Ooty from "../../src/Distic/ooty"
import Rameshwaram from "../../src/Distic/rameshwaram"
import Theni from "../../src/Distic/theni"
import Yarcaud from "../../src/Distic/Yarcaud"
import Carousel from "../Components/Main"

const Home = () => {
  return (
    <div>
        <Carousel />
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
    </div>
  )
}

export default Home