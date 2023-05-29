import React from "react";

import s from "./Sort.module.scss";

import ArrowUp from "../../assets/arrowUp.svg";

const Sort = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={s.sort}>
      <img src={ArrowUp} alt="arrow up" />
      <span className={s.sortLabel}>Сортировка по:</span>
      <label className={s.sortValue} onClick={() => setOpen((prev) => !prev)}>
        популярности
      </label>
      {open && (
        <div className={s.sortPopup}>
          <span>популярности</span>
          <span>по цене</span>
          <span>по алфавиту</span>
        </div>
      )}
    </div>
  );
};

export default Sort;
