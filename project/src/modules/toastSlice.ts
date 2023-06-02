import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

interface Toast {
  bookmark: boolean;
  message : '상품이 북마크에 추가되었습니다.' | '상품이 북마크에서 제거되었습니다.';
}

interface ToastType {
  toastList: Toast[];
}

const initialState: ToastType = {
  toastList: [],
}

const toastSlice = createSlice({
  name: "toastSlice",
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<boolean>)=> {
      if (action.payload){
        let obj: Toast= {bookmark : true, message: '상품이 북마크에 추가되었습니다.'};
        state.toastList.push(obj);
      } else {
        let obj: Toast = {bookmark: false, message: '상품이 북마크에서 제거되었습니다.'};
        state.toastList.push(obj);
      }
      console.log(state.toastList)
    },

    removeToast: (state)=> {
      if(state.toastList.length === 0) return;
      state.toastList.shift();
    }
  }
})

export const { addToast, removeToast} = toastSlice.actions;
export default toastSlice