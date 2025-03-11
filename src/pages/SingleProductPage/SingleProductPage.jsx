import React from 'react'
import SingleProductImage from '../../components/SingleProductImage/SingleProductImage'
import SingleProductContent from '../../components/SingleProductContent/SingleProductContent'
import {getSingleproduct } from '../../apis/FetchApi'
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';



export default function SingleProductPage() {
  const { id } = useParams();
  const {data} = getSingleproduct(id);
  console.log(data?.data?.data);
 
 
  
  return (
    <div className='SingleProduct'>
          
            { data?.data?.data?
            <SingleProductImage product_image={data?.data?.data.product_image} documentId={data?.data?.data.documentId} />
            :''
            }
            {
              data?.data?.data ?
              <SingleProductContent product_image={data?.data?.data.product_image} product_name={data?.data?.data.product_name} product_new_price={data?.data?.data.product_new_price} product_old_price={data?.data?.data.product_old_price} prouct_discription={data?.data?.data.product_discription} documentId={data?.data?.data.documentId} />
              :''
            }
    
        
    </div>
  )
}
