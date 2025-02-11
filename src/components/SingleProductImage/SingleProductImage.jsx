import React from 'react'

export default function SingleProductImage({product_image}) {
  return (
    <div className='SingleProductImage'>
        <img src={`${product_image}`} alt="" />
      
    </div>
  )
}
