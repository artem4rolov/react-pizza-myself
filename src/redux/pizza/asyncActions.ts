import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchPizzasType } from "./types";
import { PizzaType } from "../../components/@types/pizza";
import axios from "axios";

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
