import React, { useEffect, useState } from "react";
import axios from "axios";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import colors from "../styles/_settings.scss";

const CoinChart = ({ coinId, coinName }) => {
    const [duration, setDuration] = useState(30);
    const [coinData, setCoinData] = useState();

    const headerData = [
        [1, "1 day"],
        [3, "3 days"],
        [7, "7 days"],
        [30, "1 month"],
        [91, "3 months"],
        [181, "6 months"],
        [365, "1 year"],
        [3000, "Max"],
    ];

    useEffect(() => {
        let dataArray = [];

        axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${duration}${duration > 32 ? "&interval=daily" : ""}`)
        .then((res) => {
            for (let i = 0; i < res.data.prices.length; i++) {
                let price = res.data.prices[i][1];

                dataArray.push({
                    date: new Date(res.data.prices[i][0]).toLocaleDateString(),
                    price: price < "50" ? price : parseInt(price)
                });
            }
            setCoinData(dataArray);
        });
    }, [coinId, duration]);

    return (
        <div className="coin-chart">
            <p>{coinName}</p>
            <div className="btn-container">
                {headerData.map((el) => {
                    return (
                        <div 
                        key={el[0]}
                        htmlFor={"btn" + el[0]}
                        onClick={() => setDuration(el[0])}
                        className={el[0] === duration ? "active-btn" : ""}
                        >
                            {el[1]}
                        </div>
                    );
                })}
            </div>
            <AreaChart 
                width={680}
                height={250}
                data={coinData}
                margin={{ top: 10, right: 0, left: 100, bottom: 0 }}
            >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="7%" stopColor={colors.color1} stopOpacity={0.8} />
                        <stop offset="93%" stopColor={colors.white1} stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="date" />
                <YAxis domain={["auto", "auto"]} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area 
                    type="monotone"
                    dataKey="price"
                    strokes={colors.color1}
                    fillOpacity={1}
                    fill="url(#colorUv)"
                />
            </AreaChart>
        </div>
    );
};

export default CoinChart;