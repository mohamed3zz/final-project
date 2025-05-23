import React, { useEffect } from 'react'
import { getproducts } from '../../apis/FetchApi';
import ProductCard from '../../components/ProductCard/ProductCard';

export default function ProductsPage() {
      useEffect (() => {
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    // behavior: "smooth",
                    
                })
            }, 0);
            
        }, [])
  
     const {data } = getproducts();
  return (
    <div className='ProductsPage'>
      <div data-aos="fade-down">
        <h2 >ALL PRODUCTS</h2>
        <div className='ProductsPage_container'>
             {Array.isArray(data?.data?.data) && data.data.data.slice(0,26).map((item) => (
                          <ProductCard key={item.id} product_name={item.product_name} product_image={item.product_image} product_new_price={item.product_new_price} product_old_price={item.product_old_price} documentId={item.documentId} product_discription={item.product_discription}/>
                      ))}

</div>
        </div>
      
    </div>
  )
}
