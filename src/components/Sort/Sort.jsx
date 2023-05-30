import React from "react";

import s from "./Sort.module.scss";

import ArrowUp from "../../assets/arrowUp.svg";

const Sort = ({ activeSort, setActiveSort }) => {
  const [open, setOpen] = React.useState(false);

  const data = [
    { value: "популярности (по возрастанию)", key: "rating", order: "asc" },
    { value: "популярности (по убыванию)", key: "rating", order: "desc" },
    { value: "по алфавиту (по возрастанию)", key: "title", order: "asc" },
    { value: "по алфавиту (по убыванию)", key: "title", order: "desc" },
    { value: "по цене (по возрастанию)", key: "price", order: "asc" },
    { value: "по цене (по убыванию)", key: "price", order: "desc" },
  ];

  return (
    <div className={s.sort}>
      <img src={ArrowUp} alt="arrow up" />
      <span className={s.sortLabel}>Сортировка по:</span>
      <label className={s.sortValue} onClick={() => setOpen((prev) => !prev)}>
        {activeSort.value}
      </label>
      {open && (
        <div className={s.sortPopup}>
          {data.map((item, index) => (
            <span key={index} onClick={() => setActiveSort(item)}>
              {item.value}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sort;
