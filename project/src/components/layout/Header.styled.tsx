import tw from "tailwind-styled-components";

export const HeaderContainer = tw.div`
  box-border
  h-20
  w-100%
  bg-white
  drop-shadow-lg
  flex
  items-center
  justify-between
  px-6
  sticky
  top-0
  z-10
`;

export const LogoText = tw.h3`
  text-3xl
  font-extrabold  
`;

interface ImageProps {
  width: number;
  height: number;
}

export const Image = tw.img<ImageProps>`
  w-${(props) => props.width}
  h-${(props) => props.height}
  cursor-pointer
`;