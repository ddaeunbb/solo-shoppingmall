import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ToastType {
  isAdd: boolean;
}

const initialState: ToastType = {
  isAdd: false,
}

const toastSlice = createSlice({
  name: "toastSlice",
  initialState,
  reducers: {
    setToast: (state, action: PayloadAction<boolean>)=>{
      state.isAdd = action.payload;
    }
  }
})

export const { setToast } = toastSlice.actions;
export default toastSlice