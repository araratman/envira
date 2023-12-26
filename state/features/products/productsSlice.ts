import { createSlice } from "@reduxjs/toolkit"
import { filterProducts, getProducts } from "./productsApi"

const initialState = {
    categories: [
        { id: 1, item: "Clothes", icon: "tv" },
        { id: 2, item: "Shoes", icon: "tv" },
        { id: 3, item: "Bags", icon: "tv" },
        { id: 4, item: "Electronics", icon: "tv" },
        { id: 5, item: "Watch", icon: "tv" },
        { id: 6, item: "Jewelry", icon: "tv" },
        { id: 7, item: "Kitchen", icon: "tv" },
        { id: 8, item: "Toys", icon: "tv" },
    ],
    products: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, () => {
            console.log('....loading');
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload
        })
        .addCase(filterProducts.pending, ()=>{
            console.log('wait');
            
        })
        .addCase(filterProducts.fulfilled, (state, action)=>{
                    state.products = action.payload
                    
        })
    }
})

export default productsSlice.reducer