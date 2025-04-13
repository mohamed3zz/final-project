import React, { useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import { motion as Motion } from 'framer-motion'
import ProductCard from '../../components/ProductCard/ProductCard';
import {getproducts} from '../../apis/FetchApi';
import { NavLink } from 'react-router-dom';


// import { getAllProducts } from '../../Slice/GetAllProducts';


// import Loader from '../../components/Loader/Loader';
 
export default function HomePage() {
//   const { ProductData , isLoading , error } = useSelector((state)=>state.product);
//   const dispatch = useDispatch();
//   useEffect(()=>{
// dispatch(getAllProducts());
//   },[dispatch])
//   console.log(ProductData);
useEffect (() => {
  setTimeout(() => {
    scrollTo({
        top: 0,
        behavior: "smooth",
    });
}, 0);

  
})
  const sec2_product = [
    {
    id: 108,
    documentId: 108,
    product_name: "Gloves For Bike",
    product_new_price: 100,
    product_old_price: 120,
    product_image:"data:image/jpeg;base64,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",
    product_discription:"Experience unparalleled freedom and functionality with the MotoShield Tank Bag, your ultimate companion for every motorcycle adventure. Uncompromising Durability: Crafted from ballistic nylon, the MotoShield boasts exceptio...",
  },
  {
    id: 109,
    documentId: 109,
    product_name: "Biker Jacket",
    product_new_price: 150,
    product_old_price: 200,
    product_image:"data:image/jpeg;base64,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",
    product_discription:"Experience unparalleled freedom and functionality with the MotoShield Tank Bag, your ultimate companion for every motorcycle adventure. Uncompromising Durability: Crafted from ballistic nylon, the MotoShield boasts exceptio...",
   
  }
]
console.log(sec2_product);

  
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
  const {data } = getproducts();
  console.log(data?.data?.data);
//  useEffect(() => {
//           const productcard = document.querySelectorAll(".productCard");
//           const producticons = document.querySelectorAll(".productCard_img .productCard_icon");
//           setTimeout(() => {
//             productcard.forEach((card , index) => {
//               card.addEventListener("mouseover" , () => {
//                 producticons[index].classList.add("activeicons");
//               })
//               card.addEventListener("mouseleave" , () => {
//                 producticons[index].classList.remove("activeicons");
//               })
//             })
//           }, 0);
//         },[])

  return (
    
    <div className='homePage'>
      <div className='section1'>
        <div className='sec1_content'>
        <h4>Motosport Garage</h4>
        <h1>Find The Best MotorBike parts for your vechile</h1>
        {/* <h1>mohamed</h1> */}
        <NavLink to={"/productspage"}><Button text={"SEE MORE"}/></NavLink>
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
        <div data-aos="fade-down">
        <Motion.div className='container' >
          <Motion.div drag="x" className='inner'>
            <Motion.div className='slide'>
            {Array.isArray(data?.data?.data) && data.data.data.slice(0,3).map((item) => (
              <ProductCard key={item.id} product_name={item.product_name} product_image={item.product_image} product_new_price={item.product_new_price} product_old_price={item.product_old_price} documentId={item.documentId} product_discription={item.product_discription} />
              
            ))}
            
            </Motion.div>
            <Motion.div className='slide'>
            {Array.isArray(data?.data?.data) && data.data.data.slice(3,6).map((item) => (
              <ProductCard key={item.id} product_name={item.product_name} product_image={item.product_image} product_new_price={item.product_new_price} product_old_price={item.product_old_price} documentId={item.documentId} product_discription={item.product_discription} />
              
            ))}

            </Motion.div>
            <Motion.div className='slide'>
            {Array.isArray(data?.data?.data) && data.data.data.slice(6,9).map((item) => (
              <ProductCard key={item.id} product_name={item.product_name} product_image={item.product_image} product_new_price={item.product_new_price} product_old_price={item.product_old_price} documentId={item.documentId} product_discription={item.product_discription}/>
              
            ))}

            </Motion.div>
            <Motion.div className='slide'>
            {Array.isArray(data?.data?.data) && data.data.data.slice(15,18).map((item) => (
              <ProductCard key={item.id} product_name={item.product_name} product_image={item.product_image} product_new_price={item.product_new_price} product_old_price={item.product_old_price} documentId={item.documentId} product_discription={item.product_discription}/>
              
            ))}

            </Motion.div>

          </Motion.div>

        </Motion.div>
</div>
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
            <img src="https://motosport-store-newdemo.myshopify.com/cdn/shop/files/h1prcd.png?v=1721621181&width=200" alt="" />

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
        <div data-aos="fade-down">
          <div className='tab_products active_products'>
          {Array.isArray(data?.data?.data) && data.data.data.slice(0,9).map((item) => (
              <ProductCard key={item.id} product_name={item.product_name} product_image={item.product_image} product_new_price={item.product_new_price} product_old_price={item.product_old_price} documentId={item.documentId} product_discription={item.product_discription}/>
              
            ))}
          </div>
          <div className='tab_products'>
          {Array.isArray(data?.data?.data) && data.data.data.slice(15,24).map((item) => (
              <ProductCard key={item.id} product_name={item.product_name} product_image={item.product_image} product_new_price={item.product_new_price} product_old_price={item.product_old_price} documentId={item.documentId} product_discription={item.product_discription} />
              
            ))}
            </div>
          
          <div className='tab_products'>
          {Array.isArray(data?.data?.data) && data.data.data.slice(7,16).map((item) => (
              <ProductCard key={item.id} product_name={item.product_name} product_image={item.product_image} product_new_price={item.product_new_price} product_old_price={item.product_old_price} documentId={item.documentId} product_discription={item.product_discription} />
              
            ))}
            </div>
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
