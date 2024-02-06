import axios from "axios";
import { useEffect, useState } from "react";
import Coin from "./components/Coin";
import Navbar from "./components/Navbar";

const App = () => {
  const [coins, setCoins] = useState([]);

  const URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en";

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setCoins(res.data);
        console.log(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Coin coins={coins} />
    </div>
  );
};

export default App;
