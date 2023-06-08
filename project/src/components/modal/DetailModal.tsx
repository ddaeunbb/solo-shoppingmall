import { FC } from "react"
import { DetailModalContainer } from "./DetailModal.styled";
import DetailCard from "../productCard/DetailCard";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules";
import { switchDetailModal } from "../../modules/detailModalSlice";

const DetailModal :FC  = () => {
  const dispatch = useDispatch();
  const detailProduct = useSelector((state : RootState) => state.detailModal.modalContent)

  return (
    <DetailModalContainer onClick={()=>dispatch(switchDetailModal(false))}>
      <DetailCard product={detailProduct} />
    </DetailModalContainer>
  )
}

export default DetailModal;