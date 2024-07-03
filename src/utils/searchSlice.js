import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    chacheResults: (state, action) => {
      // console.log(state);
      state = Object.assign(state, action.payload);
      // console.log(state);
      // console.log(action.payload);
    },
  },
});

export const { chacheResults } = searchSlice.actions;
export default searchSlice.reducer;
