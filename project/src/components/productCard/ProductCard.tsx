import { FC } from "react";
import { ProductImage, ProductTitle, ProudctPrice } from "./ProductCard.styled";
import ApiDataInterFace from "../../modules/apidata.interface";
import { useAppDispatch } from "../../modules/hooks";
import { switchDetailModal, setDetailModalContent } from "../../modules/detailModalSlice";
import BookmarkButton from "../button/BookmarkButton";

interface ProductCardProps {
  product: ApiDataInterFace;
}

const ProductCard : FC<ProductCardProps> = (props) => {
  const { product } = props;
  const dispatch = useAppDispatch();
  const detailModalHandler = ()=>{
    dispatch(switchDetailModal(true));
    dispatch(setDetailModalContent(product));
  }

  return (
    <div>
      <ProductImage
        style={{ backgroundImage: `url('${product.thumbnail}')` }}
        onClick={()=> detailModalHandler()}>
          <BookmarkButton id={product.id} bookmark={product.bookmark}/>
      </ProductImage>
      <div className="pl-2 pt-2">
        <ProductTitle>
          {product.title.length  > 30 ? product.title.slice(0,25)+'...' : product.title}
        </ProductTitle>
        <ProudctPrice>${product.price}</ProudctPrice>
      </div>
    </div>
  );
}

export default ProductCard;