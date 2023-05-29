import React from "react";

import s from "../App.module.scss";
import Header from "../components/Header/Header";
import Sort from "../components/Sort/Sort";
import Pizza from "../components/Pizza/Pizza";
import Category from "../components/Category/Category";

const Home = () => {
  return (
    <div className={s.appWrapper}>
      <div className={s.app}>
        <div className={s.container}>
          <Header />

          <main className={s.main}>
            <div className={s.mainNav}>
              {/* популярность, цена, алфавит */}
              <Category />
              {/* сортировка по категориям */}
              <Sort />
            </div>

            {/* pizzas */}
            <h1>Все пиццы</h1>
            <div className={s.mainContent}>
              {/* список пицц */}
              <Pizza />
              <Pizza />
              <Pizza />
              <Pizza />
              <Pizza />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
