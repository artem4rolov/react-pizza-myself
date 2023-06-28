import { Route, Routes } from "react-router";
import Home from "./views/Home/Home";
import Cart from "./views/Cart/Cart";
import Error from "./views/Error/Error";
import Header from "./components/Header/Header";

import s from "./App.module.scss";
import FullPizza from "./components/FullPizza/FullPizza";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <div className={s.appWrapper}>
      <div className={s.app}>
        <div className={s.container}>
          <Header />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route index path="/cart" element={<Cart />} />
            <Route
              index
              path="/:id"
              element={
                <ErrorBoundary fallback={<p>Что-то пошло не так</p>}>
                  <FullPizza />
                </ErrorBoundary>
              }
            />
            <Route index path="/*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
