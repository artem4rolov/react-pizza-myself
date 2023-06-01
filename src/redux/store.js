import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import pizzaReducer from "./slices/pizzaSlice";
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    pizza: pizzaReducer,
    search: searchReducer,
  },
});
