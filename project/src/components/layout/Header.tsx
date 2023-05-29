import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";
import HamburgerModalProps from "../../types/HamburgerModalProps";

export default function Header({
  modalState,
  modalSwitch,
}: HamburgerModalProps) {
  return (
    <HeaderContainer>
      <div className="flex items-center gap-3">
        <Link to="/">
          <Image src="../../../public/logo.png" width={52} height={52} />
        </Link>
        <Link to="/">
          <LogoText>Smart</LogoText>
        </Link>
      </div>
      <Image
        src="../../../public/hamburger.png"
        width={32}
        height={9}
        onClick={modalSwitch.bind(null, !modalState)}
      />
    </HeaderContainer>
  );
}

//tailwind
const HeaderContainer = tw.div`
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
`;

const LogoText = tw.h3`
  text-3xl
  font-extrabold  
`;

const Image = tw.img`
 w-${(props) => props.width && props.width}
 h-${(props) => props.height && props.height}
 cursor-pointer
`;
