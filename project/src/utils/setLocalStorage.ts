export default function setLocalStorage(id : number) {
  type localData = string | null
  let bookmarkDatas: localData = localStorage.getItem('id');

  if( bookmarkDatas === null){
    let newBookmarkDatas = [id];
    return localStorage.setItem('id', JSON.stringify(newBookmarkDatas));
  } else {
    let parsedDatas = JSON.parse(bookmarkDatas);

    if( parsedDatas.includes(id) ) parsedDatas = parsedDatas.filter((data: number) => data !== id);
    else parsedDatas.push(id);
    localStorage.setItem('id', JSON.stringify(parsedDatas));
  }
}
