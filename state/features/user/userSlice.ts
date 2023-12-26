import { createSlice } from "@reduxjs/toolkit";
import { addNewUserThunk, getUserThunk } from "./userApi";


const initialState: any = {
  user: {}
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserThunk.pending, () => {
        console.log("...loading");
      })
      .addCase(getUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        
      })
      .addCase(getUserThunk.rejected, () => {
        console.log("...rejected");
      })
      .addCase(addNewUserThunk.pending, ()=>{
        console.log('wait');
        
      })
      .addCase(addNewUserThunk.fulfilled, (state, action)=>{
        state.user = action.payload
      })
  },
});

export default userSlice.reducer;