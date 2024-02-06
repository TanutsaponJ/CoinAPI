import CoinsItem from "./CoinsItem";

const Coin = (props) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div>
        <div className="flex  justify-between items-center bg-[#26272b]  shadow-xl rounded-sm my-2 font-extrabold px-1  mx-20">
          <p>#</p>
          <p className="ml-[-4rem]">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Mkt Cap</p>
        </div>

        {props.coins.map((coins) => {
          return <CoinsItem coins={coins} key={coins.id} />;
        })}
      </div>
    </div>
  );
};

export default Coin;
