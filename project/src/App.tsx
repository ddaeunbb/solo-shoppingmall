import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./modules";
import Header from "./components/layout/Header";
import HamburgerModal from "./components/modal/HamburgerModal";
import Footer from "./components/layout/Footer";
import Main from "./pages/main/Main";
import Likes from "./pages/likes/Likes";
import Products from "./pages/products/Products";

import "./App.css";

function App() {
  const isOpen = useSelector((state: RootState) => state.hamburgerModal.isOpen);

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
