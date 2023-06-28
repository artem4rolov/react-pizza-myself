import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";

import Search from "../Search/Search";

import { changeTotalPrice } from "../../redux/slices/cartSlice";

import s from "./Header.module.scss";
import Logo from "../../assets/logo.svg";
import Cart from "../../assets/cart.svg";
import { useAppDispatch, useAppSelector } from "../../redux/store";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  let location = useLocation();

  console.log();

  const { items, totalPrice } = useAppSelector((state) => state.cart);

  const totalCountPizzas =
    items && items.reduce((sum, item) => sum + item.count, 0);

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
      {/* поиск */}
      {location.pathname !== "/cart" && <Search />}
      {/* кнопка корзины с суммой заказа и количеством пицц */}
      {location.pathname !== "/cart" && (
        <div className={s.headerButton} onClick={() => navigate("/cart")}>
          <div className={s.totalPrice}>{totalPrice} ₽</div>
          <div className={s.totalCount}>
            <img src={Cart} alt="" />
            <span>{items && items.length > 0 ? totalCountPizzas : 0}</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
