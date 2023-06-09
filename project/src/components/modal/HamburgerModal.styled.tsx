import tw from "tailwind-styled-components";

export const ModalContainer = tw.ul`
  w-52
  h-36
  bg-white
  dark:bg-gray-700
  drop-shadow-xl
  rounded-xl
  border-solid
  border
  border-slate-300
  fixed
  top-16
  right-7
  z-10
  overflow-hidden
`;

export const ModalList = tw.li`
  w-100%
  h-12
  pl-5
  flex
  items-center
  text-base
  hover:bg-slate-200
  hover:dark:bg-slate-400
  ease-in
  duration-200
  cursor-pointer
`;