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
    switchDetailModal : (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setDetailModalContent : (state, action: PayloadAction<ApiDataInterFace>) => {
      state.modalContent = action.payload;
    },
    setDetailModalBookmark : (state) => {
      state.modalContent.bookmark = !state.modalContent.bookmark;
    }
  }
})

export const { switchDetailModal, setDetailModalBookmark ,setDetailModalContent } = detailModalSlice.actions; 
export default detailModalSlice;