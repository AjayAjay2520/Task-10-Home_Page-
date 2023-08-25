import React from 'react'
import Yar from "../../images/yercaud...(1).jpeg"
import Yar1 from "../../images/yercaud1 (2).jpeg"
import Yar2 from "../../images/yercaud1.(3).jpeg"
import Yar3 from "../../images/yercaud1.(4).jpeg"

const Yarcaud = () => {
  return (
    <div classNameName="container">
      <div className="chennai">
            <div className="heading">
                <h2>Yercaud</h2>
                <h3>Tourist Place Visit</h3>
            </div>
            <div className="left_card gap-3 ">
                <div className="image"><img src={Yar} alt="Image.jpg"/></div>
                <div className="card-1">
                    <h4>Pagoda Point,Overview </h4>
                    <p>Located in the eastern part of the Yercaud Hills, Pagoda point is a beautiful viewpoint where one is treated to a panoramic view of the entire town of Salem as well as the neighbouring village of Kakambadi. The twists and turns of the 21 hairpin bends of Yercaud can be seen from this spot as they envelop themselves around the hills. The mysterious piles of stones arranged in the form of a pyramid resembling a Pagoda give the location its unique name. These stones are believed to be placed here by local tribes.</p> <br />
                    <p>Between the Pagodas here lies a temple devoted to Lord Rama. One can indulge in the amazing natural beauty of the spot and the scenery of the Eastern Ghats, with the greenery growing within the rugged terrains of the hills, entwined with sights of the craggy cliffs. </p>
                </div>          
            </div>
            <div className="left_card gap-3 ">
                <div className="card-1">
                    <h4>Botanical Garden,Overview </h4>
                    <p>Any tourist who is interested in gods gift to this planet, the wondrous flora, and in knowing about various species of plants must make it a point to visit the orchid garden and the green house in the Botanical garden. </p><br />
                    <p>Yercaud is the place where the famous Kurinji flower blooms in plenty and the specialty of this flower is that it will bloom only once in twelve years. The National Orchidarium which is located 2 km from the Emerald Lake has a wide variety of orchids which includes 30 orchid species that are exclusively found here. Many endangered species of orchids are persevered in this orchidarium which is ranked the third largest of all the orchidariums in India.</p>
                </div>    
                <div className="image"><img src={Yar1} alt="Image.jpg"/></div>      
            </div>
            <div className="left_card gap-3 ">
                <div className="image"><img src={Yar2} alt="Image.jpg"/></div>
                <div className="card-1">
                    <h4>Meghamalai, Overview</h4>
                    <p>The most alluring aspect of Yercaud is its big yet natural lake very popularly known as the Emerald Lake. Surrounded by some wonderful cloud-peaked hills and a well persevered garden on its banks, this lake is a feast for the eyes.</p><br />
                    <p>There is a floating fountain in the lake and boating facilities are available at a reasonable rate. Self-driven as well as rowing boats can be chosen according to your comfort and intersts. A nominal amount is collected as caution fee before issuing the boats and austere safety measures are followed by the authorities. </p>
                </div>          
            </div>
            <div className="left_card gap-3 ">
                <div className="card-1">
                    <h4>Lady,s Seat, Overview </h4>
                    <p> Lady's Seat is a viewpoint that overlooks the winding ghat road and offers a spectacular view of Mettur Dam and Salem town. Besides, the place also houses a viewing tower, which is equipped with a telescope to enjoy the beautiful view. This viewing tower is open for visitors only during the daytime. Lady's Seat Gent's Seat and Children's Seat, located to the south-west of Shevaroy Hill, are the names given to a group of rocks located on the Yercaud Hills. <br /> </p>
                    <p>it is believed that an English lady used to spend her evenings at this place watching the beautiful view of this rock. For those interested in a closer view, there's a mounted telescope. Swing it to your extreme right to see the Mettur Dam on the Cauvery River. Great shots of the river can be had from this spot in the late afternoon when the sun's rays are reflected in its waters.</p>
                </div>    
                <div className="image"><img src={Yar3} alt="Image.jpg"/></div>      
            </div>
        </div>
    </div>
  )
}

export default Yarcaud