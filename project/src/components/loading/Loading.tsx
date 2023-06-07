import { FC } from "react"
import { LoadingContainer } from "./Loading.styled"
import Spinner from '../../assets/loading/Loading.svg'

const Loading : FC = ()=> {
  return (
    <LoadingContainer>
      <img src={Spinner} alt="spinner" />
    </LoadingContainer>
  )
}

export default Loading;