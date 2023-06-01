import { FC } from "react";
import { FooterContainer, FooterText } from "./Footer.styled";

const Footer : FC = () => {
  return (
    <FooterContainer>
      <FooterText>개인정보 처리방침 | 이용약관</FooterText>
      <FooterText>All rights reserved @ codestates</FooterText>
    </FooterContainer>
  );
}
export default Footer