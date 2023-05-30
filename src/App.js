import { Route, Routes } from "react-router";
import Home from "./views/Home/Home";
import Cart from "./views/Cart/Cart";
import Error from "./views/Error/Error";
import Header from "./components/Header/Header";

import s from "./App.module.scss";

function App() {
  return (
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
  );
}

export default App;
