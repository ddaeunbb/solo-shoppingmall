import tw from "tailwind-styled-components";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setProducts } from "../../modules/productSlice";
import ApiDataInterFace from "../../modules/apidata.interface";
import ProductCard from "../../components/productCard/ProductCard";

export default function Main() {
  const dispatch = useDispatch();
  const [productList, setProductList] = useState<Array<ApiDataInterFace>>([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=100`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setProducts(data.products));
        setProductList(data.products.slice(0, 4));
      });
  }, []);

  return (
    <MainContainer>
      <ListText>상품리스트</ListText>
      <ProductContainer>
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductContainer>

      <ListText>북마크리스트</ListText>
      <ProductContainer>
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductContainer>
    </MainContainer>
  );
}

// tailwind
const MainContainer = tw.div`
  w-100vw
  flex-col
  py-5
  px-20
`;

const ProductContainer = tw.div`
  flex
  flex-wrap
  justify-center
  gap-5
  p-5
`;

const ListText = tw.h1`
  font-semibold
  text-xl
`;
