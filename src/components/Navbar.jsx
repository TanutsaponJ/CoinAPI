import { FaCoins } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <FaCoins className="text-2xl text-purple-700" />
        <h1 className="text-2xl font-semibold">Coin</h1>
        <span className="text-purple-700 font-bold text-2xl">Search</span>
      </div>
    </div>
  );
};

export default Navbar;
