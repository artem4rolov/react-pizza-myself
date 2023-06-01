import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    // пагинация
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = pizzaSlice.actions;

export default pizzaSlice.reducer;
