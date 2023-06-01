import { FC } from "react";
import tw from "tailwind-styled-components";
import Filter from "../../components/filter/Filter";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules";
import { switchModal } from "../../modules/hamburgerModalSlice";
import Categories from "../../types/categories";
import ProductCard from "../../components/productCard/ProductCard";

const Bookmark : FC  = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state: RootState)  => state.productList.products);
  const category = useSelector((state: RootState) => state.filterList.category);

  switch(category){
    case Categories.total :
      return (
        <ProductsContainer onClick={()=> dispatch(switchModal())}>
          <Filter />
          <ProductCardContainer>
            {productList
              .filter(product => product.bookmark)
              .map(product =>
                (<ProductCard key={product.id} product={product} />)
            )}
          </ProductCardContainer>
        </ProductsContainer>
      )
    
    default :
      return (
        <ProductsContainer onClick={()=> dispatch(switchModal())}>
          <Filter />
          <ProductCardContainer>
            {productList // 
              .filter(product => product.category === category && product.bookmark )
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

export default Bookmark;