import React, { useState } from "react";
import TableLine from "./TableLine";

const Table = ({ coinsData }) => {

    const [rangeNumber, setRangeNumber] = useState(100);
    const tableHeader = ["Prix", "MarketCap", "Volume", "1h", "1d", "1w", "1m", "1y", "ATH"];
    const [orderBy, setOrderBy] = useState("");

    return (
        <div>
            <div className="table-container">
                <ul className="table-header">
                    <div className="range-container">
                        <span>
                            Top{" "} <input type="text" value={rangeNumber} onChange={(e) => setRangeNumber(e.target.value)} />
                        </span>
                        <input type="range" min="1" max="250" value={rangeNumber} onChange={(e) => setRangeNumber(e.target.value)} />
                    </div>
                    {tableHeader.map((el) => (
                        <li key={el}>
                            <input type="radio" name="header-element" id={el} defaultChecked={el === orderBy || el === orderBy + "reverse" ? true : false} onClick={() => {
                                if (orderBy === el) {
                                    setOrderBy(el + "reverse")
                                } else {
                                    setOrderBy(el);
                                }
                            }} />
                            <label htmlFor={el}>{el}</label>
                        </li>
                    ))}
                </ul>
                {coinsData && coinsData
                .slice(0, rangeNumber)
                .map((coin, index) => <TableLine coin={coin} index={index} />)}
            </div>
        </div>
    );
};

export default Table;