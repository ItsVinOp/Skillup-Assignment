// src/redux/popupSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface PopupState {
  isPopupVisible: boolean;
}

const initialState: PopupState = {
  isPopupVisible: false,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    showPopup: (state: PopupState) => {
      state.isPopupVisible = true;
    },
    hidePopup: (state) => {
      state.isPopupVisible = false;
    },
  },
});

export const { showPopup, hidePopup } = popupSlice.actions;

export default popupSlice.reducer;
