import React from "react";
import { useNavigate } from "react-router";

import { addItem } from "../../redux/slices/cartSlice";

import s from "./Pizza.module.scss";
import { CartItem, PizzaType } from "../@types/pizza";
import { useAppDispatch, useAppSelector } from "../../redux/store";

// варинты теста
const dough = ["тонкое", "традиционное"];

type PizzaProps = {
  pizza: PizzaType;
};

export const Pizza: React.FC<PizzaProps> = ({ pizza }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { items } = useAppSelector((state) => state.cart);
  const [activeDough, setActiveDough] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  // счетчик пицц в корзине конкрентного типа
  const [count, setCount] = React.useState(0);
  // объект пиццы в корзину
  const [pizzaCart, setPizzaCart] = React.useState<CartItem | undefined>();

  // достаем данные пицца из props
  const { id, types, sizes, price, title, imageUrl } = pizza;

  // меняем цену в зависимости от размера пиццы
  const pizzaPrice = (price: number) => {
    switch (activeSize) {
      case 0:
        return (price += 0);
      case 1:
        return (price += 481);
      case 2:
        return (price += 710);
      default:
        return price;
    }
  };

  // количество пицц одного вида (но разных размеров и теста)
  const checkCount = () => {
    let arr: CartItem[] = [];

    for (let i = 0; i < items.length; i++) {
      // ищем одинаковые пиццы в корзине по id (их может быть несколько, поскольку у каждой разный размер и тесто)
      if (items[i].id === id) {
        arr.push(items[i]);
      }
    }

    // выводим количество одинаковых пицц в кнопку "добавить" у каждого компонента пиццы на главной странице
    setCount(arr.reduce((sum, item) => sum + item.count, 0));
    return;
  };

  React.useEffect(() => {
    checkCount();
    localStorage.setItem("cart", JSON.stringify(items));

    return () => {};
  }, [items]);

  // готовый объект пиццы для корзины
  React.useEffect(() => {
    if (pizza) {
      const cartItem: CartItem = {
        ...pizza,
        types: types.map((type, index) => {
          if (type === activeDough) {
            return dough[type];
          } else {
            return dough[activeDough];
          }
        })[0],
        sizes: String(pizza.sizes[activeSize]),
        count: 1,
        price: pizzaPrice(pizza.price),
      };

      setPizzaCart(cartItem);
    }
  }, [pizza, activeDough, activeSize]);

  return (
    <div className={s.pizzaBlock}>
      {pizzaCart && (
        <>
          <img
            onClick={() => navigate(`/${id}`)}
            src={imageUrl}
            alt="pizza bg"
          />
          <span className={s.pizzaTitle}>{title}</span>
          <div className={s.pizzaMenu}>
            {/* меню выбора теста */}
            <div className={s.pizzaDough}>
              {types.map((type, index) => (
                <span
                  key={index}
                  className={index === activeDough ? s.active : ""}
                  onClick={() => setActiveDough(index)}
                >
                  {dough[type]}
                </span>
              ))}
            </div>
            {/* меню выбора размера */}
            <div className={s.pizzaSize}>
              {sizes.map((size, index) => (
                <span
                  key={index}
                  className={index === activeSize ? s.active : ""}
                  onClick={() => setActiveSize(index)}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
          {/* цена пиццы и кнопка добавления в корзину */}
          <div className={s.pizzaFooter}>
            <span className={s.pizzaPrice}>от {pizzaPrice(price)} ₽</span>
            <button
              className={s.pizzaButton}
              onClick={() => dispatch(addItem(pizzaCart))}
            >
              + Добавить
              {count === 0 ? "" : <span>{count}</span>}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
