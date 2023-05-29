import React from "react";
import s from "./Header.module.scss";

import Logo from "../../assets/logo.svg";
import Cart from "../../assets/cart.svg";

const Header = () => {
  return (
    <header className={s.header}>
      {/* logo and desc */}
      <div className={s.headerLogo}>
        <img src={Logo} alt="" />
        <div className={s.logoText}>
          <span className={s.logoTitle}>REACT PIZZA</span>
          <span className={s.logoSubTitle}>
            самая вкусная пицца во вселенной
          </span>
        </div>
      </div>
      {/* button cart */}
      <div className={s.headerButton}>
        <div className={s.totalPrice}>520 ₽</div>
        <div className={s.totalCount}>
          <img src={Cart} alt="" />
          <span>3</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
