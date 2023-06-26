import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { PizzaType } from "../../components/@types/pizza";

type FetchPizzasType = {
  category: string;
  sorting: string;
  order: string;
  search: string;
  page: number;
};

enum StatusValues {
  LOADING = "loading",
  SUCCESS = "success",
  FAILURE = "failure",
}

type PizzaSliceType = {
  pizzas: PizzaType[];
  status: StatusValues;
  currentPizza: PizzaType[] | null;
};

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzas",
  async (params: FetchPizzasType) => {
    const { category, sorting, order, search, page } = params;

    const { data } = await axios.get<PizzaType[]>(
      `https://64295b91ebb1476fcc479b12.mockapi.io/items?page=${
        page + 1
      }&limit=4${category}${sorting}${order}${search}`
    );

    return data;
  }
);

export const fetchCurrentPizza = createAsyncThunk(
  "pizza/fetchCurrentPizza",
  async (id: string) => {
    const { data } = await axios.get<PizzaType[]>(
      `https://64295b91ebb1476fcc479b12.mockapi.io/items?id=${id}`
    );

    return data;
  }
);

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
