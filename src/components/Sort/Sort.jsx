import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setSort } from "../../redux/slices/filterSlice";

import s from "./Sort.module.scss";
import ArrowUp from "../../assets/arrowUp.svg";

const Sort = () => {
  const dispatch = useDispatch();
  const { sort } = useSelector((state) => state.filter);

  const [open, setOpen] = React.useState(false);

  // пункты фильтрации
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
        {sort.value}
      </label>
      {open && (
        <div className={s.sortPopup}>
          {data.map((item, index) => (
            <span key={index} onClick={() => dispatch(setSort(item))}>
              {item.value}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sort;
