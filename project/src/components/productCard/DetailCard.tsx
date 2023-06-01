import { FC } from "react"
import tw from "tailwind-styled-components";
import { useDispatch } from "react-redux";
import { switchDetailModal } from "../../modules/detailModalSlice";
import ApiDataInterFace from "../../modules/apidata.interface";
import BookmarkButton from "../button/BookmarkButton";
interface DetailCardProps {
  product : ApiDataInterFace
}

const DetailCard: FC<DetailCardProps> = (props) => {
  const { product } = props;
  const dispatch = useDispatch();

  return (
    <DetailCardContainer style={{ backgroundImage: `url('${product.thumbnail}')` }}>
      <DetailCardButton onClick={()=> dispatch(switchDetailModal(false))}>
        X
      </DetailCardButton>
      <DetailCardText>{product.title}</DetailCardText>
      <BookmarkButton id={product.id} bookmark={product.bookmark}/>
    </DetailCardContainer>
  )
}

// tailwind
const DetailCardContainer = tw.div`
  w-96
  h-60
  rounded-xl
  relative
  shadow-2xl
`

const DetailCardText = tw.span`
  absolute
  left-2
  bottom-3
  py-2
  px-4
  bg-white
  text-xs
  rounded-xl
  font-extrabold
`

const DetailCardButton = tw.button`
  absolute
  py-1
  px-2
  rounded-lg
  top-2
  right-3
  bg-white
  border-2
  shadow-md
  font-semibold
  cursor-pointer
  hover:scale-110
  duration-300
`


export default DetailCard;