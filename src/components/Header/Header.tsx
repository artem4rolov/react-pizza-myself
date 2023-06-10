import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import Search from "../Search/Search";

import { changeTotalPrice } from "../../redux/slices/cartSlice";

import s from "./Header.module.scss";
import Logo from "../../assets/logo.svg";
import Cart from "../../assets/cart.svg";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { items, totalPrice } = useSelector((state) => state.cart);

  const totalCountPizzas =
    items && items.reduce((sum: number, item: any) => sum + item.count, 0);

  React.useEffect(() => {
    if (items && items.length > 0) {
      dispatch(changeTotalPrice());
      return;
    }

    return () => {};
  }, [items]);

  return (
    <header className={s.header}>
      {/* logo and desc */}
      <div className={s.headerLogo} onClick={() => navigate("/")}>
        <img src={Logo} alt="" />
        <div className={s.logoText}>
          <span className={s.logoTitle}>YoYoPIZZA</span>
          <span className={s.logoSubTitle}>лучшая пицца</span>
        </div>
      </div>
      <Search />
      {/* button cart */}
      <div className={s.headerButton} onClick={() => navigate("/cart")}>
        <div className={s.totalPrice}>{totalPrice} ₽</div>
        <div className={s.totalCount}>
          <img src={Cart} alt="" />
          <span>{items && items.length > 0 ? totalCountPizzas : 0}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
