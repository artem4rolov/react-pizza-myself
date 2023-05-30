import React from "react";

import s from "../App.module.scss";
import Sort from "../components/Sort/Sort";
import Pizza from "../components/Pizza/Pizza";
import Category from "../components/Category/Category";

const Home = () => {
  const [loading, setLoading] = React.useState(false);
  const [pizzas, setPizzas] = React.useState(null);

  // сортировка по (популярности, алфавиту, цене)
  const [activeSort, setActiveSort] = React.useState({
    value: "популярности",
    key: "rating",
    order: "asc",
  });
  // сортировка по категории пиццы
  const [activeCategory, setActiveCategory] = React.useState(0);

  React.useEffect(() => {
    try {
      fetch("https://64295b91ebb1476fcc479b12.mockapi.io/items")
        .then((res) => res.json())
        .then((res) => setPizzas(res));
    } catch (err) {
      console.log(err);
    }

    return () => {};
  }, []);

  React.useEffect(() => {
    try {
      fetch(
        `https://64295b91ebb1476fcc479b12.mockapi.io/items?category=${
          activeCategory !== 0 ? activeCategory : ""
        }&sortBy=${activeSort.key}&order=${activeSort.order}`
      )
        .then((res) => res.json())
        .then((res) => setPizzas(res));
    } catch (err) {
      console.log(err);
    }

    return () => {};
  }, [activeCategory, activeSort]);

  console.log("сортировка по " + activeSort);
  console.log("категория пиццы " + activeCategory);

  return (
    <main className={s.main}>
      <div className={s.mainNav}>
        {/* популярность, цена, алфавит */}
        <Category
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        {/* сортировка по категориям */}
        <Sort activeSort={activeSort} setActiveSort={setActiveSort} />
      </div>

      {/* pizzas */}
      <div className={s.mainContent}>
        {/* список пицц */}
        {pizzas &&
          pizzas.map((pizza, index) => <Pizza key={pizza.id} pizza={pizza} />)}
      </div>
    </main>
  );
};

export default Home;
