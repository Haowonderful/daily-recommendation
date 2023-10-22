import { configureStore } from "@reduxjs/toolkit";

import topicsSlice from "./topics/slice";
import headerSlice from "./header-slice";
import calendarSlice from "./calendar-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    header: headerSlice.reducer,
    calendar: calendarSlice.reducer,
    ui: uiSlice.reducer,
    topics: topicsSlice.reducer,
  },
});

export default store;
