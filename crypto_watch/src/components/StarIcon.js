import React, { useEffect, useState } from "react";

const StarIcon = ({ coinId }) => {
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        if (window.localStorage.coinList) {
            let favList = window.localStorage.coinList.split(",");
            if (favList.includes(coinId)) {
                setLiked(true);
            } else {
                setLiked(false);
            }
        }
    }, [coinId]);

    const idChecker = (id) => {
        let favList = null;

        if (window.localStorage.coinList) {
            favList = window.localStorage.coinList.split(",");
        }

        if (favList) {
            if (favList.includes(id)) {
                window.localStorage.coinList = favList.filter((coin) => coin !== id);
                setLiked(false);
            } else {
                window.localStorage.coinList = [...favList, coinId];
                setLiked(true);
            }
        } else {
            window.localStorage.coinList = coinId;
            setLiked(true);
        }
    };

    return (
        <img
        onClick={() => idChecker(coinId)}
        src={liked ? "./assets/star-full.svg" : "./assets/star-empty.svg"} 
        alt="Star icon" 
        />
    );
};

export default StarIcon;