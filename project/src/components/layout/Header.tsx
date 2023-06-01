import { FC } from "react";
import { HeaderContainer, LogoText, Image } from "./Header.styled";
import { useDispatch } from "react-redux";
import { switchModal } from "../../modules/hamburgerModalSlice";
import { Link } from "react-router-dom";
import logo from "../../assets/common/logo.png";
import hamburger from "../../assets/common/hamburger.png";

const Header: FC  = () => {
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <div className="flex items-center gap-3">
        <Link to="/">
          <Image src={logo} width={52} height={52} />
        </Link>
        <Link to="/">
          <LogoText>Smart</LogoText>
        </Link>
      </div>
      <Image
        src={hamburger}
        width={32}
        height={9}
        onClick={() => {
          dispatch(switchModal());
        }}
      />
    </HeaderContainer>
  );
}

export default Header;