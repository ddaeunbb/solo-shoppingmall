import { FC } from "react";
import tw from "tailwind-styled-components";

const Footer : FC = () => {
  return (
    <FooterContainer>
      <FooterText>개인정보 처리방침 | 이용약관</FooterText>
      <FooterText>All rights reserved @ codestates</FooterText>
    </FooterContainer>
  );
}

// tailwind
const FooterContainer = tw.footer`
  w-100vw
  h-20
  flex
  flex-col
  items-center
  justify-center
  border-t
`;

const FooterText = tw.span`
  text-sm
  text-slate-400
`;

export default Footer