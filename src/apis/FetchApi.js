import { useQuery } from "@tanstack/react-query"
import { AxiosConfig } from "../axios/AxiosConfig";


export const getproducts = () => {
   return useQuery({ 
        queryKey: ['product'],
        queryFn:  () => AxiosConfig("api/product"),
   } );
}
export const getsixthproducts = () => {
   return useQuery({ 
        queryKey: ['product6'],
        queryFn:  () => AxiosConfig("api/product6s"),
   } );
}

export const getSingleproduct = (documentId) => {

   return useQuery({ 
        queryKey: ['product'],
        queryFn:  () => AxiosConfig(`api/product/${documentId}`),
   } );
}
export const getsixthSingleproduct = (documentId) => {
   return useQuery({ 
        queryKey: ['product6'],
        queryFn:  () => AxiosConfig(`api/product6s/${documentId}`),
   } );
}