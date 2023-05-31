import tw from "tailwind-styled-components";
import Filter from "../../components/filter/Filter";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";
import ApiDataInterFace from "../../modules/apidata.interface";
import ProductCard from "../../components/productCard/ProductCard";

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
  py-10
  mx-14
`;

export default function Products() {
  const productList = useSelector((state: RootState)  => state.productList.products);

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
}