import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/layout/header";
import Main from "./pages/main/Main";
import Likes from "./pages/likes/Likes";
import Products from "./pages/products/Products";

import "./App.css";

function App() {
  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=100`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
      });
  });

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/bookmark" element={<Likes />} />
        <Route path="/products/list" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
