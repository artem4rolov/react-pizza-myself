import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzas",
  async (params) => {
    const { category, sorting, order, search, page } = params;

    const { data } = await axios.get(
      `https://64295b91ebb1476fcc479b12.mockapi.io/items?page=${
        page + 1
      }&limit=4${category}${sorting}${order}${search}`
    );

    return data;
  }
);

export const fetchCurrentPizza = createAsyncThunk(
  "pizza/fetchCurrentPizza",
  async (id) => {
    const { data } = await axios.get(
      `https://64295b91ebb1476fcc479b12.mockapi.io/items?id=${id}`
    );

    return data;
  }
);

const initialState = {
  pizzas: [],
  status: "",
  currentPizza: null,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // получить пиццы по фильтрам
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
      })
      // получить пиццы по фильтрам
      .addCase(fetchCurrentPizza.pending, (state, action) => {
        state.status = "loading";
        state.currentPizza = null;
      })
      .addCase(fetchCurrentPizza.fulfilled, (state, action) => {
        state.status = "success";
        state.currentPizza = action.payload;
      })
      .addCase(fetchCurrentPizza.rejected, (state, action) => {
        state.status = "";
        state.currentPizza = null;
      });
  },
});

export default pizzaSlice.reducer;
