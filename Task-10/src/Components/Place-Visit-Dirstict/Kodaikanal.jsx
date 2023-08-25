import React from 'react'
import Kodai from "../../images/kodaikanal1....jpeg"
import Kodai1 from "../../images/kodaikanal2.jpeg"
import Kodai2 from "../../images/kodaikanal3..jpeg"
import Kodai3 from "../../images/kodaikanal4.jpeg"

const Kodaikanal = () => {
  return (
    <div clsNameName="container">
      <div className="chennai">
            <div className="heading">
                <h2>Kodaikanal</h2>
                <h3>Tourist Place Visit</h3>
            </div>
            <div className="left_card gap-3 ">
                <div className="image"><img src={Kodai} alt="Image.jpg"/></div>
                <div className="card-1">
                    <h4>Green Valley ViewOverview </h4>
                    <p> Formerly known as Suicide point, the Green Valley View offers a breathtaking view of the plains, deep valleys and hills. The mesmerizing view of the Vaigai Dam is an unforgettable experience. It used to be known as suicide point because of the dangerous valley which is dense and deep; below the point of more than 5000 feet drop. </p><br />
                    <p>Located at a distance of 5.5 km from the Kodaikanal Lake, the Green Valley View not just offers a gorgeous view, but is also surrounded by a lot of monkeys. On the way to the point, there are several shops which offer homemade chocolates, ornaments and a wide range of flowers. </p>
                </div>          
            </div>
            <div className="left_card gap-3 ">
                <div className="card-1">
                    <h4>Kodai Lake,Overview </h4>
                    <p> Kodaikanal Lake is a manmade lake in the Kodaikanal city which is also known as Kodai Lake. Vera Levinge was the man responsible for the creativity and resources of this lake amidst Kodaikanal town. This lake was developed by the British and early missionaries from the USASA. </p><br />
                    <p>The star-shaped lake is centrally located in Kodaikanal and is surrounded by the rich green Palani Hills Range the main watershed for the lake. The lake is situated at an elevation of 2285m above sea level and has an average depth of 3.0m. The lake is at a distance of 3 km from the Kodai Bus stand. </p>
                </div>    
                <div className="image"><img src={Kodai1} alt="Image.jpg"/></div>      
            </div>
            <div className="left_card gap-3 ">
                <div className="image"><img src={Kodai2} alt="Image.jpg"/></div>
                <div className="card-1">
                    <h4>Bear Shola Falls,Overview</h4>
                    <p> Located at a mere distance of 2 kilometres from the Kodaikanal Lake, the Bear Shola Falls is a popular picnic spot in the region. This cascade is a seasonal attraction that comes to life in its fullest during the monsoons. An interesting legend behind the unique name of this place is that it was a favourite haunt of a bear who used to frequent this water body to drink water, hence imparting it the name Bear Shola Falls. </p><br />
                    <p>Wrapped with dense forests coupled with the chirping of birds, Bear Shola Falls is a little heaven. Also, the forest area of the Western Ghats situated near the falls is a biodiversity hotspot where you can have a rendezvous with animals like monkeys and deer in the wild.  </p>
                </div>          
            </div>
            <div className="left_card gap-3 ">
                <div className="card-1">
                    <h4>Pillar Rocks, Overview </h4>
                    <p>Situated in the 'Princess of Hill stations', Kodaikanal, the Pillar Rocks have become a lovely picnic spot Constituting a beautiful mini garden; the place is named so as it has three vertically positioned boulders reaching up to a height of 400 feet. The aura here is full of affection and is evidence of a great love story. The 'white cross' which once existed on these rocks represented David Gell's excellent tribute to love. The view of rocks is not something to be missed. They stand as an untouched miracle for the tourists visiting Kodaikanal. </p><br />
                    <p>The pillars are famous for providing bird's view of nearby surroundings. The chambers between these two massive rocks are called the Devil's Kitchen. Fewer times you might find rocks covered with mist and clouds, but when the ways become clear nothing beautiful than this could be ever seen.</p>
                </div>    
                <div className="image"><img src={Kodai3}alt="Image.jpg"/></div>      
            </div>
        </div>
    </div>
  )
}

export default Kodaikanal