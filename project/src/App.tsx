import { FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useSelector} from "react-redux";
import useFetch from "./hooks/useFetch";
import { RootState } from "./modules";
import Header from "./components/layout/Header";
import HamburgerModal from "./components/modal/HamburgerModal";
import Footer from "./components/layout/Footer";
import Main from "./pages/main/Main";
import Bookmark from "./pages/bookmark/Bookmark";
import Products from "./pages/products/Products";

const App : FC = () => {
  useFetch('https://dummyjson.com/products?limit=100');
  const isOpen = useSelector((state: RootState) => state.hamburgerModal.isOpen);
  
  return (
    <BrowserRouter>
      <Header />
      {isOpen && <HamburgerModal />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/products/list" element={<Products />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
