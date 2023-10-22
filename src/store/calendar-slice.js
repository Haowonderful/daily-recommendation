import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const calendarSlice = createSlice({
  name: "calendar",
  initialState: { selectedDate: dayjs().format("YYYY-MM-DD") },
  reducers: {
    setDate(state, action) {
      state.selectedDate = action.payload;
    },
  },
});

export const calendarActions = calendarSlice.actions;

export default calendarSlice;
