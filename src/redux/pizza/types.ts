import { PizzaType } from "../../components/@types/pizza";

export type FetchPizzasType = {
  category: string;
  sorting: string;
  order: string;
  search: string;
  page: number;
};

export enum StatusValues {
  LOADING = "loading",
  SUCCESS = "success",
  FAILURE = "failure",
}

export type PizzaSliceType = {
  pizzas: PizzaType[];
  status: StatusValues;
  currentPizza: PizzaType[] | null;
};
