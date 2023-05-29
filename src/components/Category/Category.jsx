import React from "react";

import s from "./Category.module.scss";

const Category = () => {
  const [active, setActive] = React.useState(0);

  const data = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  console.log(active);

  return (
    <nav className={s.nav}>
      {data.map((category, index) => (
        <li
          key={index}
          className={`${active === index ? s.active : ""}`}
          onClick={() => setActive(index)}
        >
          {category}
        </li>
      ))}
    </nav>
  );
};

export default Category;
