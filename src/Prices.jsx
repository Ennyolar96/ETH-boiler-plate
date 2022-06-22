import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
// import SubNav from "./components/SubNav";

import { ThemeProvider } from "./components/context/ThemeContext";
import axios from "axios";

import CoinSearch from "./components/CoinSearch";
import Trending from "./components/Trending";
import { Pagination } from "antd";
import './App.css'

import CoinPage from "routes/CoinPage";


function Prices() {
    const [coins, setCoins] = useState([]);
    const [total, setTotal] = useState(5);
    const [page, setPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const url =
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${page}&sparkline=true`;

    useEffect(() => {
        setLoading(true);
        axios.get(url).then((response) => {
            setCoins(response.data);
            setTotal(response.data.length);
            setLoading(false);
            // console.log(response.data)
        });
    }, [url]);

    const indexOfLastPage = page + postPerPage;
    const indexOfFirstPage = indexOfLastPage - postPerPage;
    const currentPosts = coins.slice(indexOfFirstPage, indexOfLastPage);

    return (
        <ThemeProvider>
            {/* <SubNav /> */}
            <Switch>
                <Route path='/'
                >  {currentPosts.map((coin) => (
                    <CoinSearch key={coin.id} coins={coins} />
                ))}
                </Route>
                <Route path='/' > {<CoinSearch coins={coins} />} </Route>
                <Route path='/coin/:coinId' element={<CoinPage />}>
                    <Route path=':coinId' />
                </Route>
            </Switch>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                <Pagination loading={loading} onChange={(page) => setPage(page)} pageSize={10} total={total} current={page} />
            </div><br />

            <div>
                <Trending />
            </div><br /><br />

        </ThemeProvider>
    );
}

export default Prices;
