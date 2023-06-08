import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import ApiDataInterFace from "./apidata.interface";

interface ProductType {
  products: ApiDataInterFace[];
}

const initialState: ProductType = {
  products: [],
};

export const setData = createAsyncThunk(
  "get/products",
  async (url: any)=> {
    const response = await fetch(url);
    const parseData = await response.json();
    return parseData.products;
  }
)

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
  extraReducers: (builder) => {
    builder.addCase(setData.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  }
});

export const { setProducts, setBookmark } = productSlice.actions;
export default productSlice;
