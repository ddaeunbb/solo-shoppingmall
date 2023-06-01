import { FC } from "react";
import tw from "tailwind-styled-components";
import ApiDataInterFace from "../../modules/apidata.interface";
import { useDispatch } from "react-redux";
import { switchDetailModal, setDetailModalContent } from "../../modules/detailModalSlice";
import BookmarkButton from "../button/BookmarkButton";

interface ProductCardProps {
  product: ApiDataInterFace;
}

const ProductCard : FC<ProductCardProps> = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
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

// tailwind
const ProductImage = tw.div`
w-64
h-48
rounded-2xl
bg-center
bg-cover
border
border-slate-200
cursor-pointer
relative
shadow-lg
hover:scale-105
duration-300
`;

const ProductTitle = tw.h3`
  text-base
  font-semibold
`;

const ProudctPrice = tw.span`
  text-sm
  font-light
`;

export default ProductCard;