import { FC } from "react"
import { DetailCardContainer, DetailCardButton, DetailCardText} from "./DetailCard.styled";
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

export default DetailCard;