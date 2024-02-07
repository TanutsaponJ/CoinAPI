import React, { useEffect, useState } from "react";
import CoinsItem from "./CoinsItem";
import { Link } from "react-router-dom";
import Loading from "../utils/Loading";

interface CoinProps {
  id: string;
  market_cap_rank: number;
  image: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
  market_cap: number;
}

interface CoinProps {
  coins: CoinProps[];
}

const Coin: React.FC<CoinProps> = ({ coins }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (coins.length) {
      setLoading(false);
    }
  }, [coins]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-screen-xl mx-auto ">
      <div>
        <div className="flex justify-between items-center bg-[#26272b]  shadow-xl rounded-sm my-2 font-extrabold py-6 px-4  mx-20">
          <p>#</p>
          <p className="ml-[-4rem]">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Mkt Cap</p>
        </div>

        {coins.map((coin) => {
          return (
            <Link to={`/coin/${coin.id}`} key={coin.id}>
              <CoinsItem coins={coin} />;
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Coin;
