import React from "react";

import SearchIcon from "../../assets/search.svg";
import CloseIcon from "../../assets/close.svg";
import s from "./Search.module.scss";
import { SearchContext } from "../../App";

const Search = () => {
  const { input, setInput } = React.useContext(SearchContext);

  return (
    <div className={s.searchContainer}>
      <img src={SearchIcon} alt="" />
      <input
        value={input}
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
      {input && (
        <img
          onClick={() => setInput("")}
          className={s.close}
          src={CloseIcon}
          alt=""
        />
      )}
    </div>
  );
};

export default Search;
