import { FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from 'react';
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./modules/hooks";
import { setProducts } from "./modules/productSlice";
import Loading from "./components/loading/Loading";
import Header from "./components/layout/Header";
import HamburgerModal from "./components/modal/HamburgerModal";
import DetailModal from "./components/modal/DetailModal";
import Footer from "./components/layout/Footer";
import ToastAlram from "./components/toast/ToastAlram";

const Main = lazy(()=> import('./pages/main/Main'));
const Bookmark = lazy(()=> import('./pages/bookmark/Bookmark'));
const Products = lazy(()=> import('./pages/products/Products'))


const App : FC = () => {
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(setProducts("https://dummyjson.com/products?limit=100"));
  }, [])

  const isHamburgerOpen = useAppSelector((state) => state.hamburgerModal.isOpen);
  const isDetailOpen = useAppSelector((state) => state.detailModal.isOpen);
  const toastList = useAppSelector((state)=> state.toastAlram.toastList);
  
  return (
    <BrowserRouter>
      <Header />
      {toastList.length > 0 && <ToastAlram />}
      {isHamburgerOpen && <HamburgerModal />}
      {isDetailOpen && <DetailModal />}

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/products/list" element={<Products />} />
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
