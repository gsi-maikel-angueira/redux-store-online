import { decrementAmount, incrementAmount } from "../features/basketSlice";
import { useAppDispatch } from "../hooks";
import { Product } from "../model/product";

const ProductDetails = (props: Product) => {
  const { name, image, amount, price } = props;
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="flex flex-row items-center gap-8 px-10">
        <img src={image} alt={name} className="w-40" />
        <div className="w-1/2 px-10">
          <p className="text-xl font-medium">{name}</p>
          <p className="text-lg tracking-wide">${price.toFixed(2)}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg font-medium">Amount</p>
          <div className="flex flex-row items-center gap-4 text-gray-600">
            <button
              className="text-lg"
              onClick={() => amount > 1 && dispatch(decrementAmount({ name }))}
            >
              -
            </button>
            <p>{amount}</p>
            <button
              className="text-lg"
              onClick={() => dispatch(incrementAmount({ name }))}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
