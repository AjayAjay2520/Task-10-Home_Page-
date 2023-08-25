import React from 'react'
import Cen from "../../images/chennai1.jpeg"
import Cen1 from "../../images/chennai2.jpeg"
import Cen2 from "../../images/chennai3...jpeg"
import Cen3 from "../../images/chennai4.jpeg"

const chennai = () => {
  return (
    <div className='container' >
        {/*<!-- ---CHENNAI CARDS---- --> */}
        <div className="chennai">
            <div className="heading">
                <h2>Chennai</h2>
                <h3>Tourist Place Visit</h3>
            </div>
            <div className="left_card gap-3 ">
                <div className="image"><img src={Cen} alt="Image.jpg" /></div>
                <div className="card-1">
                    <h4>Marina Beach, Overview </h4>
                    <p> Situated in the city of Chennai in Tamil Nadu, Marina Beach is a natural urban beach along the Bay of Bengal. The beach is stretched out to a distance of 13 kilometres making it the longest natural urban beach in the country, second largest in the world and also the most crowded beach in India with almost 30,000 visitors a day. </p><br />
                    <p>With a white sandy shore that looks as though extending to infinity, the landscape of Marina Beach is a mesmerising and serene sight to behold. The beach has a primarily sandy terrain and is dotted with plenty of merry-go-rounds and shops selling souvenirs. You could take a walk along the Marina beach with your near and dear ones or even all alone and enjoy the cool evening sea breeze along with a hot plate of crispy sundal and murukku. Watching the sun crawl upwards into the sky or even disappear into the ocean from the beach, is an awe-striking and enchanting experience.</p>
                </div>          
            </div>
            <div class="left_card gap-3 ">
                <div class="card-1">
                    <h4>MGR Flint City, Overview </h4>
                    <p> Having been established in the year 1994, a considerably new structure, the MGR Film city is managed by the Government of Tamil Nadu in loving memory of MG Ramachandran who was not only a crowd-pleasing tamil actor but also a longtime CM of Tamil Nadu. </p><br/>
                    <p>With a white sandy shore that looks as though extending to infinity, the landscape of Marina Beach is a mesmerising and serene sight to behold. The beach has a primarily sandy terrain and is dotted with plenty of merry-go-rounds and shops selling souvenirs. You could take a walk along the Marina beach with your near and dear ones or even all alone and enjoy the cool evening sea breeze along with a hot plate of crispy sundal and murukku. Watching the sun crawl upwards into the sky or even disappear into the ocean from the beach, is an awe-striking and enchanting experience. </p>
                </div>    
                <div class="image"><img src={Cen1} alt="Image.jpg" /></div>      
            </div>
            <div class="left_card gap-3 ">
                <div class="image"><img src={Cen2} alt="Image.jpg" /></div>
                <div class="card-1">
                    <h4>Marundeeswarar Temple, Overview</h4>
                    <p>The magnificent Marundeeswarar Temple, in Tiruvanmiyur, near Chennai has the temple deity Shiva in the form of Marundeeswar or Aushadeeswarar, the God of Medicines. A fine specimen of Dravidian architecture, this temple is a must visit for anyone visiting Chennai or nearby cities. </p><br/>
                    <p>Glorified in the 7th-8th century by Nayanars (Saivite Saints), Tirugnana Sambandar, and Appar, the temple was expanded by the Chola Kingdom in the 11th century. Moreover, given the name, Marundeeswarar Temple has been a place of worship especially for people with diseases and those facing various problems with their health. The prasadam here is a mixture of sacred ash, water, and milk which is believed to cure any ailments. One must visit the temple to encounter the miraculous power it is said to have. </p>
                </div>          
            </div>
            <div class="left_card gap-3 ">
                <div class="card-1">
                    <h4>Breezy Beach, Overview </h4>
                    <p> Breezy Beach lays in the remote and serene neighbourhood of Valmiki Nagar in Chennai. Being smaller and less polluted, its a perfect getaway for anyone looking for a peaceful evening. </p><br/>
                    <p>This beach is not as popular and known as the Elliots beach, and is hence more quiet and peaceful. Evenings are very pleasant and breezy here, and in the recent years, lots of tourists have been attracted towards this beach for its beauty. Those looking for an amiable, refreshing and breezy place to chill out and have fun, the Breezy beach of Chennai is the place to be. </p>
                </div>    
                <div class="image"><img src={Cen3} alt="Image.jpg" /></div>      
            </div>
        </div>
        {/* <!-- ---END CHENNAI-CARDS --></br> */}
    </div>
  )
}

export default chennai