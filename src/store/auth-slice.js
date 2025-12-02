import { createSlice } from "@reduxjs/toolkit";
import { login } from "./auth-actions";

const initialState={
    error:null,
    loading:null,
    type:null,
    token:null,
    isLoggedIn:false
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout:(state)=>{
            state.token=null;
            state.isLoggedIn =false;
            state.type = null;
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(login.pending,(state)=>{
            state.pending = true;
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.pending = false;
            state.token = action.payload;
            state.isLoggedIn = true;
        })
        .addCase(login.rejected,(state,action)=>{
            state.pending=false;
            state.error = action.payload;
        })
    }
})
export const authActions = authSlice.actions;
export default authSlice.reducer;