import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AxiosConfig } from "../axios/AxiosConfig"
// import { getproducts } from "../apis/FetchApi"

const initialState = {
    ProductData: [],
    isLoading: false,
    error: null

}
const getAllProducts = createAsyncThunk("get_all_products", async () => {
    try {
        const {data} = await AxiosConfig({
            url:`api/product`
        })

        return data 
    }
    catch (error) {
        return error

    }
}
)
const getAllProductsSlice = createSlice({
    name :"getAllProducts",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending , (state , action)=> {
            state.isLoading = true ;


        })
        .addCase(getAllProducts.fulfilled , (state , action)=> {
            state.isLoading = false ;
            state.ProductData = action.payload;


        })
        .addCase(getAllProducts.rejected , (state , action)=> {
            state.isLoading = false ;
            state.error = action.payload;


        })
    }
})
const getAllProductsReducer = getAllProductsSlice.reducer;
export {getAllProducts, getAllProductsReducer};