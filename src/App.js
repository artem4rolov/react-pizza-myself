import s from "./App.module.scss";
import Logo from "./assets/logo.svg";
import Cart from "./assets/cart.svg";
import ArrowUp from "./assets/arrowUp.svg";
import pizzaImage from "./assets/pizza.png";

function App() {
  return (
    <div className={s.appWrapper}>
      <div className={s.app}>
        <div className={s.container}>
          <header className={s.header}>
            {/* logo and desc */}
            <div className={s.headerLogo}>
              <img src={Logo} alt="" />
              <div className={s.logoText}>
                <span className={s.logoTitle}>REACT PIZZA</span>
                <span className={s.logoSubTitle}>
                  самая вкусная пицца во вселенной
                </span>
              </div>
            </div>
            {/* button cart */}
            <div className={s.headerButton}>
              <div className={s.totalPrice}>520 ₽</div>
              <div className={s.totalCount}>
                <img src={Cart} alt="" />
                <span>3</span>
              </div>
            </div>
          </header>
          <main className={s.main}>
            {/* navigation */}
            <div className={s.mainNav}>
              <nav className={s.nav}>
                <li className={s.navItem}>Все</li>
                <li className={s.navItem}>Мясные</li>
                <li className={s.navItem}>Вегетарианская</li>
                <li className={s.navItem}>Гриль</li>
                <li className={s.navItem}>Острые</li>
                <li className={s.navItem}>Закрытые</li>
              </nav>
              {/* sort by category */}
              <div className={s.sort}>
                <img src={ArrowUp} alt="arrow up" />
                <span className={s.sortLabel}>Сортировка по:</span>
                <label className={s.sortValue}>популярности</label>
                <div className={s.sortPopup}>
                  <span>популярности</span>
                  <span>по цене</span>
                  <span>по алфавиту</span>
                </div>
              </div>
            </div>
            {/* pizzas */}
            <div className={s.mainContent}>
              <h1>Все пиццы</h1>
              {/* список пицц */}
              <div className={s.pizzaContainer}>
                {/* image пиццы */}
                <img src={pizzaImage} alt="pizza image" />
                <span className={s.pizzaTitle}>Чизбургер пицца</span>
                <div className={s.pizzaMenu}>
                  {/* меню выбора теста */}
                  <div className={s.pizzaDough}>
                    <span className={(s.doughVariant, `active`)}>тонкое</span>
                    <span className={s.doughVariant}>традиционное</span>
                  </div>
                  {/* меню выбора размера */}
                  <div className={s.pizzaSize}>
                    <span className={`form-control round-lg ${s.sizeVariant}`}>
                      26 см.
                    </span>
                    <span className={s.sizeVariant}>36 см.</span>
                    <span className={s.sizeVariant}>46 см.</span>
                  </div>
                </div>
                {/* цена пиццы и кнопка добавления в корзину */}
                <div className={s.pizzaFooter}>
                  <span className={s.pizzaPrice}>от 395 ₽</span>
                  <button className={s.pizzaButton}>+ Добавить 2</button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
