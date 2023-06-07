import { FC } from "react";
import { MainContainer, ProductContainer, ListText } from "./Main.styled";
import { useSelector} from "react-redux";
import { RootState } from "../../modules";
import useCloseModal from "../../hooks/useCloseModal";
import ApiDataInterFace from "../../modules/apidata.interface";
import ProductCard from "../../components/productCard/ProductCard";

const Main : FC = () => {
  const productList = useSelector((state: RootState)  => state.productList.products);
  const VIEWCOUNT:number = 4;
  const handleClickModal = useCloseModal()

  return (
    <MainContainer onClick={handleClickModal}>
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