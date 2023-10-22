import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "header",
  initialState: { selectedPageId: "home" },
  reducers: {
    setPage(state, action) {
      state.selectedPageId = action.payload;
    },
  },
});

export const headerActions = headerSlice.actions;

export default headerSlice;
