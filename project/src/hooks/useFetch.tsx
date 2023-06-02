import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import getLocalStorage from "../utils/getLocalStorage";
import { setProducts } from "../modules/productSlice";
import ApiDataInterFace from "../modules/apidata.interface";

export default function useFetch(initialUrl: string){
  const dispatch = useDispatch();
  const [url, setUrl] = useState<string>(initialUrl);
  const [data, setData] = useState<ApiDataInterFace[]>([]);

  const fetchData = async () => {
    fetch(url)//
      .then(res => res.json())
      .then(data => {
        const newData = getLocalStorage(data.products, 'id');
        dispatch(setProducts(newData));
        setData(newData);
      })
      .catch(error => console.log(error))
  }

  useEffect(()=>{
    fetchData();
  }, [url])

  return [data, setUrl];
}
