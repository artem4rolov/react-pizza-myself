import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCatgeoryId } from "../../redux/slices/filterSlice";

import s from "./Category.module.scss";

export const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Category = ({ activeCategory, setActiveCategory }) => {
  const dispatch = useDispatch();
  const { categoryId } = useSelector((state) => state.filter);

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
