const CoinsItem = (props) => {
  return (
    <div className="flex  md:flex-row my-16  justify-between items-center bg-[#26272b]  shadow-xl rounded-sm   hover:scale-105  duration-300 ease-in-out cursor-pointer text-center mx-20 px-4 py-6">
      <p>{props.coins.market_cap_rank}</p>
      <div className="flex items-center">
        <img
          src={props.coins.image}
          alt=""
          className="h-[40px] mr-[8px] w-auto"
        />
        <p className="uppercase">{props.coins.symbol}</p>
      </div>
      <p>$ {props.coins.current_price.toLocaleString()}</p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)} %</p>
      <p className="md:block hidden">
        $ {props.coins.total_volume.toLocaleString()}
      </p>
      <p className="md:block hidden">
        $ {props.coins.market_cap.toLocaleString()}
      </p>
    </div>
  );
};

export default CoinsItem;
