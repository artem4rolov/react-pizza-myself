import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../components/@types/pizza";
import { getCartFromLocalStorage } from "../../utils/getCartFromLocalStorage";

type ItemCartSlice = {
  items: CartItem[];
  totalPrice: number;
};

const initialState: ItemCartSlice = {
  items: getCartFromLocalStorage(),
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // добавляем пиццу в корзину, увеличиваем количество пицц
    addItem: (state, action: PayloadAction<CartItem>) => {
      const pizza = action.payload;

      // если такая пицца уже есть в корзине
      const samePizza = state.items.find(
        (item) =>
          item.id === pizza.id &&
          item.sizes === pizza.sizes &&
          item.types === pizza.types
      );

      // проверяем, если пицца которая уже есть в корзине и новая - абсолюно одинаковые (тесто, размер)
      if (samePizza) {
        const newArr = state.items;

        newArr.map((item) => {
          // находим пиццу в нашей корзине и увеличиваем ее счетчик (count) на 1
          if (
            item.id === samePizza.id &&
            item.sizes === samePizza.sizes &&
            item.types === samePizza.types
          ) {
            item.count++;
          }
          return item;
        });

        state.items = newArr;
        return;
      }

      // если такой пиццы нет - добавляем свойство count
      if (!samePizza) {
        state.items.push(pizza);
      }
      return;
    },
    // уменьшить количество пицц
    minusItem: (state, action: PayloadAction<CartItem>) => {
      const pizza = action.payload;

      // проверяем, есть ли такая пицца уже в корзине или нет
      const samePizza = state.items.find(
        (item) =>
          item.id === pizza.id &&
          item.sizes === pizza.sizes &&
          item.types === pizza.types
      );

      if (samePizza) {
        const newArr = state.items;

        if (samePizza.count && samePizza.count >= 1) {
          newArr.map((item) => {
            if (
              item.id === pizza.id &&
              item.sizes === pizza.sizes &&
              item.types === pizza.types
            ) {
              item.count--;
            }
            return item;
          });

          state.items = newArr;
        }
      }
    },
    // удалить пиццу из корзины
    removeItem: (state, action: PayloadAction<CartItem>) => {
      const pizza = action.payload;

      // проверяем, есть ли такая пицца уже в корзине или нет
      const samePizza = state.items.find(
        (item) =>
          item.id === pizza.id &&
          item.sizes === pizza.sizes &&
          item.types === pizza.types
      );

      if (samePizza) {
        const newArr = state.items;

        const index = newArr.indexOf(samePizza);

        if (index > -1) {
          newArr.splice(index, 1);
        }

        state.items = newArr;
      }
    },
    // итоговая стоимость
    changeTotalPrice: (state) => {
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.count,
        0
      );
    },
    // очистить корзину
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, minusItem, changeTotalPrice, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
