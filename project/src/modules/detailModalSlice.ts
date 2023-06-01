import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ApiDataInterFace from "./apidata.interface";

interface DetailModalType {
  isOpen: boolean;
  modalContent: ApiDataInterFace;
}

const initialState: DetailModalType = {
  isOpen: false,
  modalContent : {} as ApiDataInterFace,
}

const detailModalSlice = createSlice({
  name: "detailModalSlice",
  initialState,
  reducers : {
    switchDetailModal : (state) => {
      state.isOpen = !state.isOpen;
    },
    setModalContent : (state, action: PayloadAction<ApiDataInterFace>) => {
      state.modalContent = action.payload;
    }
  }
})

export const { switchDetailModal, setModalContent } = detailModalSlice.actions; 
export default detailModalSlice;