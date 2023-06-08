import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import ApiDataInterFace from "./apidata.interface";

interface ProductType {
  products: ApiDataInterFace[];
}

const initialState: ProductType = {
  products: [],
};

export const setProducts = createAsyncThunk(
  "get/products",
  async (url: string)=> {
    const response = await fetch(url);
    const parseData = await response.json();
    return parseData.products;
  }
)

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
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
  extraReducers: (builder) => {
    builder.addCase(setProducts.fulfilled, (state, action: PayloadAction<ApiDataInterFace[]>) => {
      state.products = action.payload;
    });
  }
});

export const { setBookmark } = productSlice.actions;
export default productSlice;
