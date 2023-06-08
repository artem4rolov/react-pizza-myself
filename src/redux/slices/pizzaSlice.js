import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzas",
  async (params) => {
    const { category, sorting, order, search, page } = params;

    console.log(String(params.page));

    const { data } = await axios.get(
      `https://64295b91ebb1476fcc479b12.mockapi.io/items?page=${
        page + 1
      }&limit=4${category}${sorting}${order}${search}`
    );

    return data;
  }
);

const initialState = {
  pizzas: [],
  status: "",
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state, action) => {
        state.status = "loading";
        state.pizzas = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.status = "success";
        state.pizzas = action.payload;
      })
      .addCase(fetchPizzas.rejected, (state, action) => {
        state.status = "";
        state.pizzas = [];
      });
  },
});

export default pizzaSlice.reducer;
