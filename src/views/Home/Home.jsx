import React from "react";
import { useSelector } from "react-redux";

import Sort from "../../components/Sort/Sort";
import Pizza from "../../components/Pizza/Pizza";
import Category from "../../components/Category/Category";
import Pagination from "../../components/Pagination/Pagination";
import { SearchContext } from "../../App";

import s from "./Home.module.scss";

const Home = () => {
  const { categoryId, sort } = useSelector((state) => state.filter);
  const { page } = useSelector((state) => state.pizza);
  const [pizzas, setPizzas] = React.useState(null);

  const { input } = React.useContext(SearchContext);

  React.useEffect(() => {
    const category = categoryId ? `&category=${categoryId}` : "";
    const sorting = `&sortBy=${sort.key}`;
    const order = `&order=${sort.order}`;
    const search = `&search=${input}`;

    try {
      fetch(
        `https://64295b91ebb1476fcc479b12.mockapi.io/items?page=${
          page + 1
        }&limit=4${category}${sorting}${order}${search}`
      )
        .then((res) => res.json())
        .then((res) => setPizzas(res));
    } catch (err) {
      console.log(err);
    }

    return () => {};
  }, [categoryId, sort, input, page]);

  return (
    <main className={s.main}>
      <div className={s.mainNav}>
        {/* популярность, цена, алфавит */}
        <Category />
        {/* сортировка по категориям */}
        <Sort />
      </div>
      {/* pizzas */}
      <div className={s.mainContent}>
        {/* список пицц */}
        {pizzas &&
          pizzas.map((pizza, index) => <Pizza key={pizza.id} pizza={pizza} />)}
      </div>
      <Pagination />
    </main>
  );
};

export default Home;
