import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mess: "hello", 
    isLoggedIn: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
})
// console.log(authSlice);
export default authSlice.reducer;