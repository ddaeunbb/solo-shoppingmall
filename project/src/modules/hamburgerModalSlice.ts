import { createSlice } from "@reduxjs/toolkit";

interface HamburgerModalType {
  isOpen: boolean;
}

const initialState: HamburgerModalType = {
  isOpen: false,
};

const hamburgerModalSlice = createSlice({
  name: "hamburgerModalSlice",
  initialState,
  reducers: {
    switchModal: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { switchModal, closeModal } = hamburgerModalSlice.actions;
export default hamburgerModalSlice;
