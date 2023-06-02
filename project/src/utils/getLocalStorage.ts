import ApiDataInterFace from "../modules/apidata.interface";

export default function getLocalStorage(initialData: ApiDataInterFace[], initialName: string) {
  let storageData = localStorage.getItem(initialName);
  if( storageData === null ){
    return initialData;
  } else {
    let parsedStorage = JSON.parse(storageData);

    let newData = initialData.map(data => {
      if(parsedStorage.indexOf(data.id) > -1){
        data.bookmark = true;
      }
      return data;
    })
    return newData;
  }
}
