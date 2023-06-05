import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Sort, { sortValue } from "../../components/Sort/Sort";
import Pizza from "../../components/Pizza/Pizza";
import Category from "../../components/Category/Category";
import Pagination from "../../components/Pagination/Pagination";
import { SearchContext } from "../../App";

import s from "./Home.module.scss";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router";
import { setFiltersFromUrl } from "../../redux/slices/filterSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoryId, sort, page } = useSelector((state) => state.filter);
  const [pizzas, setPizzas] = React.useState(null);

  const isMounted = React.useRef(false);
  const isSearchUrlValue = React.useRef(false);

  // значение поля поиска из контекста (App.js)
  const { searchValue } = React.useContext(SearchContext);

  const fetchPizzas = () => {
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
  };

  // если был первый рендер - берем параметры из URl и сохраняем в хранилище редакс
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      dispatch(
        setFiltersFromUrl({
          categoryId: params.category,
          page: params.page,
          sort: {
            ...sortValue.filter(
              (item) =>
                item.key === params.sortBy && item.order === params.order
            )[0],
          },
        })
      );

      isSearchUrlValue.current = true;
    }
  }, []);

  // если уже был первый рендер и пользователь менял параметры фильтра - копируем параметры фильтров и вшиваем в URl строку
  React.useEffect(() => {
    if (isMounted.current) {
      const obj = qs.stringify({
        page,
        category: categoryId,
        sortBy: sort.key,
        order: sort.order,
      });

      navigate(`?${obj}`);
    }

    isMounted.current = true;
  }, [categoryId, sort, page]);

  React.useEffect(() => {
    if (!isSearchUrlValue.current) {
      fetchPizzas();
    }

    isSearchUrlValue.current = false;

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
