import React from "react";
import debounce from "lodash.debounce";

import { setSearchValue } from "../../redux/search/slice";

import SearchIcon from "../../assets/search.svg";
import CloseIcon from "../../assets/close.svg";
import s from "./Search.module.scss";
import { useAppDispatch } from "../../redux/store";

export const Search = () => {
  const dispatch = useAppDispatch();
  // стейт для input, локальный
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleRemove = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current?.focus();
  };

  // запрос на mockApi, с задержкой поиска (ждем заполнение инпута 500 мс)
  // с помощью useCallback не даем пересоздаваться функции updateSearchValue каждый раз при ререндере компонента
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 500),
    []
  );

  // меняем локальный стейт для инпута
  const onChangeInput = (str: string) => {
    setValue(str);
    updateSearchValue(str);
  };

  return (
    <div className={s.searchContainer}>
      <img src={SearchIcon} alt="" />
      <input
        placeholder="Найти пиццу..."
        ref={inputRef}
        value={value}
        type="text"
        onChange={(e) => onChangeInput(e.target.value)}
      />
      {value && (
        <img
          onClick={handleRemove}
          className={s.close}
          src={CloseIcon}
          alt=""
        />
      )}
    </div>
  );
};
