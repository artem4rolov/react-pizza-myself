import React from "react";

import s from "../App.module.scss";
import Header from "../components/Header/Header";
import Sort from "../components/Sort/Sort";
import Pizza from "../components/Pizza/Pizza";
import Category from "../components/Category/Category";

const Home = () => {
  const [pizzas, setPizzas] = React.useState(null);

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

            <div className={s.mainContent}>
              {/* список пицц */}
              {pizzas &&
                pizzas.map((pizza, index) => (
                  <Pizza key={pizza.id} pizza={pizza} />
                ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
