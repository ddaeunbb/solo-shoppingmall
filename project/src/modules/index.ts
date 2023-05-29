import { configureStore } from "@reduxjs/toolkit";
import ApiDataInterFace from "./apidata.interface";
import hamburgerModalSlice from "./hamburgerModalSlice";
import productSlice from "./productSlice";

export interface RootState {
  hamburgerModal: { isOpen: boolean };
  products: ApiDataInterFace[];
}

const store = configureStore({
  reducer: {
    hamburgerModal: hamburgerModalSlice.reducer,
    productlist: productSlice.reducer,
  },
});

export default store;
