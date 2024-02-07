import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CoinsRoutes = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});

  const COIN_ID_URL = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(COIN_ID_URL)
      .then((res) => {
        setCoin(res.data);
        console.log(coin);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [COIN_ID_URL]);

  return (
    <div>
      <div>
        <div>
          <h1>{coin.name}</h1>
        </div>

        <div>
          <div>
            <span>Rank # {coin.market_cap_rank}</span>
          </div>
          <div>
            <div>
              {coin.image ? <img src={coin.image.small} alt="" /> : null}
              <p>{coin.name}</p>
              <p>{coin.symbol}</p>
            </div>
            <div>
              {coin.market_data?.current_price ? (
                <h1>{coin.market_data.current_price.usd}</h1>
              ) : null}
            </div>
          </div>
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1year</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  {coin.market_data?.price_change_percentage_1h_in_currency ? (
                    <p>
                      coin.market_data.price_change_percentage_1h_in_currency.usd
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      coin.market_data.price_change_percentage_24h_in_currency.usd
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_7d_in_currency ? (
                    <p>
                      coin.market_data.price_change_percentage_7d_in_currency
                      .usd
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_14d_in_currency ? (
                    <p>
                      coin.market_data.price_change_percentage_14d_in_currency
                      .usd
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_30d_in_currency ? (
                    <p>
                      coin.market_data.price_change_percentage_30d_in_currency
                      .usd
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_1y_in_currency ? (
                    <p>
                      coin.market_data.price_change_percentage_1y_in_currency
                      .usd
                    </p>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <div>
            {/* left side */}
            <div>
              <div>
                <h4>24 Hour Low</h4>

                {coin.market_data?.low_24h ? (
                  <p>{coin.market_data.low_24}</p>
                ) : null}
              </div>
              <div>
                <h4>24 Hour High</h4>

                {coin.market_data?.high_24h ? (
                  <p>{coin.market_data.high}</p>
                ) : null}
              </div>
            </div>

            {/* Right side */}

            <div>
              <div>
                <h4>Market Cap</h4>
                {coin.market_data?.market_cap ? (
                  <p>{coin.market_data.market_cap.usd}</p>
                ) : null}
              </div>
              <div>
                <h4>Circulating Supply</h4>

                {coin.market_data ? (
                  <p>{coin.market_data.circulating_supply}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h3>About</h3>
            <p>{coin.description ? coin.description.en : ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinsRoutes;
