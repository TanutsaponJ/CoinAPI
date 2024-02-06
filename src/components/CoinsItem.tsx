import React from "react";

interface CoinProps {
  market_cap_rank: number;
  image: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
  market_cap: number;
}

interface CoinsItemProps {
  coins: CoinProps;
}

const CoinsItem: React.FC<CoinsItemProps> = ({ coins }) => {
  return (
    <div className="flex md:flex-row my-16 justify-between items-center bg-[#26272b] shadow-xl rounded-sm hover:scale-105 duration-300 ease-in-out cursor-pointer text-center mx-20 px-4 py-6">
      <p>{coins.market_cap_rank}</p>
      <div className="flex items-center">
        <img src={coins.image} alt="" className="h-[40px] mr-[8px] w-auto" />
        <p className="uppercase">{coins.symbol}</p>
      </div>
      <p>$ {coins.current_price.toLocaleString()}</p>
      <p>{coins.price_change_percentage_24h.toFixed(2)} %</p>
      <p className="md:block hidden">$ {coins.total_volume.toLocaleString()}</p>
      <p className="md:block hidden">$ {coins.market_cap.toLocaleString()}</p>
    </div>
  );
};

export default CoinsItem;
