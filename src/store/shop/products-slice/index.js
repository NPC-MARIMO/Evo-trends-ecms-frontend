import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

const initialState ={
    isLoading : false,
    productList : [],
    productDetails : null
}


export const fetchAllFilteredProducts = createAsyncThunk('/products/fetchallproducts', async ({filterParams, sortParams}) => {
    const query = new URLSearchParams({
        ...filterParams,
        sortBy : sortParams
    })
    
    const result = await axios.get(`http://localhost:5000/api/shop/products/get?${query}`)
    return result?.data
})

export const fetchProductDetails = createAsyncThunk('/products/fetchproductdetails', async (id) => {
   
    
    const result = await axios.get(`http://localhost:5000/api/shop/products/get/${id}`)
    return result?.data
})



const ShoppingProductSlice = createSlice({
    name : "shoppingProduct",
    initialState,
    reducers : {
        setProductDetails : (state) => {
            state.productDetails = null
        }
    },
    extraReducers : (builder) => {
        builder.addCase(fetchAllFilteredProducts.pending, (state, action) => {
            state.isLoading = true
        }).addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.productList = action.payload.data
        }).addCase(fetchAllFilteredProducts.rejected, (state) => {
            state.isLoading = false;
            state.productList = []
        }).addCase(fetchProductDetails.pending, (state) => {
            state.isLoading = true
        }).addCase(fetchProductDetails.fulfilled, (state, action) => {
            state.isLoading = false;
            state.productDetails = action.payload.data
        }).addCase(fetchProductDetails.rejected, (state) => {
            state.isLoading = false;
            state.productDetails = null
        })
    }
})

export default ShoppingProductSlice.reducer

export const {setProductDetails} = ShoppingProductSlice.actions