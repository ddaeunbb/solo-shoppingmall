import tw from "tailwind-styled-components";

export const MainContainer = tw.div`
  w-100vw
  flex
  flex-col
  items-center
  py-5
`;

export const ProductContainer = tw.div`
  flex
  flex-wrap
  justify-center
  gap-5
  py-10
`;

export const ListText = tw.h1`
  w-70vw
  font-extrabold
  text-xl
  text-white
  bg-indigo-500
  border-0
  p-3
  rounded-xl
  shadow-lg
`;