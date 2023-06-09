import tw from "tailwind-styled-components";

export const FooterContainer = tw.footer`
  w-100vw
  h-20
  flex
  flex-col
  items-center
  justify-center
  border-t
  dark:border-slate-500
`;

export const FooterText = tw.span`
  text-sm
  text-slate-400
`;