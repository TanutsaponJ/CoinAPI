import axios from "axios";
import { useEffect, useState } from "react";
import Coin from "./components/Coin";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import CoinsRoutes from "./routes/CoinsRoutes";

const App = () => {
  const [coins, setCoins] = useState([]);

  const URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en";

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coin coins={coins} />} />
        <Route path="/coin" element={<CoinsRoutes />}>
          <Route path=":coinId" element={<CoinsRoutes />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
