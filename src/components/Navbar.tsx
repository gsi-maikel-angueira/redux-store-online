import { useAppSelector } from "../hooks";

const Navbar = () => {
  const amount = useAppSelector((state) => state.basket.amount);

  return (
    <div className="flex flex-row justify-evenly mt-2 pt-4 text-lg front-medium">
      <p>Home</p>
      <p>
        Basket
        <span className="text-xs align-top bg-red-500 text-white rounded-full px-2 mx=1">
          {amount}
        </span>
      </p>
    </div>
  );
};

export default Navbar;
