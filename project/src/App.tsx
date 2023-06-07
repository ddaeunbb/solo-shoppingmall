import { FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from 'react';
import { useSelector} from "react-redux";
import useFetch from "./hooks/useFetch";
import { RootState } from "./modules";
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
  useFetch('https://dummyjson.com/products?limit=100');
  const isHamburgerOpen = useSelector((state: RootState) => state.hamburgerModal.isOpen);
  const isDetailOpen = useSelector((state: RootState) => state.detailModal.isOpen);
  const toastList = useSelector((state: RootState)=> state.toastAlram.toastList);
  
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
