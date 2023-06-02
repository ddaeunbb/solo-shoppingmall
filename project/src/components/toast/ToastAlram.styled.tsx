import tw from "tailwind-styled-components";

export const ToastAlramContainer = tw.div`
  flex
  flex-col
  w-96
  fixed
  z-50
  right-3
  bottom-3
  gap-3
`

export const Toast = tw.div`
  w-83
  h-20
  bg-white
  rounded-2xl
  border-2
  shadow-md
  flex
  justify-center
  items-center
  font-semibold
  text-lg
`