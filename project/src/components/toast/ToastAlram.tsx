import { FC } from "react"
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../modules/hooks";
import { removeToast } from "../../modules/toastSlice";
import { ToastAlramContainer, Toast, ToastImg } from "./ToastAlram.styled";
import bookmarkOn from '../../assets/bookmark/bookmark-on.png';
import bookmarkOff from '../../assets/bookmark/bookmark-off.png';

const ToastAlram: FC = () => {
  const dispatch = useAppDispatch();
  const toastList = useAppSelector(state => state.toastAlram.toastList);

  useEffect(()=>{
    if (toastList.length > 6){
      dispatch(removeToast());
    }

    const remove = setTimeout(()=> {
      dispatch(removeToast());
    }, 500)

    return ()=> clearTimeout(remove)
  }, [toastList])
  
  return(
    <ToastAlramContainer>
      {
        toastList.map((toast, idx) => (
        <Toast key={idx}>
          <ToastImg src={toast.bookmark ? bookmarkOn : bookmarkOff}/>
          <span>{toast.message}</span>
        </Toast>))
      }
    </ToastAlramContainer>
  )
};

export default ToastAlram;