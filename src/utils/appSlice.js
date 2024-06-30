import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    menuShowUp: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.menuShowUp = !state.menuShowUp;
    },
    closeMenu: (state) => {
      state.menuShowUp = false;
    },
  },
});

export default appSlice.reducer;
export const { toggleMenu, closeMenu } = appSlice.actions;
