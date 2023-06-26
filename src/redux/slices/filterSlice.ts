import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SortValueType } from "../../components/Sort/Sort";

type FilterTypeSlice = {
  categoryId: number;
  sort: SortValueType;
  page: number;
};

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
    setCatgeoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    // фильтр сортировки
    setSort: (state, action: PayloadAction<SortValueType>) => {
      state.sort = action.payload;
    },
    // пагинация
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    // берем параметры из url
    setFiltersFromUrl: (state, action: PayloadAction<FilterTypeSlice>) => {
      state.categoryId = Number(action.payload.categoryId);
      state.page = Number(action.payload.page);
      state.sort = action.payload.sort;
    },
  },
});

export const { setCatgeoryId, setSort, setPage, setFiltersFromUrl } =
  filterSlice.actions;

export default filterSlice.reducer;
