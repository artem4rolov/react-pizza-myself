import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { addItem } from "../../redux/slices/cartSlice";

import s from "./Pizza.module.scss";
import { CartItem, PizzaType } from "../@types/pizza";

const dough = ["тонкое", "традиционное"];

const Pizza: React.FC<PizzaType> = (pizza) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items } = useSelector((state: any) => state.cart);
  const [activeDough, setActiveDough] = React.useState<number>(0);
  const [activeSize, setActiveSize] = React.useState<number>(0);
  // счетчик пицц в корзине конкрентного типа
  const [count, setCount] = React.useState<number>(0);
  // объект пиццы в корзину
  const [pizzaCart, setPizzaCart] = React.useState<CartItem | undefined>();

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
    let number = 0;

    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        number = items[i].count;
      }
    }

    setCount(number);
    return;
  };

  React.useEffect(() => {
    checkCount();

    return () => {};
  }, [items]);

  // готовый объект для корзины
  React.useEffect(() => {
    const cartItem: CartItem = {
      ...pizza,
      types: dough[activeDough],
      sizes: String(pizza.sizes[activeSize]),
      count: 1,
      price: pizzaPrice(pizza.price),
    };

    setPizzaCart(cartItem);
  }, [pizza]);

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

export default Pizza;
