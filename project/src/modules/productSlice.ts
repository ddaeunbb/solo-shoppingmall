import { createSlice } from "@reduxjs/toolkit";
import ApiDataInterFace from "./apidata.interface";

interface RootState {
  products: ApiDataInterFace[];
}

const initialState: RootState = {
  products: [],
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice;
