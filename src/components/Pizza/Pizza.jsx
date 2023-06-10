import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { addItem } from "../../redux/slices/cartSlice";

import s from "./Pizza.module.scss";

const Pizza = ({ pizza }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items } = useSelector((state) => state.cart);

  const [activeDough, setActiveDough] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const dough = ["тонкое", "традиционное"];

  // меняем цену в зависимости от размера пиццы
  const pizzaPrice = (price) => {
    switch (activeSize) {
      case 0:
        return (price += 0);
        break;
      case 1:
        return (price += 481);
        break;
      case 2:
        return (price += 710);
        break;
      default:
        return price;
    }
  };

  // количество пицц одного вида (но разных размеров и теста)
  const checkCount = () => {
    let number = 0;

    for (let i = 0; i < items.length; i++) {
      if (items[i].id === pizza.id) {
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
  const cartItem = {
    ...pizza,
    types: dough[activeDough],
    sizes: pizza.sizes[activeSize],
    count: 1,
    price: pizzaPrice(pizza.price),
  };

  return (
    <div className={s.pizzaBlock}>
      {/* image пиццы */}
      <img
        onClick={() => navigate(`/${pizza.id}`)}
        src={pizza.imageUrl}
        alt="pizza bg"
      />
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
        <span className={s.pizzaPrice}>от {pizzaPrice(pizza.price)} ₽</span>
        <button
          className={s.pizzaButton}
          onClick={() => dispatch(addItem(cartItem))}
        >
          + Добавить
          {<span>{count}</span>}
        </button>
      </div>
    </div>
  );
};

export default Pizza;
