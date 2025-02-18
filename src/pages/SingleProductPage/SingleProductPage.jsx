import React from 'react'
import SingleProductImage from '../../components/SingleProductImage/SingleProductImage'
import SingleProductContent from '../../components/SingleProductContent/SingleProductContent'
import {getSingleproduct, getsixthSingleproduct } from '../../apis/FetchApi'
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';

export default function SingleProductPage() {
  const { id } = useParams();
  const {data} = getSingleproduct(id);
  console.log(data?.data?.data);
    const {data:data2} = getsixthSingleproduct(id);
    console.log(data2?.data?.data);

     


  
  return (
    <div className='SingleProduct'>
          
            { data?.data?.data?
            <SingleProductImage product_image={data?.data?.data.product_image} />
            :''
            }
            {
              data?.data?.data ?
              <SingleProductContent product_name={data?.data?.data.product_name} product_new_price={data?.data?.data.product_new_price} product_old_price={data?.data?.data.product_old_price} prouct_discription={data?.data?.data.product_discription} />
              :''
            }
              {/* { seconddata?.data?.data ?
            <SingleProductImage product_image={seconddata?.data?.data.product_image} />
            :''
            
            }
            {
              seconddata?.data?.data ?
              <SingleProductContent product_name={seconddata?.data?.data.product_name} product_new_price={seconddata?.data?.data.product_new_price} product_old_price={seconddata?.data?.data.product_old_price} prouct_discription={seconddata?.data?.data.product_discription} />
              :''
            }
              { thirddata?.data?.data ?
            <SingleProductImage product_image={thirddata?.data?.data.product_image} />
            :''

              }
            {
              thirddata?.data?.data ?
              <SingleProductContent product_name={thirddata?.data?.data.product_name} product_new_price={thirddata?.data?.data.product_new_price} product_old_price={thirddata?.data?.data.product_old_price} prouct_discription={thirddata?.data?.data.product_discription} />
              :''
              
            }
              { fourthdata?.data?.data ?
            <SingleProductImage product_image={fourthdata?.data?.data.product_image} />
            :''
            
              }
            {
              fourthdata?.data?.data ?
              <SingleProductContent product_name={fourthdata?.data?.data.product_name} product_new_price={fourthdata?.data?.data.product_new_price} product_old_price={fourthdata?.data?.data.product_old_price} prouct_discription={fourthdata?.data?.data.product_discription} />
              :''
            }
              { fifthdata?.data?.data ?
            <SingleProductImage product_image={fifthdata?.data?.data.product_image} />
            :''
              }
            {
              fifthdata?.data?.data ?
              <SingleProductContent product_name={fifthdata?.data.data.product_name} product_new_price={fifthdata?.data?.data.product_new_price} product_old_price={fifthdata?.data?.data.product_old_price} prouct_discription={fifthdata?.data?.data.product_discription} />
              :''
            } */}
              { data2?.data?.data ?
            <SingleProductImage product_image={data2?.data?.data.product_image} />
            :''
              }
            {
              data2?.data?.data ?
              <SingleProductContent product_name={data2?.data.data.product_name} product_new_price={data2?.data?.data.product_new_price} product_old_price={data2?.data?.data.product_old_price} prouct_discription={data2?.data?.data.product_discription} />
              :''
            }
              {/* { seventhdata?.data?.data ?
            <SingleProductImage product_image={seventhdata?.data?.data.product_image} />
            :''
              }
            {
              seventhdata?.data?.data ?
              <SingleProductContent product_name={seventhdata?.data.data.product_name} product_new_price={seventhdata?.data?.data.product_new_price} product_old_price={seventhdata?.data?.data.product_old_price} prouct_discription={seventhdata?.data?.data.product_discription} />
              :''
} */}
        
    </div>
  )
}
