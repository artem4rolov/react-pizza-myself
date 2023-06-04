import React from "react";

import SearchIcon from "../../assets/search.svg";
import CloseIcon from "../../assets/close.svg";
import s from "./Search.module.scss";
import { SearchContext } from "../../App";
import debounce from "lodash.debounce";

const Search = () => {
  // стейт для поиска пицц (запрос на mockApi) с debounce (задержка)
  const { setSearchValue } = React.useContext(SearchContext);
  // стейт для input, локальный
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef();

  const handleRemove = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  // запрос на mockApi, с задержкой поиска (ждем заполнение инпута 500 мс)
  // с помощью useCallback не даем пересоздаваться функции updateSearchValue каждый раз при ререндере компонента
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 500),
    []
  );

  // меняем локальный стейт для инпута
  const onChangeInput = (str) => {
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

export default Search;
