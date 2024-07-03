import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    menuShowUp: false,
    categoryValue: "All",
  },
  reducers: {
    toggleMenu: (state) => {
      state.menuShowUp = !state.menuShowUp;
    },
    closeMenu: (state) => {
      state.menuShowUp = false;
    },
    addCategoryValue: (state, action) => {
      state.categoryValue = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { toggleMenu, closeMenu, addCategoryValue } = appSlice.actions;
