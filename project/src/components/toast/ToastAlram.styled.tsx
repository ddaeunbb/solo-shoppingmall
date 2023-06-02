import tw from "tailwind-styled-components";

export const ToastAlramContainer = tw.div`
  flex
  flex-col
  w-[22rem]
  fixed
  z-50
  right-3
  bottom-3
  gap-3
`

export const Toast = tw.div`
  w-[22rem]
  h-20
  bg-white
  rounded-2xl
  border-2
  shadow-md
  flex
  justify-left
  items-center
  font-semibold
  text-lg
  pl-5
  gap-5
`

export const ToastImg = tw.img`
  w-30
  h-30
`

