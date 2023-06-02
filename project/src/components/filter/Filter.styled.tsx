import tw from "tailwind-styled-components";

export const FilterContainer = tw.ul`
  w-100vw;
  flex
  h-43;
  gap-5
  my-10
  justify-center
`

export const FilterTab = tw.li`
  flex-col
  text-center
`

interface FilterImgProps {
  check: boolean;
}

export const FilterImg = tw.img<FilterImgProps>`
  w-16
  h-16
  border
  rounded-full
  p-2
  ${(props) => props.check && 'bg-indigo-300'}
  hover:bg-indigo-300
  cursor-pointer
`

export const FilterText = tw.span`
  text-sm
  font-semibold
`