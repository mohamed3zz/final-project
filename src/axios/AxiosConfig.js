import Axios from "axios";

const Base_Url = "http://localhost:1337";



export const AxiosConfig = Axios.create({
    baseURL: Base_Url,
   
});
AxiosConfig.defaults.headers.common.Accept = "application/json";
AxiosConfig.defaults.headers.common["Content-Type"] = "application/json";