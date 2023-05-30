import { configureStore } from "@reduxjs/toolkit";
import ApiDataInterFace from "./apidata.interface";
import hamburgerModalSlice from "./hamburgerModalSlice";
import productSlice from "./productSlice";

const store = configureStore({
  reducer: {
    hamburgerModal: hamburgerModalSlice.reducer,
    productList: productSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch