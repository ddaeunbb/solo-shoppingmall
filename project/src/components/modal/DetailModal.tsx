import { FC } from "react"
import tw from "tailwind-styled-components";
import DetailCard from "../productCard/DetailCard";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";

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


const DetailModal :FC  = () => {
  const detailProduct = useSelector((state : RootState) => state.detailModal.modalContent)

  return (
    <DetailModalContainer>
      <DetailCard product={detailProduct} />
    </DetailModalContainer>
  )
}


export default DetailModal;