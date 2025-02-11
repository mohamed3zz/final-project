import React from 'react'
import { CiStar } from 'react-icons/ci'
import Button from '../Button/Button'
export default function SingleProductContent({product_name, product_new_price, product_old_price, prouct_discription}) {
  return (
    <div className='singleProduct_content'>
         <h4>{product_name}</h4>
         <div className='SingleProduct_Content_Rate'>
         <CiStar />
         <CiStar />
         <CiStar />
         <CiStar />
         <CiStar />
         <p>No reviews</p>
         </div>
         <div className='singleProduct_content_price'>
        <h6>{product_new_price}</h6>
        <p>{product_old_price}</p>
        </div>
        <div className='singleProduct_content_description'>
        <p>{prouct_discription}</p>
        </div>
        <Button text={"ADD TO CART"}/>
        </div>
                       
                        
      
  )
}
