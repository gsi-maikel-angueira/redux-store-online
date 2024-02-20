import { useEffect } from "react";
import BasketProducts from "./components/BasketProducts";
import Navbar from "./components/Navbar";
import { useAppDispatch, useAppSelector } from "./hooks";
import { updateTotal } from "./features/basketSlice";

function App() {
  const { products } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateTotal());
  }, [products]);
  return (
    <>
      <Navbar />
      <BasketProducts />
    </>
  );
}

export default App;
