import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import pizzas from "./slices/pizzaSlice";
import search from "./slices/searchSlice";
import cart from "./slices/cartSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    filter,
    pizzas,
    search,
    cart,
  },
});

// типизация state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// типизация dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
