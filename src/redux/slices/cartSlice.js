import { createSlice } from "@reduxjs/toolkit";
import isEqual from "lodash.isequal";

const initialState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // добавляем пиццу в корзину
    addItem: (state, action) => {
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
    removeItem: (state, action) => {
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
        const index = newArr.findIndex(samePizza);

        if (index) {
          newArr.slice(1, index);
        }

        return (state.items = newArr);
      }
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
