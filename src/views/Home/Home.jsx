import React from "react";
import { useSelector } from "react-redux";

import Sort from "../../components/Sort/Sort";
import Pizza from "../../components/Pizza/Pizza";
import Category from "../../components/Category/Category";
import Pagination from "../../components/Pagination/Pagination";
import { SearchContext } from "../../App";

import s from "./Home.module.scss";
import axios from "axios";
import QueryString from "qs";

const Home = () => {
  const { categoryId, sort, page } = useSelector((state) => state.filter);
  const [pizzas, setPizzas] = React.useState(null);

  // значение поля поиска из контекста (App.js)
  const { searchValue } = React.useContext(SearchContext);

  React.useEffect(() => {
    const category =
      categoryId && !searchValue ? `&category=${categoryId}` : "";
    const sorting = `&sortBy=${sort.key}`;
    const order = `&order=${sort.order}`;
    const search = searchValue ? `&search=${searchValue}` : "";

    try {
      axios
        .get(
          `https://64295b91ebb1476fcc479b12.mockapi.io/items?page=${
            page + 1
          }&limit=4${category}${sorting}${order}${search}`
        )
        .then((res) => setPizzas(res.data));
    } catch (err) {
      console.log(err);
    }

    const url = `page=${
      page + 1
    }&limit=4${category}${sorting}${order}${search}`;

    const obj = QueryString.parse(url);

    console.log(obj);

    return () => {};
  }, [categoryId, sort, searchValue, page]);

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
