import React from "react";

import s from "./Pizza.module.scss";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";

const Pizza = ({ pizza }) => {
  const dispatch = useDispatch();

  const [activeDough, setActiveDough] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  const dough = ["тонкое", "традиционное"];

  // готовый объект для корзины
  const cartItem = {
    ...pizza,
    types: dough[activeDough],
    sizes: pizza.sizes[activeSize],
    count: 1,
  };

  return (
    <div className={s.pizzaBlock}>
      {/* image пиццы */}
      <img src={pizza.imageUrl} alt="pizza bg" />
      <span className={s.pizzaTitle}>{pizza.title}</span>
      <div className={s.pizzaMenu}>
        {/* меню выбора теста */}
        <div className={s.pizzaDough}>
          {pizza.types.map((type, index) => (
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
          {pizza.sizes.map((size, index) => (
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
        <span className={s.pizzaPrice}>от {pizza.price} ₽</span>
        <button
          className={s.pizzaButton}
          onClick={() => dispatch(addItem(cartItem))}
        >
          + Добавить
        </button>
      </div>
    </div>
  );
};

export default Pizza;
