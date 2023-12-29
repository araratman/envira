import { createAsyncThunk } from "@reduxjs/toolkit";
import myaxios from "../../../myAxios";

export const getProducts = createAsyncThunk(
    "get/products",
    async (id: any) => {
        const { data } = id == 0 ? await myaxios.get('products?offset=0&limit=10') : await myaxios.get(`categories/${id}/products`)

        return data
    }
)

export const filterProducts = createAsyncThunk(
    "get/filteredproducts",
    async (price: any) => { 
        const { data } = price.category ? 
        await myaxios.get(`https://api.escuelajs.co/api/v1/products/?price_min=${price.min}&price_max=${price.max}&categoryId=${price.category}`) 
        : await myaxios.get(`https://api.escuelajs.co/api/v1/products/?price_min=${price.min}&price_max=${price.max}`)
        
        return data

    }
)