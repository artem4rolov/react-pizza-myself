import { CartItem } from "../../components/@types/pizza";

export type ItemCartSlice = {
  items: CartItem[];
  totalPrice: number;
};
