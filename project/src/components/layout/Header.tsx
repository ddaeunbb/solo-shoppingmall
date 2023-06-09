import { FC } from "react";
import { HeaderContainer, LogoText, Image } from "./Header.styled";
import { useAppDispatch } from "../../modules/hooks";
import { switchModal } from "../../modules/hamburgerModalSlice";
import { Link } from "react-router-dom";
import logo from "../../assets/common/logo.png";
import ThemeButton from "../button/ThemeButton";
import hamburger from "../../assets/common/hamburger.png";

const Header: FC  = () => {
  const dispatch = useAppDispatch();

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

      <div className="flex items-center gap-5">
        <ThemeButton />
        <Image
          className="dark:invert"
          src={hamburger}
          width={32}
          height={9}
          onClick={() => {
            dispatch(switchModal());
          }}
        />
      </div>
    </HeaderContainer>
  );
}

export default Header;