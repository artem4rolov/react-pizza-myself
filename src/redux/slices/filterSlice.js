import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    value: "популярности",
    key: "rating",
    order: "asc",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    // категория пиццы
    setCatgeoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    // фильтр сортировки
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setCatgeoryId, setSort } = filterSlice.actions;

export default filterSlice.reducer;
