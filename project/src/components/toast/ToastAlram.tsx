import { FC } from "react"
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeToast } from "../../modules/toastSlice";
import { RootState } from "../../modules";
import { ToastAlramContainer, Toast, ToastImg } from "./ToastAlram.styled";
import bookmarkOn from '../../assets/bookmark/bookmark-on.png';
import bookmarkOff from '../../assets/bookmark/bookmark-off.png';

const ToastAlram: FC = () => {
  const dispatch = useDispatch();
  const toastList = useSelector((state: RootState) => state.toastAlram.toastList);

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