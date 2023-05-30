import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import { setProducts } from "./modules/productSlice";
import { RootState } from "./modules";
import Header from "./components/layout/Header";
import HamburgerModal from "./components/modal/HamburgerModal";
import Footer from "./components/layout/Footer";
import Main from "./pages/main/Main";
import Likes from "./pages/likes/Likes";
import Products from "./pages/products/Products";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.hamburgerModal.isOpen);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=100`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setProducts(data.products));
      });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      {isOpen && <HamburgerModal />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/bookmark" element={<Likes />} />
        <Route path="/products/list" element={<Products />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
