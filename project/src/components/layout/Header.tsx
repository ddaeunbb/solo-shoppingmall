import tw from "tailwind-styled-components";
import { useDispatch } from "react-redux";
import { switchModal } from "../../modules/hamburgerModalSlice";
import { Link } from "react-router-dom";
import logo from "../../assets/common/logo.png";
import hamburger from "../../assets/common/hamburger.png";

export default function Header() {
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
  top-0
  z-10
`;

const LogoText = tw.h3`
  text-3xl
  font-extrabold  
`;

interface ImageProps {
  width: number;
  height: number;
}

const Image = tw.img<ImageProps>`
  w-${(props) => props.width}
  h-${(props) => props.height}
  cursor-pointer
`;
