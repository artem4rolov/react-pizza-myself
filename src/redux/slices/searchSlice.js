import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
});

export const { setPage } = searchSlice.actions;

export default searchSlice.reducer;
