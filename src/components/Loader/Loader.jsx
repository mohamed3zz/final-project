import React from 'react'
import { BiLoaderCircle } from "react-icons/bi";
import { useIsFetching } from '@tanstack/react-query';


export default function Loader() {
  const isFetching = useIsFetching();
  return  isFetching ?  <div className='loader'>
      <p>LOADING...</p>
      <BiLoaderCircle />
      </div>
      : null
  
}
