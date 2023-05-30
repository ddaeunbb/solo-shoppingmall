import tw from "tailwind-styled-components";
import { useDispatch } from "react-redux";
import bookmarkOn from '../../assets/bookmark/bookmark-on.png'
import bookmarkOff from '../../assets/bookmark/bookmark-off.png'
import { setBookmark } from "../../modules/productSlice";
import setLocalStorage from "../../utils/setLocalStorage";

interface BookmarkButtonProps {
  id: number;
  bookmark?: boolean;
}

export default function BookmarkButton({id, bookmark} : BookmarkButtonProps) {
  const dispatch = useDispatch();
  const bookmarkHandler = (id: number) => {
    dispatch(setBookmark(id));
    setLocalStorage(id);
  }

  return (
    <BookmarkButtonContainer style={{backgroundImage: `url('${bookmark ? bookmarkOn : bookmarkOff}')` }} onClick={()=> bookmarkHandler(id)}/>
  )
}

//tailwind
const BookmarkButtonContainer = tw.button`
  w-8
  h-8
  drop-shadow-2xl
  bg-cover
  bg-center
  absolute
  right-3
  bottom-3
  hover:scale-110
  transition-all
  duration-100
  cursor-pointer
`