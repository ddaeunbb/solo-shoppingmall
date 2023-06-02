import { FC } from "react"
import tw from "tailwind-styled-components";


const ToastAlramContainer = tw.div`
  w-40
  h-40
  bg-blue-400
`

const ToastAlram: FC = () => {
  return (
    <ToastAlramContainer  />
  )
}


export default ToastAlram;