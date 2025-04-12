import { useQuery } from "@tanstack/react-query"
import { AxiosConfig } from "../axios/AxiosConfig";


export const getproducts = () => {
   return useQuery({ 
        queryKey: ['product'],
        queryFn:  () => AxiosConfig("api/product"),
   } );
}

export const getSingleproduct = (documentId) => {

   return useQuery({ 
        queryKey: ['product'],
        queryFn:  () => AxiosConfig(`api/product/${documentId}`),
   } );
}
export const getblogs = (documentId) => {

   return useQuery({ 
        queryKey: ['blog'],
        queryFn:  () => AxiosConfig("api/blog"),
   } );
}
