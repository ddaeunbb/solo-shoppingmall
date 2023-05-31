import tw from "tailwind-styled-components";
import Filter from "../../components/filter/Filter";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";
import Categories from "../../types/categories";
import ApiDataInterFace from "../../modules/apidata.interface";
import ProductCard from "../../components/productCard/ProductCard";

export default function Products() {
  const productList = useSelector((state: RootState)  => state.productList.products);
  const category = useSelector((state: RootState) => state.filterList.category);

  switch(category){
    case Categories.total :
      return (
        <ProductsContainer>
          <Filter />
          <ProductCardContainer>
            {productList.map((product: ApiDataInterFace) => (
            <ProductCard key={product.id} product={product} />
            ))}
          </ProductCardContainer>
        </ProductsContainer>
      )
    
    default :
      return (
        <ProductsContainer>
          <Filter />
          <ProductCardContainer>
            {productList // 
              .filter((product: ApiDataInterFace) => product.category === category)
              .map((product: ApiDataInterFace) =>
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