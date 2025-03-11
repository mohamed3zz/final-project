import { configureStore } from "@reduxjs/toolkit";
import { getAllProductsReducer } from "../Slice/GetAllProducts";

const store = configureStore({
    reducer: {
        product : getAllProductsReducer,

    }
})
export { store };