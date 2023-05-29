import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setProducts } from "../../modules/productSlice";

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=100`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setProducts(data.products));
      });
  });

  return <div>Main</div>;
}
