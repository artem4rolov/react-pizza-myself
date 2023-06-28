import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PizzaType } from "../../components/@types/pizza";
import { PizzaSliceType, StatusValues } from "./types";
import { fetchCurrentPizza, fetchPizzas } from "./asyncActions";

const initialState: PizzaSliceType = {
  pizzas: [],
  status: StatusValues.LOADING,
  currentPizza: null,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // получить пиццы по фильтрам
      .addCase(fetchPizzas.pending, (state) => {
        state.status = StatusValues.LOADING;
        state.pizzas = [];
      })
      .addCase(
        fetchPizzas.fulfilled,
        (state, action: PayloadAction<PizzaType[]>) => {
          state.status = StatusValues.SUCCESS;
          state.pizzas = action.payload;
        }
      )
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = StatusValues.FAILURE;
        state.pizzas = [];
      })
      // получить пиццы по фильтрам
      .addCase(fetchCurrentPizza.pending, (state) => {
        state.status = StatusValues.LOADING;
        state.currentPizza = null;
      })
      .addCase(
        fetchCurrentPizza.fulfilled,
        (state, action: PayloadAction<PizzaType[]>) => {
          state.status = StatusValues.SUCCESS;
          state.currentPizza = action.payload;
        }
      )
      .addCase(fetchCurrentPizza.rejected, (state) => {
        state.status = StatusValues.FAILURE;
        state.currentPizza = null;
      });
  },
});

export default pizzaSlice.reducer;
