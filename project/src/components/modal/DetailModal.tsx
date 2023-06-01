import { FC } from "react"
import tw from "tailwind-styled-components";
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

// tailwind
const DetailModalContainer = tw.div`
  w-screen
  h-screen
  bg-white/50
  backdrop-blur-sm
  fixed
  z-50
  flex
  justify-center
  items-center
`

export default DetailModal;