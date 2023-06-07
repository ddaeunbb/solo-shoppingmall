import { FC } from "react";
import { ProductsContainer, ProductCardContainer } from "./Bookmark.styled";
import Filter from "../../components/filter/Filter";
import useUnlimitScroll from "../../hooks/useUnlimitScroll";
import { useSelector} from "react-redux";
import { RootState } from "../../modules";
import useCloseModal from "../../hooks/useCloseModal";
import Categories from "../../types/categories";
import ProductCard from "../../components/productCard/ProductCard";

const Bookmark : FC  = () => {
  const productList = useSelector((state: RootState)  => state.productList.products);
  const category = useSelector((state: RootState) => state.filterList.category);
  const handleClickModal = useCloseModal();

  const DEFAULTPAGE: number = 8;
  const page = useUnlimitScroll(DEFAULTPAGE, productList.length);

  switch(category){
    case Categories.total :
      return (
        <ProductsContainer onClick={useCloseModal}>
          <Filter />
          <ProductCardContainer>
            {productList
              .filter(product => product.bookmark)
              .slice(0, page)
              .map(product =>
                (<ProductCard key={product.id} product={product} />)
            )}
          </ProductCardContainer>
        </ProductsContainer>
      )
    
    default :
      return (
        <ProductsContainer onClick={useCloseModal}>
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

export default Bookmark;