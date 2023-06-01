import { FC } from "react";
import tw from "tailwind-styled-components";
import { useDispatch } from "react-redux";
import bookmarkOn from '../../assets/bookmark/bookmark-on.png'
import bookmarkOff from '../../assets/bookmark/bookmark-off.png'
import { setBookmark } from "../../modules/productSlice";
import setLocalStorage from "../../utils/setLocalStorage";
import { setDetailModalBookmark } from "../../modules/detailModalSlice";

interface BookmarkButtonProps {
  id: number;
  bookmark?: boolean;
}

const BookmarkButton : FC<BookmarkButtonProps> = (props) => {
  const { id, bookmark } = props;
  const dispatch = useDispatch();
  const bookmarkHandler = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
    event.stopPropagation();
    dispatch(setBookmark(id));
    setLocalStorage(id);
    dispatch(setDetailModalBookmark());
  }

  return (
    <BookmarkButtonContainer style={{backgroundImage: `url('${bookmark ? bookmarkOn : bookmarkOff}')` }} onClick={(event)=> bookmarkHandler(event, id)}/>
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

export default BookmarkButton;