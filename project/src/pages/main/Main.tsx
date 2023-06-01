import { FC } from "react";
import tw from "tailwind-styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";
import ApiDataInterFace from "../../modules/apidata.interface";
import ProductCard from "../../components/productCard/ProductCard";

const Main : FC = () => {
  const productList = useSelector((state: RootState)  => state.productList.products);
  const VIEWCOUNT:number = 4;

  return (
    <MainContainer>
      <ListText>상품리스트</ListText>
      <ProductContainer>
        {productList.slice(0, VIEWCOUNT).map((product: ApiDataInterFace) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductContainer>

      <ListText>북마크리스트</ListText>
      <ProductContainer>
        {productList.filter(product => product.bookmark).slice(0, VIEWCOUNT).map((product: ApiDataInterFace) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductContainer>
    </MainContainer>
  );
}

// tailwind
const MainContainer = tw.div`
  w-100vw
  flex
  flex-col
  items-center
  py-5
`;

const ProductContainer = tw.div`
  flex
  flex-wrap
  justify-center
  gap-5
  py-10
`;

const ListText = tw.h1`
  w-70vw
  font-extrabold
  text-xl
  text-white
  bg-indigo-500
  border-0
  p-3
  rounded-xl
  shadow-lg
`;

export default Main;