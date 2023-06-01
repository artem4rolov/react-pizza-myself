import React from "react";

import s from "./Category.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCatgeoryId } from "../../redux/slices/filterSlice";

const Category = ({ activeCategory, setActiveCategory }) => {
  const dispatch = useDispatch();
  const { categoryId } = useSelector((state) => state.filter);

  const data = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <nav className={s.nav}>
      {data.map((category, index) => (
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
