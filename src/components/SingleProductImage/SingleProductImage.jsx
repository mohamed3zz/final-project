import React from 'react'
// import { useCart } from '../../context/CartContext';

export default function SingleProductImage({product_image , documentId}) {
  // const { addToCart } = useCart();
  // const itemInCart = cart.find((item) => item.id === documentId);
  
  
  // addToCart({product_image});
  
  
  return (
    <div className='SingleProductImage'>
        <img src={`${product_image}`} alt="" />
      
    </div>
  )
}
