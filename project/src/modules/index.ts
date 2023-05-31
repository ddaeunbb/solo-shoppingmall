import { configureStore } from "@reduxjs/toolkit";
import hamburgerModalSlice from "./hamburgerModalSlice";
import productSlice from "./productSlice";
import filterSlice from "./filterSlice";

const store = configureStore({
  reducer: {
    hamburgerModal: hamburgerModalSlice.reducer,
    productList: productSlice.reducer,
    filterList: filterSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch