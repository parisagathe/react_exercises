import React, { useState } from "react";
import PercentChange from "./PercentChange";
import StarIcon from "./StarIcon";
import CoinChart from "./CoinChart";

const TableLine = ({ coin, index }) => {
    const [showChart, setShowChart] = useState(false);

    const mktCapFormater = (num) => {
        let newNum = String(num).split("").slice(0, -6);

        if (newNum.length > 3) {
            newNum[newNum.length - 4] += " ";
            return newNum.join("");
        } else {
            return "0," + newNum.join("");
        }
    };

    const priceFormater = (num) => {
        if (Math.round(num).toString().length < 4) {
            return new Intl.NumberFormat("us-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 7,
            }).format(num);
        } else {
            return num;
        }
    };

    return (
        <div className="table-line">
            <div className="infos-container">
                <StarIcon coinId={coin.id} />
                <p>{index + 1}</p>
                <div className="img">
                    <img src={coin.image} height="20" alt="Logo" />
                </div>
                <div className="infos">
                    <div 
                    className="chart-img"
                    onMouseEnter={(e) => {
                        setShowChart(true);   
                    }}
                    onMouseLeave={() => setShowChart(false)}
                    >
                        <img src="./assets/chart-icon.svg" alt="Chart icon" />
                        <div className="chart-container" id={coin.name}>
                            {showChart && <CoinChart coinId={coin.id} coinName={coin.name} />}
                        </div>
                    </div>
                    <h4>{coin.name}</h4>
                    <span>- {coin.symbol.toUpperCase()}</span>
                    <a
                        target="_blank"
                        href={"https://www.coingecko.com/fr/pi%C3%A8ces/" + coin.name.toLowerCase().replace(" ", "-").replace(" ", "-").replace(" ", "-")
                        }
                        >
                        <img src="./assets/info-icon.svg" alt="Info icon" />
                    </a>
                </div>
            </div>
            <p>{priceFormater(coin.current_price).toLocaleString()} $</p>
            <p className="mktcap">{mktCapFormater(coin.market_cap).toLocaleString("us-US")} M$</p>
            <p className="volume">{coin.total_volume.toLocaleString("us-US")} $</p>
            <PercentChange percent={coin.price_change_percentage_1h_in_currency} />
            <PercentChange percent={coin.market_cap_change_percentage_24h} />
            <PercentChange percent={coin.price_change_percentage_7d_in_currency} />
            <PercentChange percent={coin.price_change_percentage_30d_in_currency} />
            <PercentChange percent={coin.price_change_percentage_200d_in_currency} />
            <PercentChange percent={coin.price_change_percentage_1y_in_currency} />
            {coin.ath_change_percentage > -3 ? (
                "ATH !"
            ) : (
                <PercentChange percent={coin.ath_change_percentage} />
            )}
        </div>
    );
};

export default TableLine;