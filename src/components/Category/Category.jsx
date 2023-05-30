import React from "react";

import s from "./Category.module.scss";

const Category = ({ activeCategory, setActiveCategory }) => {
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
          className={`${activeCategory === index ? s.active : ""}`}
          onClick={() => setActiveCategory(index)}
        >
          {category}
        </li>
      ))}
    </nav>
  );
};

export default Category;
