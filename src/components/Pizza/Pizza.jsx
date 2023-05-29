import React from "react";

import s from "./Pizza.module.scss";
import pizzaImage from "../../assets/pizza.png";

const Pizza = () => {
  const [activeDough, setActiveDough] = React.useState("тонкое");
  const [activeSize, setActiveSize] = React.useState("32 см");

  return (
    <div className={s.pizzaContainer}>
      <div className={s.pizzaBlock}>
        {/* image пиццы */}
        <img src={pizzaImage} alt="pizza bg" />
        <span className={s.pizzaTitle}>Чизбургер пицца</span>
        <div className={s.pizzaMenu}>
          {/* меню выбора теста */}
          <div className={s.pizzaDough}>
            <span className={s.doughVariant}>тонкое</span>
            <span className={s.doughVariant}>традиционное</span>
          </div>
          {/* меню выбора размера */}
          <div className={s.pizzaSize}>
            <span className={`form-control round-lg ${s.sizeVariant}`}>
              26 см.
            </span>
            <span className={s.sizeVariant}>36 см.</span>
            <span className={s.sizeVariant}>46 см.</span>
          </div>
        </div>
        {/* цена пиццы и кнопка добавления в корзину */}
        <div className={s.pizzaFooter}>
          <span className={s.pizzaPrice}>от 395 ₽</span>
          <button className={s.pizzaButton}>+ Добавить 2</button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
