import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";
import HamburgerModalProps from "../../types/HamburgerModalProps";

export default function HamburgerModal({ modalSwitch }: HamburgerModalProps) {
  return (
    <ModalContainer>
      <Link to="/" onClick={modalSwitch.bind(null, false)}>
        <ModalList>김다은님, 안녕하세요!</ModalList>
      </Link>
      <Link to="/products/list" onClick={modalSwitch.bind(null, false)}>
        <ModalList>상품리스트 페이지</ModalList>
      </Link>
      <Link to="/bookmark" onClick={modalSwitch.bind(null, false)}>
        <ModalList>북마크 페이지</ModalList>
      </Link>
    </ModalContainer>
  );
}

//tailwind
const ModalContainer = tw.ul`
  w-52
  h-36
  bg-white
  drop-shadow-xl
  rounded-xl
  border-solid
  border
  border-slate-300
  absolute
  top-16
  right-7
`;

const ModalList = tw.li`
  w-100%
  h-12
  pl-5
  flex
  items-center
  text-base
  hover:bg-slate-200
  ease-in
  duration-200
  cursor-pointer
`;
