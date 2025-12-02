import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    products:[],
    error:null,
    loading:false
}

const adminProductSlice = createSlice({
    name:"adminProducts",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(addProduct.pending,(state)=>{
            state.pending=true;
        })
        .addCase(addProduct.fulfilled,(state,action)=>{
            state.pending=false;
            state.products.push(action.payload);
        })
        .addCase(addProduct.rejected,(state,action)=>{
            state.pending=false;
            state.error = action.payload;
        })
        .addCase(fetchProductList.pending,(state)=>{
            state.pending=true;
        })
        .addCase(fetchProductList.fulfilled,(state,action)=>{
            state.pending=false;
            state.products = action.payload;
        })
        .addCase(fetchProductList.rejected,(state,action)=>{
            state.pending=false;
            state.error = action.payload;
        })
        .addCase(deleteProduct.pending,(state)=>{
            state.pending=true;
        })
        .addCase(deleteProduct.fulfilled,(state,action)=>{
            state.pending=false;
            state.products = state.products.filter(ele=>ele.id!==action.payload);
        })
        .addCase(deleteProduct.rejected,(state,action)=>{
            state.pending=false;
            state.error = action.payload;
        })        
        
    }
})

export const addProduct = createAsyncThunk(
    "adminProducts/addProducts",async(product,thunkAPI)=>{
        try{
            const res= await axios.post("https://e-commerce-website-b124a-default-rtdb.firebaseio.com/products.json",product);
            return {...product,id:res.data.name}

        }catch(err){
            return thunkAPI.rejectWithValue("Failed to Add Product");
        }


    }
)
export const fetchProductList = createAsyncThunk(
    "adminProducts/fetchProductList",async(_,thunkAPI)=>{
        try{
            const res = await axios.get("https://e-commerce-website-b124a-default-rtdb.firebaseio.com/products.json");
            const productList = Object.keys(res.data).map(ele=>{
                return {id:ele,...res.data[ele]}
            });
            return productList;
        }catch(err){
            return thunkAPI.rejectWithValue("Failed to fetch Products");
        }
    }
)

export const deleteProduct = createAsyncThunk(
    "adminProducts/deleteProduct",async(id,thunkAPI)=>{
        try{
            await axios.delete(`https://e-commerce-website-b124a-default-rtdb.firebaseio.com/products/${id}.json`)
            return id;
        }catch(err){
            return thunkAPI.rejectWithValue("Failed to delete the product");
        }
    }
)
export default adminProductSlice.reducer;