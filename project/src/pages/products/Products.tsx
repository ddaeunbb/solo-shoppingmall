import { FC } from "react";
import { ProductCardContainer, ProductsContainer } from "./Products.styled";
import Filter from "../../components/filter/Filter";
import useUnlimitScroll from "../../hooks/useUnlimitScroll";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules";
import { closeModal } from "../../modules/hamburgerModalSlice";
import Categories from "../../types/categories";
import ProductCard from "../../components/productCard/ProductCard";

const Products : FC  = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state: RootState)  => state.productList.products);
  const category = useSelector((state: RootState) => state.filterList.category);
  
  const DEFAULTPAGE: number = 8;
  const page = useUnlimitScroll(DEFAULTPAGE, productList.length);

  switch(category){
    case Categories.total :
      return (
        <ProductsContainer onClick={()=> dispatch(closeModal())}>
          <Filter />
          <ProductCardContainer>
            {productList.slice(0, page).map(product => 
              (<ProductCard key={product.id} product={product} />)
            )}
          </ProductCardContainer>
        </ProductsContainer>
      )
    
    default :
      return (
        <ProductsContainer onClick={()=> dispatch(closeModal())}>
          <Filter />
          <ProductCardContainer>
            {productList // 
              .filter(product => product.category === category)
              .map(product =>
              (<ProductCard key={product.id} product={product} />)
            )}
          </ProductCardContainer>
        </ProductsContainer>
      )
  }
}

export default Products;