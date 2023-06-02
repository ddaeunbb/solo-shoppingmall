import { FC } from "react"
import tw from "tailwind-styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";
import { ToastAlramContainer, Toast } from "./ToastAlram.styled";

const ToastAlram: FC = () => {
  const toastList = useSelector((state: RootState) => state.toastAlram.toastList);
  
  return(
    <ToastAlramContainer>
      {
        toastList.map((toast, idx) => (<Toast key={idx}>{toast.message}</Toast>))
      }
    </ToastAlramContainer>
  )
};

export default ToastAlram;