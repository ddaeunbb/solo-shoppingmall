import { FC } from "react";
import tw from "tailwind-styled-components";
import Filter from "../../components/filter/Filter";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules";
import { closeModal } from "../../modules/hamburgerModalSlice";
import Categories from "../../types/categories";
import ProductCard from "../../components/productCard/ProductCard";

const Products : FC  = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state: RootState)  => state.productList.products);
  const category = useSelector((state: RootState) => state.filterList.category);

  switch(category){
    case Categories.total :
      return (
        <ProductsContainer onClick={()=> dispatch(closeModal())}>
          <Filter />
          <ProductCardContainer>
            {productList.map(product => 
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

// tailwind
const ProductsContainer = tw.div`
  w-100vw;
  flex-col
  justify-center
  items-center
`

const ProductCardContainer = tw.div`
  flex
  flex-wrap
  justify-center
  gap-5
  py-5
  mx-14
`;

export default Products;