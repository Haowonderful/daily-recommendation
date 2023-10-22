import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {},
    loading: false,
    hasError: false,
  },
  reducers: {
    setTopics(state, action) {
      state.topics = action.payload;
    },
    addTopic(state, action) {
      const { id, title, description, image, time, category } = action.payload;
      state.topics[id] = {
        title,
        description,
        image,
        time,
        category,
      };
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setHasError(state, action) {
      state.hasError = action.payload;
    },
  },
});

export const topicsActions = topicsSlice.actions;

export default topicsSlice;
