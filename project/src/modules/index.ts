import { configureStore } from "@reduxjs/toolkit";
import ApiDataInterFace from "./apidata.interface";
import hamburgerModalSlice from "./hamburgerModalSlice";
import productSlice from "./productSlice";

export interface RootState {
  hamburgerModal: { isOpen: boolean };
  productList: ApiDataInterFace[];
}

const store = configureStore({
  reducer: {
    hamburgerModal: hamburgerModalSlice.reducer,
    productList: productSlice.reducer,
  },
});

export default store;
