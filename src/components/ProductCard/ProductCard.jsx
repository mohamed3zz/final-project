import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function ProductCard({product_name, product_new_price, product_old_price, product_image ,documentId}) {
  const navigate = useNavigate();
  return (
    <div className='productCard' onClick={() => {
      if (documentId) {
        navigate(documentId);
        setTimeout(() => {
          scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }, 0);
      }
    }}>
        <div className='productCard_img'>
            <img src={`${product_image}`}alt="" />
        </div>
        <div className='productCard_content'>
            <h6>{product_name}</h6>
            <div className='productCard_content_price'>
                <h6>{product_new_price}</h6>
                <p>{product_old_price}</p>
            </div>
            </div>
      
    </div>
  )
}
