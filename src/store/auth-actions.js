import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const login = createAsyncThunk(
    "auth/login",async(userData,thunkAPI)=>{
        try{
            const res = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBfsyJB-lvBYodAs_2Nu0TQfse-V5JiMlU",userData);           
            const idToken = res.data.idToken;
            localStorage.setItem("token",idToken);
            return idToken;
        }catch(err){
            return thunkAPI.rejectWithValue("Login Failed");
        }
    }
)

export const resetPassword = createAsyncThunk(
    "auth/resetPassword",async(email,thunkAPI)=>{
        try {
            const response = await fetch(
              "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBfsyJB-lvBYodAs_2Nu0TQfse-V5JiMlU",
              {
                method: "POST",
                body: JSON.stringify({
                  requestType: "PASSWORD_RESET",
                  email
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
      
            const data = await response.json();
      
            if (!response.ok) {
              alert(data.error.message);
              return;
            }
      
            alert("Password reset link sent to your email!");
          } catch (err) {
            console.log(err);
          }
    }
)

export const signUp = createAsyncThunk(
    "auth/signUp",async({userData,login},thunkAPI)=>{
        try{
            const res = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBfsyJB-lvBYodAs_2Nu0TQfse-V5JiMlU",userData);
            alert("Registration Successful");
            login();
          }catch(err){
            console.log(err);
          }
    }
)