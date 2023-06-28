import React from "react";
import { useDispatch } from "react-redux";

import { setCatgeoryId } from "../../redux/slices/filterSlice";

import s from "./Category.module.scss";
import { useAppSelector } from "../../redux/store";

export const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Category = () => {
  const dispatch = useDispatch();
  const { categoryId } = useAppSelector((state) => state.filter);

  return (
    <nav className={s.nav}>
      {categories.map((category, index) => (
        <li
          key={index}
          className={`${categoryId === index ? s.active : ""}`}
          onClick={() => dispatch(setCatgeoryId(index))}
        >
          {category}
        </li>
      ))}
    </nav>
  );
};

export default Category;