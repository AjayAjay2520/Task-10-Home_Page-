import React from 'react'
import Oot from "../../images/ooty1 (1).jpeg"
import Ooty1 from "../../images/ooty1 (2).jpeg"
import Ooty2 from "../../images/ooty1 (3).jpeg"
import Ooty3 from "../../images/ooty1.(4).jpeg"

const Ooty = () => {
  return (
    <div className="container">
      <div className="chennai">
            <div className="heading">
                <h2>Ooty  </h2>
                <h3>Tourist Place Visit</h3>
            </div>
            <div className="left_card gap-3 ">
                <div className="image"><img src={Oot} alt="Image.jpg"/></div>
                <div className="card-1">
                    <h4>Nilgiri Mountain Railway,Overview </h4>
                    <p>Nilgiri Mountain Railway, also known as Toy Train in Ooty, is one of the key attractions of the popular hill station Ooty. Such is the train's popularity and history that it was declared as a World Heritage Site by UNESCO in 2005. Started in the year 1899, it has continued to charm its visitors over the past many years winding its way through the best of nature.</p> <br/>
                    <p>The Toy Train covers a distance of total 46 km in a span of 5 hours and takes one through a truly spectacular journey filled with picturesque views en route. Another fascinating feature of the train is that its youngest X-className locomotive is over 50 years old and the oldest is 80 years old. </p>
                </div>          
            </div>
            <div className="left_card gap-3 ">
                <div className="card-1">
                    <h4>Ooty Botanical Garden, Overview </h4>
                    <p> Ooty Botanical Gardens lie on the lower slopes of the Doddabetta peak, the Government Botanical Garden is a splendid garden in Udhagamandalam, near Coimbatore in the state of Tamil Nadu. Sprawled over an area of 22 hectares, the garden is divided into several sections that are trimmed beautifully to present an endearing sight. </p><br/>
                    <p>Visitors are greeted with astounding colourful natural beauty from the moment they pass through the gates. For more than 160 years, foreign and local travellers have visited the lush green lawns of the garden, admiring the stunning variety of flowers, ferns, and orchids present here. Another highlight of the Botanical Garden is the Toda hill, known as the Toda mund, which gives the visitors an insight into the lives and culture of Todas (a tribe of the Nilgiris).</p>
                </div>    
                <div className="image"><img src={Ooty1} alt="Image.jpg"/></div>      
            </div>
            <div className="left_card gap-3 ">
                <div className="image"><img src={Ooty2}  alt="Image.jpg"/></div>
                <div className="card-1">
                    <h4>Emerald Lake,Overview</h4>
                    <p>  Emerald Lake is situated in Emerald Village, around 20-22 kilometres from the main city of Ooty and is a part of the Silent Valley National Park in the Nilgiris District. Serene and away from the maddening crowd, the lake and its surroundings are much cleaner and offer a perfect place to enjoy a leisurely time in the vicinity of nature and quietude. </p><br/>
                    <p>it is one of the unexplored and virgin places of the South Indian hill station, not yet encroached by the masses of tourists that visit the place every year. Emerald Lake is the ideal spot in Ooty for nature lovers. Tourists usually flock there for the picturesque scenic beauty of the lake, and the green Nilgiri slopes and tea plantations surrounding it. It is a paradise for nature photography enthusiasts as the delightful landscape offers a perfect subject and composition. </p>
                </div>          
            </div>
            <div className="left_card gap-3 ">
                <div className="card-1">
                    <h4>Dolphin's Nose,  Overview </h4>
                    <p>Located about 12 km away from Coonoor is the Dolphin's Nose about 1,500 meters above sea level. The tip of the peak of this enormous rock resembles a dolphin's nose and this is one of the most visited tourist spots in The Nilgiris District of Tamil Nadu. <br/> </p>
                    <p>it is set amidst the rolling hills of the Nilgiris Hills (or the Blue Mountains). The gigantic rock formation is entirely unprecedented. There are enormous canyons found on both the sides of the destination and there is a clear view of the Catherine Falls, another popular tourist destination with its ongoing current several thousand meters below, which is located at a short distance from the Dolphin's Nose.</p>
                </div>    
                <div className="image"><img src={Ooty3}  alt="Image.jpg"/></div>      
            </div>
        </div>
    </div>
  )
}

export default Ooty