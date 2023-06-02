import { FC } from "react";
import { ModalContainer, ModalList } from "./HamburgerModal.styled";
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

export default HamburgerModal;