import { FC } from "react";
import { BookmarkButtonContainer } from "./BookmarkButton.styled";
import { useDispatch } from "react-redux";
import bookmarkOn from '../../assets/bookmark/bookmark-on.png'
import bookmarkOff from '../../assets/bookmark/bookmark-off.png'
import { setBookmark } from "../../modules/productSlice";
import setLocalStorage from "../../utils/setLocalStorage";
import { setDetailModalBookmark } from "../../modules/detailModalSlice";
import { addToast } from '../../modules/toastSlice'

interface BookmarkButtonProps {
  id: number;
  bookmark?: boolean;
}

const BookmarkButton : FC<BookmarkButtonProps> = (props) => {
  const { id, bookmark } = props;
  const dispatch = useDispatch();
  const bookmarkHandler = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
    event.stopPropagation();
    dispatch(addToast(!bookmark));
    dispatch(setBookmark(id));
    setLocalStorage(id);
    dispatch(setDetailModalBookmark());
  }

  return (
    <BookmarkButtonContainer style={{backgroundImage: `url('${bookmark ? bookmarkOn : bookmarkOff}')` }} onClick={(event)=> bookmarkHandler(event, id)}/>
  )
}

export default BookmarkButton;