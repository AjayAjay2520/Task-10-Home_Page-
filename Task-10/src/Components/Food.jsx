import React from 'react'
import Card from 'react-bootstrap/Card';
import Food1 from "../Components/Food-Gallery/Food1.jpeg"
import Food2 from "../Components/Food-Gallery/Food2.jpg"
import Food3 from "../Components/Food-Gallery/Food3.jpeg"
import Food4 from "../Components/Food-Gallery/Food4.jpg"

const Food = () => {
  return (
    <div className="container" style={{marginTop:"120px"}} >
      <div className="row row-cols-2 ">
        <div>
          <h3>Famous & Local Food of Tamil Nadu</h3>
          <p className="mt-4" style={{lineHeight:"180%" ,textIndent: "6rem",textAlign: "justify",wordSpacing: "6px",}}> 
            The food of Tamil Nadu is rich in both vegetarian and non-vegetarian
            food. The diet mainly consists of rice, lentils, legumes with spices
            such as curry leaves, cinnamon, cloves, ginger, garlic etc. Coconut
            is widely used in various forms. People of Tamil Nadu believe that
            serving food to another living being, be it humans or animals, is a
            service to God himself. Therefore, they are incredibly generous when
            it comes to food, whether it is in their homes or temples or even
            restaurants. Traditionally, this south Indian cuisine is served on a
            banana leaf, and people sit on the floor to eat. A typical meal
            consists of Rice, Sambhar(Cuny), two types of vegetables, curd and a
            pickle. Dosas, idlis, Upma, Parota, Sambhar, Rasam, Pongal, are the
            dishes with which the cuisine of Tamil Nadu is identified. Payasam,
            Kesari, Sweet Pongal are the sweet treasures of this cuisine. Filter
            coffee is a speciality of the south-Indian cuisine. The making of
            filter coffee is like a ritual; the coffee beans are first roasted
            and then powdered. They then use a filter set, few scoops of
            powdered coffee and enough amount of boiling water is added to
            prepare a yen,/ dark liquid called the decoction. A 3/4 mug of hot
            milk with sugar and a small quantity of decoction is then served in
            Dabarah, a unique Coffee cup
          </p>
        </div>
        <div class="container  ">
          <div class="row ms-4 mt-2">
            <div class="row my-10  ">
              <div class="col-6 p-2  ">
                <img height={"260px"} style={{ width: "280px" }} src={Food1}></img>
              </div>
              <div class="col-6 p-2 ">
                <img height={"260px"} style={{ width: "280px" }} src={Food3}></img>
              </div>
              <div class="col-6 p-2">
                <img height={"260px"}style={{ width: "280px" }}src={Food2}></img>
              </div>
              <div class="col-6 p-2  ">
                <img height={"260px"} style={{ width: "280px" }} src={Food4}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{marginTop:"100px"}}>
        <h4 className='text-center'>TAMILNADU <br /> FAMOUS AND LOCAL FOODS </h4>
      </div>
      {/* -----Chennai-Rameshwaram------ */}
      <div className="row d-flex justify-content-between" style={{display:'flex', justifyContent:'space-between', marginTop:'120px'}}>
        <div className="col-6"  >
          <div className="card text-center rounded-5" style={{ width: '32rem', boxShadow: ' 2px 2px 6px black' }}>
            <div className="card-body">
              <div className="card-title"><h4>Food of Chennai</h4> </div>
              <div className="card-text p-2  mt-4" style={{textIndent:'4rem',letterSpacing:"2px",textAlign:'justify'}}>
                Chennai?s local cuisine consists of traditional South Indian food such as sambar, dosas and idlis. Ranging from street side stalls to upscale restaurants, you can enjoy a complete gourmet experience in Chennai. Chennai like any sparkling city that is constantly growing and expanding in all its spheres. fosters a cuisine that provides countless options. The city has a vibrant street food culture as well as well laid out and flattering fine dining experiences. While you can try a number of cuisines and foods here. one must not miss what Chennai is known for- traditional and authentic South-Indian cuisine. Hence do not miss the filter coffee as well as items like Idli, Dosa, Appam, Vada. Upma. Sambhar, Parotha. Chettinad Chicken. Pepper Chicken, Chicken Stew, Sweet Pongal, Kesari, Payasam and much more. 
              </div>
            </div>
          </div>
        </div>  
        <div className="col-6" >
          <div className="card text-center rounded-5 ms-4" style={{ width: '32rem', boxShadow: ' 2px 2px 6px black' }}>
            <div className="card-body">
              <div className="card-title"><h4>Food of Rameshwaram </h4></div>
              <div className="card-text  p-2  mt-4" style={{textIndent:'4rem',letterSpacing:"2px",textAlign:'justify',marginBottom:"5%"}}>
              Rameswaram offers delicious and elaborate South-Indian platters and Thalis which are mostly vegetarian. One does, however find a number of non-vegetarian preparations in the hotels here as well as a wide range of seafood prepared by the people here. The other local favorites that one must try, include Filter Coffee, Cuttle fish, Crab meat. Baby octopus, Keema Vadas, Rasam, Sambhar, Idli, Vada, Dosa and more. You also find North-Indian, Chinese and Continental cuisines in the area. Rameshwaram is famous for its non-vegetarian cuisine. Besides the regular biryani and parotta. plenty of soup stalls offer a range of mutton and chicken dishes. From mutton thala curry and goat leg soup to botti curry. these stalls are a non-veg lover's delight.     </div>
            </div>
          </div>
        </div>
      </div>
      {/* -----Kodaikanal-Ooty----- */}
      <div className="row d-flex justify-content-between" style={{display:'flex', justifyContent:'space-between', marginTop:'120px'}}>
          <div className="col-6">
            <div className="card text-center rounded-5" style={{ width: '32rem', boxShadow: ' 2px 2px 6px black' }}>
              <div className="card-body">
                <div className="card-title"><h4>Food of Kodaikanal </h4></div>
                <div className="card-text p-2   mt-4" style={{textIndent:'4rem',letterSpacing:"2px",textAlign:'justify'}}>
                Chocolates, Sandwiches. Brownies, cheeses and some hot 'chaff' are the most sought after eateries of Kodaikanal. Other than these, there is a lot that stands out in this town such as locally produced organic foods, a rich and spicy dash of Punjabi cuisine, popular items of Tibetan cuisine, an absolutely lip-smacking variety of Biryanis, as well as an elaborate Gujarati platter. Find local and traditional platters here too, with essentials like Dosas, idilis. Upma, Parota. Sambhar, Rasam, Paysam. Kesari, Sweet pongal and lots more.Kodaikanal offers exquisite Tamil cuisine which includes idlis and dosas. Besides that, the local's favourite Tibetan dishes like momos and noodle soup are a must-try. 
                </div>
              </div>
            </div>
          </div>  
        <div className="col-6">
          <div className="card text-center rounded-5" style={{ width: '32rem', boxShadow: ' 2px 2px 6px black' }}>
            <div className="card-body">
              <div className="card-title"><h4>Food of Ooty </h4></div>
              <div className="card-text p-2   mt-4" style={{textIndent:'4rem',letterSpacing:"2px",textAlign:'justify',marginBottom:"5%"}}>
                Ooty can be your trip through dream-like indulges of chocolate and all that's sweet. Lose yourself in the city's bakeries which serve temptations like white chocolate, strawberry chocolate, fudge, home made chocolates, buns and cakes. Equally popular here, are the tea plantations and hence a hot cup of local and exquisite varieties of tea. Another beverage to try here is the wine from the local vineyards. Also relish North-Indian cuisines. Chinese cuisines, as well as sandwiches, pizzas and hot breads. one may also try the vegetarian South-Indian platter here with essentials like Idli, Dosa, Chutney, Vada, Sambhar. Rasam, Upma, Sweet Pongal, Payassam, Kesari. 
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -----Kanyakumari-Kumbakonam---- */}
      <div className="row d-flex justify-content-between" style={{display:'flex', justifyContent:'space-between', marginTop:'120px'}}>
          <div className="col-6">
            <div className="card text-center rounded-5" style={{ width: '32rem', boxShadow: ' 2px 2px 6px black' }}>
              <div className="card-body">
                <div className="card-title"><h4>Food of Kanyakumari </h4></div>
                <div className="card-text p-2   mt-4" style={{textIndent:'4rem',letterSpacing:"2px",textAlign:'justify'}}>
                  In Kanyakumari. much of what is prepared is done so with a generous use of spices and an essential garnish of coconut. Hence, one can sense these two flavours distinctly in almost all the food here. Other than these, do enjoy delicacies of freshly caught fishes, as well as typical South-Indian platters in one of their most authentic and lip-smacking forms. Typical South-Indian delicacies that one must try include Idli. Dosa. Chutney, Vada. Sambhar, Rasam. Upma, Sweet Pongal. Payassam. Kesari and more. One also finds North-Indian. Gujarati, Chinese, Rajasthani cuisines here. 
                </div>
              </div>
            </div>
          </div>  
        <div className="col-6">
          <div className="card text-center rounded-5" style={{ width: '32rem', boxShadow: ' 2px 2px 6px black'}}>
            <div className="card-body">
              <div className="card-title"><h4>Food of Kumbakonam</h4></div>
              <div className="card-text p-2   mt-4" style={{textIndent:'4rem',letterSpacing:"2px",textAlign:'justify',marginBottom:"5%" }}>
                Vegetarian food rules the roost here with pre-dominantly Tamil cuisines on offer. One can get authentic South Indian cuisines which will tickle your taste buds. Also don't forget to have coffee Kumbakonam as it has one of the best filter coffees in the world It is best known for its rich collection of finest silk sarees which are handmade by the locals. Other than this. Kumbakonam is the right place for the metal sculptors and the idols of the famous Hindu god and goddesses which are entirely crafted by the local artisans of the time. 
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -----Madurai-Yarcaud----- */}
      <div className="row d-flex justify-content-between" style={{display:'flex', justifyContent:'space-between', marginTop:'120px'}}>
          <div className="col-6">
            <div className="card text-center rounded-5" style={{ width: '32rem', boxShadow: ' 2px 2px 6px black' }}>
              <div className="card-body">
                <div className="card-title"><h4>Food of Madurai</h4></div>
                <div className="card-text p-2   mt-4" style={{textIndent:'4rem',letterSpacing:"2px",textAlign:'justify'}}>
                  Madurai is often referred to as the food capital of Tamil Nadu. given the huge variety in styles. cuisines, genres and sizes that it offers. In Madurai, you can taste the most authentic of traditional delicacies as well as indulge in fast food. Bengali, Italian, Chinese and North-Indian cuisines. Also. the food is lip smacking all though its streets to the elaborate restaurants. The local delicacies include Paruthi paal. jigarthanda, panangkarkandu paal and chettinadu varieties like appam. kuzhi paniyaram, etc. as well as beverages like Paruthi. Jigarthanda as well as the popular Filter coffee . Other than these, find local favorites from all over Bengal Fish curry. Pizzas. Chaats, Fish and Chips, Gulab Jamuns. Samosas, Butter Chicken. Tandoori Chicken and lots more. 
                </div>
              </div>
            </div>
          </div>  
        <div className="col-6">
          <div className="card text-center rounded-5" style={{ width: '32rem', boxShadow: ' 2px 2px 6px black' }}>
            <div className="card-body">
              <div className="card-title"><h4>Food of Yercaud </h4></div>
              <div className="card-text p-2   mt-4" style={{textIndent:'4rem',letterSpacing:"2px",textAlign:'justify'}}>
                Tamil Nadu people believe that serving food to another living being be it humans or animals, is a service to god itself. Therefore, they are generous when it comes to food, whether it is in their home or temples or even restaurants. Traditionally, this south Indian cuisine is served on a banana leaf and people sit on the floor to eat. It is rich in both vegetarian and non-vegetarian food. The food mainly consists of rice, lentils, legumes with spices such as curry leaves, cinnamon, cloves, ginger, garlic etc. Coconut in various forms in widely used. A typical meal consists of Rice. Sambhar(Curry), two types of curd and a pickle. Dosas, idilis, Upma, Parota, Sambhar, Rasam. Pongal are the dishes with which the cuisine of Tamil Nadu is identified. 
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -----Hogenakkal-Theni ----- */}
      <div className="row mb-xxl-5  d-flex justify-content-between" style={{display:'flex', justifyContent:'space-between', marginTop:'120px'}}>
          <div className="col-6">
            <div className="card p-2  text-center rounded-5" style={{ width: '32rem', boxShadow: ' 2px 2px 6px black' }}>
              <div className="card-body">
                <div className="card-title"><h4>Food of Hogenakkal</h4></div>
                <div className="card-text p-2   mt-4" style={{textIndent:'4rem',letterSpacing:"2px",textAlign:'justify',marginBottom:"57%"}}>
                  Being a small hill station, Hogenakkal isn't spoilt for choices, when it comes to restaurants. However there are certain delicacies of the mountains that you can enjoy here, like ice creams and soups. 
                </div>
              </div>
            </div>
          </div>  
        <div className="col-6">
          <div className="card p-2  text-center rounded-5" style={{ width: '32rem', boxShadow: ' 2px 2px 6px black' }}>
            <div className="card-body">
              <div className="card-title"><h4>Food of Theni </h4></div>
              <div className="card-text p-2   mt-4" style={{textIndent:'4rem',letterSpacing:"2px",textAlign:'justify'}}>
                The hotel that is now famous for its non — vegetarian'Close' dishes was started by Chinnaswamy and his wife Susheela, as a quaint idli shop. around two and a half decades ago. Now, the hotel has become a major landmark in Theni district. Interestingly, the hotel is named after the couple's son, Jyothis. The dishes are put together by 15 cooks, who are also the couple's close relatives. The cooks begin their day at 4 in the morning. The breakfast menu consists of idli, dosa, porotta and pongal. Around the breakfast time, they begin preparing their iconic lunch dishes too. At least twenty curries are ready by 10 am. Jyothis Hotel is another example of Tamil Nadu's great culinary heritage that hasn't failed to impressed foodies 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Food