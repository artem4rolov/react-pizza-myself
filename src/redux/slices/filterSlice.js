import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    value: "популярности (по возрастанию)",
    key: "rating",
    order: "asc",
  },
  page: 0,
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
    // пагинация
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setCatgeoryId, setSort, setPage } = filterSlice.actions;

export default filterSlice.reducer;
