import { useQuery } from "@tanstack/react-query"
import { AxiosConfig } from "../axios/AxiosConfig";


export const getproducts = () => {
   return useQuery({ 
        queryKey: ['product'],
        queryFn:  () => AxiosConfig("/product"),
   } );
}
export const getSingleproduct = (documentId) => {
   return useQuery({ 
        queryKey: ['product'],
        queryFn:  () => AxiosConfig(`/product/${documentId}`),
   } );
}
export const getsecondproducts = () => {
   return useQuery({ 
        queryKey: ['product2'],
        queryFn:  () => AxiosConfig("/product2s"),
   } );
}
export const getsecondSingleproduct = (documentId) => {
   return useQuery({ 
        queryKey: ['product2'],
        queryFn:  () => AxiosConfig(`/product2s/${documentId}`),
   } );
}

export const getthirdproducts = () => {
   return useQuery({ 
        queryKey: ['product3'],
        queryFn:  () => AxiosConfig("/product3s"),
   } );
}
export const getthirdSingleproduct = (documentId) => {
   return useQuery({ 
        queryKey: ['product3'],
        queryFn:  () => AxiosConfig(`/product3s/${documentId}`),
   } );
}
export const getfourthproducts = () => {
   return useQuery({ 
        queryKey: ['product4'],
        queryFn:  () => AxiosConfig("/product4s"),
   } );
}
export const getfourthSingleproduct = (documentId) => {
   return useQuery({ 
        queryKey: ['product4'],
        queryFn:  () => AxiosConfig(`/product4s/${documentId}`),
   } );
}
export const getfifthproducts = () => {
   return useQuery({ 
        queryKey: ['product5'],
        queryFn:  () => AxiosConfig("/product5s"),
   } );
}
export const getfifthSingleproduct = (documentId) => {
   return useQuery({ 
        queryKey: ['product5'],
        queryFn:  () => AxiosConfig(`/product5s/${documentId}`),
   } );
}
export const getsixthproducts = () => {
   return useQuery({ 
        queryKey: ['product6'],
        queryFn:  () => AxiosConfig("/product6s"),
   } );
}
export const getsixthSingleproduct = (documentId) => {
   return useQuery({ 
        queryKey: ['product6'],
        queryFn:  () => AxiosConfig(`/product6s/${documentId}`),
   } );
}
export const getseventhproducts = () => {
   return useQuery({ 
        queryKey: ['product7'],
        queryFn:  () => AxiosConfig("/product7s"),
   } );
}
export const getseventhSingleproduct = (documentId) => {
   return useQuery({ 
        queryKey: ['product7'],
        queryFn:  () => AxiosConfig(`/product7s/${documentId}`),
   } );
}
