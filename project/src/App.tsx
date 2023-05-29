import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/layout/Header";
import HamburgerModal from "./components/modal/HamburgerModal";
import Footer from "./components/layout/Footer";
import Main from "./pages/main/Main";
import Likes from "./pages/likes/Likes";
import Products from "./pages/products/Products";

import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=100`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
      });
  });

  return (
    <BrowserRouter>
      <Header modalState={isOpen} modalSwitch={setIsOpen} />
      {isOpen && <HamburgerModal modalSwitch={setIsOpen} />}
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
