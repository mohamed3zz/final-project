import React from 'react'
import { CiStar } from 'react-icons/ci'
import Button from '../Button/Button'
export default function SingleProductContent() {
  return (
    <div className='singleProduct_content'>
         <h4>Handlebar Phone Mount</h4>
         <div className='SingleProduct_Content_Rate'>
         <CiStar />
         <CiStar />
         <CiStar />
         <CiStar />
         <CiStar />
         <p>No reviews</p>
         </div>
         <div className='singleProduct_content_price'>
        <h6>$80.00</h6>
        <p>$90.00</p>
        </div>
        <div className='singleProduct_content_description'>
        <p>Experience unparalleled freedom and functionality with the MotoShield Tank Bag, your ultimate companion for every motorcycle adventure. Uncompromising Durability: Crafted from ballistic nylon, the MotoShield boasts exceptio...</p>
        </div>
        <Button text={"ADD TO CART"}/>
        </div>
                       
                        
      
  )
}
