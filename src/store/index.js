import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import adminProductReducer from "./slices/adminProductSlice";

const store = configureStore({
    reducer:{auth:authReducer,adminProducts:adminProductReducer}
})

export default store;