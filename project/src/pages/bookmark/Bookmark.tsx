import { FC, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ProductsContainer, ProductCardContainer } from "./Bookmark.styled";
import Filter from "../../components/filter/Filter";
import { useAppSelector } from "../../modules/hooks";
import useCloseModal from "../../hooks/useCloseModal";
import Categories from "../../types/categories";
import ProductCard from "../../components/productCard/ProductCard";

const Bookmark : FC  = () => {
  const [ref, inView]= useInView();
  const DEFAULT_PAGE = 8;
  const [page, setPage] = useState<number>(DEFAULT_PAGE);
  const productList = useAppSelector(state  => state.productList.products);
  const category = useAppSelector(state => state.filterList.category);
  const handleClickModal = useCloseModal();

  useEffect(()=> {
    if(inView){
      if( page === productList.length) return;
      setPage(prev => prev + DEFAULT_PAGE);
    }
  }, [inView])

  switch(category){
    case Categories.total :
      return (
        <ProductsContainer onClick={handleClickModal}>
          <Filter />
          <ProductCardContainer>
            {productList
              .filter(product => product.bookmark)
              .slice(0, page)
              .map(product =>
                (<ProductCard key={product.id} product={product} />)
            )}
          </ProductCardContainer>
          <div ref={ref} />
        </ProductsContainer>
      )
    
    default :
      return (
        <ProductsContainer onClick={handleClickModal}>
          <Filter />
          <ProductCardContainer>
            {productList // 
              .filter(product => product.category === category && product.bookmark )
              .map(product =>
              (<ProductCard key={product.id} product={product} />)
            )}
          </ProductCardContainer>
          <div ref={ref} />
        </ProductsContainer>
      )
  }
}

export default Bookmark;