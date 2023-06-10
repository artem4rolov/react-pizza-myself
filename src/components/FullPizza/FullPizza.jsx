import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentPizza } from "../../redux/slices/pizzaSlice";
import { useNavigate, useParams } from "react-router";

import s from "./FullPizza.module.scss";
import { categories } from "../Category/Category";
import ContentLoader from "react-content-loader";

const FullPizza = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentPizza, status } = useSelector((state) => state.pizzas);
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(fetchCurrentPizza(id));
  }, []);

  //   console.log(currentPizza);

  return (
    <div className={s.currentPizza}>
      {currentPizza && status === "success" ? (
        <>
          <img src={currentPizza[0].imageUrl} alt="" />
          <div>
            <span className={s.currentPizzaTitle}>{currentPizza[0].title}</span>
            <div>
              <label>Цена: </label>
              <span className={s.currentPizzaPrice}>
                {currentPizza[0].price}
              </span>
            </div>
            <div>
              <label>Категория: </label>
              <span className={s.currentPizzaPrice}>
                {categories[currentPizza[0].category]}
              </span>
            </div>
            <div>
              <label>Доступные варианты: </label>
              {currentPizza[0].sizes.map((size, index) => (
                <span className={s.currentPizzaPrice}>{size} см |</span>
              ))}
            </div>

            <div onClick={() => navigate("/")} className={s.goBack}>
              Вернуться
            </div>
          </div>
        </>
      ) : (
        status === "loading" && (
          <ContentLoader
            speed={2}
            width={200}
            height={210}
            viewBox="0 0 200 210"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <circle cx="100" cy="104" r="100" />
          </ContentLoader>
        )
      )}
    </div>
  );
};

export default FullPizza;
