import React from "react";
import { Route, Routes } from "react-router";
import Home from "./views/Home/Home";
import Cart from "./views/Cart/Cart";
import Error from "./views/Error/Error";
import Header from "./components/Header/Header";

import s from "./App.module.scss";

export const SearchContext = React.createContext("");

function App() {
  // для временного решения с контекстом
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <div className={s.appWrapper}>
        <div className={s.app}>
          <div className={s.container}>
            <Header />
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route index path="/cart" element={<Cart />} />
              <Route index path="/*" element={<Error />} />
            </Routes>
          </div>
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
