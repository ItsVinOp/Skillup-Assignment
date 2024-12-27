// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "../feature/popupSlice";

export const store = configureStore({
  reducer: {
    popup: popupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
