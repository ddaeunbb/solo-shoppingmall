import { FC } from "react";
import { MainContainer, ProductContainer, ListText } from "./Main.styled";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules";
import { closeModal } from "../../modules/hamburgerModalSlice";
import ApiDataInterFace from "../../modules/apidata.interface";
import ProductCard from "../../components/productCard/ProductCard";

const Main : FC = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state: RootState)  => state.productList.products);
  const VIEWCOUNT:number = 4;

  return (
    <MainContainer onClick={()=> dispatch(closeModal())}>
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

export default Main;