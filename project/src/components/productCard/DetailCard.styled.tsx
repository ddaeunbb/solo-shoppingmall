import tw from "tailwind-styled-components";

export const DetailCardContainer = tw.div`
  w-96
  h-60
  rounded-xl
  relative
  shadow-2xl
`

export const DetailCardText = tw.span`
  absolute
  left-2
  bottom-3
  py-2
  px-4
  bg-white
  text-xs
  rounded-xl
  font-extrabold
  dark:text-slate-100
  dark:bg-gray-700
`

export const DetailCardButton = tw.button`
  absolute
  py-1
  px-2
  rounded-lg
  top-2
  right-3
  bg-white
  dark:bg-gray-700
  border-2
  shadow-md
  font-semibold
  cursor-pointer
  hover:scale-110
  duration-300
`