import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SearchTypeSlice } from "./types";

const initialState: SearchTypeSlice = {
  searchValue: "", // значение поиска пицц
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
