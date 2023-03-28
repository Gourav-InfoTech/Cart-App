import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("getdata", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state: any, action) => {
      state.products = action.payload;
    });
  },
});
export default productSlice;
// export const { addToCart, removeFromCart } = productSlice.actions;
