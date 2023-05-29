import tw from "tailwind-styled-components";
import ApiDataInterFace from "../../modules/apidata.interface";

interface ProductCardProps {
  product: ApiDataInterFace;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <ProductImage
        style={{ backgroundImage: `url('${product.thumbnail}')` }}
      />
      <div className="pl-5 pt-2">
        <ProductTitle>{product.title}</ProductTitle>
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
`;

const ProductTitle = tw.h3`
  text-base
  font-semibold
`;

const ProudctPrice = tw.span`
  text-sm
  font-light
`;
