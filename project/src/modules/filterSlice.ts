import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryName } from "../types/categories";

type filterType = {
  category: CategoryName
}

const initialState: filterType = {
  category: 'total'
}

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setTab: (state, action: PayloadAction<CategoryName>)=> {
      state.category = action.payload;
    }
  }
})

export const { setTab } = filterSlice.actions;
export default filterSlice