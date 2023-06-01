import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ApiDataInterFace from "./apidata.interface";

interface ProductType {
  products: ApiDataInterFace[];
}

const initialState: ProductType = {
  products: [],
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ApiDataInterFace[]>) => {
      state.products = action.payload;
    },

    setBookmark: (state, action: PayloadAction<number>)=> {
      state.products = state.products.map(product => {
        if(product.id === action.payload){
          if (product.bookmark === undefined) product.bookmark = true;
          else product.bookmark = !product.bookmark;
        }
        return product
      })
    }
  },
});

export const { setProducts, setBookmark } = productSlice.actions;
export default productSlice;
