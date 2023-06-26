import React from "react";

import { setSort } from "../../redux/slices/filterSlice";

import s from "./Sort.module.scss";
import ArrowUp from "../../assets/arrowUp.svg";
import { useAppDispatch, useAppSelector } from "../../redux/store";

export type SortValueType = {
  value: string;
  key: string;
  order: string;
};

// пункты фильтрации
export const sortValue: SortValueType[] = [
  { value: "популярности (по возрастанию)", key: "rating", order: "asc" },
  { value: "популярности (по убыванию)", key: "rating", order: "desc" },
  { value: "по алфавиту (по возрастанию)", key: "title", order: "asc" },
  { value: "по алфавиту (по убыванию)", key: "title", order: "desc" },
  { value: "по цене (по возрастанию)", key: "price", order: "asc" },
  { value: "по цене (по убыванию)", key: "price", order: "desc" },
];

const Sort: React.FC = () => {
  const dispatch = useAppDispatch();
  const { sort } = useAppSelector((state) => state.filter);
  const sortRef = React.useRef<HTMLDivElement>(null);

  const [open, setOpen] = React.useState(false);
  const [activeSort, setActiveSort] = React.useState(0);

  const clickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  React.useEffect(() => {
    // @ts-ignore
    document.body.addEventListener("click", clickOutside);

    return () => {
      // @ts-ignore
      document.body.removeEventListener("click", clickOutside);
    };
  }, []);

  return (
    <div className={s.sort} ref={sortRef}>
      <img src={ArrowUp} alt="arrow up" />
      <span className={s.sortLabel}>Сортировка по:</span>
      <label className={s.sortValue} onClick={() => setOpen((prev) => !prev)}>
        {sort.value}
      </label>
      {open && (
        <div className={s.sortPopup} onClick={clickOutside}>
          {sortValue.map((item, index) => (
            <span
              className={index === activeSort ? s.sortActive : ""}
              key={index}
              onClick={() => {
                setActiveSort(index);
                dispatch(setSort(item));
              }}
            >
              {item.value}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sort;
