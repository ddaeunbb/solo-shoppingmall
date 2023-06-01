import { FC } from "react";
import tw from "tailwind-styled-components";
import { useDispatch } from "react-redux";
import { closeModal } from "../../modules/hamburgerModalSlice";
import { Link } from "react-router-dom";

const HamburgerModal : FC = () => {
  const dispatch = useDispatch();

  return (
    <ModalContainer>
      <Link
        to="/"
        onClick={() => {
          dispatch(closeModal());
        }}
      >
        <ModalList>김다은님, 안녕하세요!</ModalList>
      </Link>
      <Link
        to="/products/list"
        onClick={() => {
          dispatch(closeModal());
        }}
      >
        <ModalList>상품리스트 페이지</ModalList>
      </Link>
      <Link
        to="/bookmark"
        onClick={() => {
          dispatch(closeModal());
        }}
      >
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
  fixed
  top-16
  right-7
  z-10
  overflow-hidden
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

export default HamburgerModal;