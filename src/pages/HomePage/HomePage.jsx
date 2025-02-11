import React from 'react'
import Button from '../../components/Button/Button'
import { motion as Motion } from 'framer-motion'
import ProductCard from '../../components/ProductCard/ProductCard';
import { getfifthproducts, getfourthproducts, getproducts, getsecondproducts, getseventhproducts, getsixthproducts, getthirdproducts } from '../../apis/FetchApi';
 
export default function HomePage() {
const tab = document.querySelectorAll(".section5 .tabs .tab");
const tabsContainer = document.querySelectorAll(".section5 .tabs_container .tab_products");
tab.forEach((tab , index) => {

  tab.addEventListener("click", () => {
    removeActiveTab();
    tab.classList.add("active_tab");
    removeactivecontainer();
    tabsContainer[index].classList.add("active_products");
    

  });
})
function removeActiveTab() {
  tab.forEach((tab) => {
    tab.classList.remove("active_tab");
  })
}
function removeactivecontainer () {
  tabsContainer.forEach((tab) => {
    tab.classList.remove("active_products");
  })
  }
  const {data} = getproducts();
  console.log(data?.data?.data);

  const {data:seconddata} = getsecondproducts();
  console.log(seconddata?.data?.data);
  const {data:thirddata} = getthirdproducts();
  console.log(thirddata?.data?.data);
  const {data:fourthdata} = getfourthproducts();
  console.log(fourthdata?.data?.data);
  const {data:fifthdata} = getfifthproducts();
  console.log(fifthdata?.data?.data);
  const {data:sixthdata} = getsixthproducts();
  console.log(sixthdata?.data?.data);
  const {data:seventhdata} = getseventhproducts();
  console.log(seventhdata?.data?.data);
  

  return (
    <div className='homePage'>
      <div className='section1'>
        <div className='sec1_content'>
        <h4>Motosport Garage</h4>
        <h1>Find The Best MotorBike parts for your vechile</h1>
        <Button text={"SEE MORE"}/>
        </div>
      </div>
      <div className='section2'>
        <div className='sec2_leftcontent'>
         <img src="https://motosport-store-newdemo.myshopify.com/cdn/shop/files/h1bn1.jpg?v=1721615242&width=881" alt="" />
         <div className='sec2_leftcontent_content'>
          <p>Power Tools</p>
          <h3>Gloves for Bike</h3>
          <Button text={"SHOP NOW"}/>
         </div>
        </div>
        <div className='sec2_rightcontent'>
          <img src="https://motosport-store-newdemo.myshopify.com/cdn/shop/files/h1bn2.jpg?v=1721615248&width=881" alt="" />
          <div className='sec2_rightcontent_content'>
            <p>Power Tools </p>
            <h3>Biker Jacket</h3>
            <Button text={"SHOP NOW"}/>
          </div>
        </div>
      </div>
      <div className='section3'>
        <h3>FEATURE PRODUCTS</h3>
        <Motion.div className='container' >
          <Motion.div drag="x" className='inner'>
            <Motion.div className='slide'>
            {data?.data?.data.map((item) => (
              <ProductCard key={item.id} product_name={item.product_name} product_image={item.product_image} product_new_price={item.product_new_price} product_old_price={item.product_old_price} documentId={item.documentId} product_discription={item.product_discription} />
              
            ))}
            
            </Motion.div>
            <Motion.div className='slide'>
            {seconddata?.data?.data.map((item) => (
              <ProductCard key={item.id} product_name={item.product_name} product_image={item.product_image} product_new_price={item.product_new_price} product_old_price={item.product_old_price} documentId={item.documentId} product_discription={item.product_discription} />
              
            ))}

            </Motion.div>
            <Motion.div className='slide'>
            {thirddata?.data?.data.map((item) => (
              <ProductCard key={item.id} product_name={item.product_name} product_image={item.product_image} product_new_price={item.product_new_price} product_old_price={item.product_old_price} documentId={item.documentId} product_discription={item.product_discription}/>
              
            ))}

            </Motion.div>
            <Motion.div className='slide'>
            {fourthdata?.data?.data.map((item) => (
              <ProductCard key={item.id} product_name={item.product_name} product_image={item.product_image} product_new_price={item.product_new_price} product_old_price={item.product_old_price} documentId={item.documentId} product_discription={item.product_discription}/>
              
            ))}

            </Motion.div>

          </Motion.div>

        </Motion.div>

      </div>
      <div className='section4'>
        <div className='container'>
          <div className='inner_container'>
          <h6>DEAL OF THE DAY</h6>
          <h1>Smart Safety Helmet</h1>
          <div className='prices'>
            <h6>$20.00</h6>
            <p>$40.00</p>
          </div>
          <h5>Hurry Up, Order Now!</h5>
          <Button text={"SHOP NOW"}/>
          </div>
          <div className='container_image'>
            <img src="https://motosport-store-newdemo.myshopify.com/cdn/shop/files/h1prcd.png?v=1721621181&width=788" alt="" />

          </div>

        </div>

        

      </div>
      <div className='section5'>
        <div className='tabs'>
          <h5 className='tab active_tab'>TOP RATING</h5>
          <h5 className='tab'>BEST SELLERS</h5>
          <h5 className='tab'>SPECIAL OFFERS</h5>
        </div>
        <div className='tabs_container'>
          <div className='tab_products active_products'>
          {fifthdata?.data?.data.map((item) => (
              <ProductCard key={item.id} product_name={item.product_name} product_image={item.product_image} product_new_price={item.product_new_price} product_old_price={item.product_old_price} documentId={item.documentId} product_discription={item.product_discription}/>
              
            ))}
          </div>
          <div className='tab_products'>
          {sixthdata?.data?.data.map((item) => (
              <ProductCard key={item.id} product_name={item.product_name} product_image={item.product_image} product_new_price={item.product_new_price} product_old_price={item.product_old_price} documentId={item.documentId} product_discription={item.product_discription}/>
              
            ))}
          </div>
          <div className='tab_products'>
          {seventhdata?.data?.data.map((item) => (
              <ProductCard key={item.id} product_name={item.product_name} product_image={item.product_image} product_new_price={item.product_new_price} product_old_price={item.product_old_price} documentId={item.documentId} product_discription={item.product_discription}/>
              
            ))}
          </div>

        </div>

      </div>
      <div className='section6'>
        <div className='images_container'>

        <img src="https://motosport-store-newdemo.myshopify.com/cdn/shop/files/instagram1.jpg?v=5499945389846879684" alt="" />
        <img src="https://motosport-store-newdemo.myshopify.com/cdn/shop/files/instagram2.jpg?v=8106863877790995711" alt="" />
        <img src="https://motosport-store-newdemo.myshopify.com/cdn/shop/files/instagram3.jpg?v=15286536461823850402" alt="" />
        <img src="https://motosport-store-newdemo.myshopify.com/cdn/shop/files/instagram4.jpg?v=7532137303240174192" alt="" />
        <img src="https://motosport-store-newdemo.myshopify.com/cdn/shop/files/instagram5.jpg?v=12499380915618350053" alt="" />
        <img src="https://motosport-store-newdemo.myshopify.com/cdn/shop/files/instagram6.jpg?v=8000474941532265288" alt="" />
        </div>

      </div>
    
    </div>

  )
}
