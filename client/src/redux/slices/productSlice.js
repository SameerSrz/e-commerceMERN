import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productData } from "../../Constants";

const initialState = {
  items: [],
  status: null
}

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async() =>{
    // const response = await axios.get()
    const response = productData;
    if(response){
      return response.data;
    }
    else{
      
    }
  }
)

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state,action)=>{
      state.status = "pending"
    },
    [getProducts.fulfilled]: (state,action)=>{
      state.status = "success",
      state.items = action.payload
    },
    [getProducts.rejected]: (state,action)=>{
      state.status = "rejected"
    },
  }
})

export default productSlice.reducer;