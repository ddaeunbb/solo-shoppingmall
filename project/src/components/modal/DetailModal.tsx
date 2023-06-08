import { FC } from "react"
import { DetailModalContainer } from "./DetailModal.styled";
import DetailCard from "../productCard/DetailCard";
import { useAppDispatch, useAppSelector } from "../../modules/hooks";
import { switchDetailModal } from "../../modules/detailModalSlice";

const DetailModal :FC  = () => {
  const dispatch = useAppDispatch();
  const detailProduct = useAppSelector(state => state.detailModal.modalContent)

  return (
    <DetailModalContainer onClick={()=>dispatch(switchDetailModal(false))}>
      <DetailCard product={detailProduct} />
    </DetailModalContainer>
  )
}

export default DetailModal;