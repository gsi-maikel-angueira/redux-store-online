import { useAppSelector } from "../hooks";
import ProductDetails from "./ProductDetails";

const BasketProducts = () => {
  const { products, total } = useAppSelector((state) => state.basket);

  return (
    <div className="py-4">
      <div>
        {products.map((product, i) => (
          <ProductDetails
            key={i}
            name={product.name}
            price={product.price}
            image={product.image}
            amount={product.amount}
          />
        ))}
      </div>
      <div className="flex flex-row items-center justify-evenly py-8">
        <p className="text-2xl font-medium">Total</p>
        <p className="text-2xl font-medium">${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default BasketProducts;
