import { configureStore } from "@reduxjs/toolkit";
import hamburgerModalSlice from "./hamburgerModalSlice";
import productSlice from "./productSlice";
import filterSlice from "./filterSlice";
import detailModalSlice from "./detailModalSlice";

const store = configureStore({
  reducer: {
    hamburgerModal: hamburgerModalSlice.reducer,
    productList: productSlice.reducer,
    filterList: filterSlice.reducer,
    detailModal: detailModalSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch