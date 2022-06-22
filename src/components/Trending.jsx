import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from "./Style.module.css";

const Trending = () => {
  const [trending, setTrending] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/search/trending';

  useEffect(() => {
    axios.get(url).then((response) => {
      setTrending(response.data.coins);
      //   console.log(response.data.coins)
    });
  }, []);

  return (
    <div className='rounded-div my-12 py-8 text-primary'>
      <div className="container">
        <h1 className='text-2xl font-bold py-4'>Trending Coins</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {trending.map((coin, idx) => (
            <div className='table-responsive' key={idx}>
              <table className='table'>
                <tbody>
                  <tr className={classes.trandtr}>
                    <td><img className={classes.trendImg} src={coin.item.small} alt='/' /></td>
                    <td><p className='font-bold'>{coin.item.name}</p></td>
                    <td><p>{coin.item.symbol}</p></td>
                    <td><img className={classes.trendImg} src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579' alt='/' /></td>
                    <td><p>{coin.item.price_btc.toFixed(7)}</p></td>
                    <td><p>#{coin.item.market_cap_rank}</p></td>
                  </tr>
                </tbody>
              </table>
            </div>
            // <div  className='rounded-div flex justify-between p-4 hover:scale-105 ease-in-out duration-300'>
            //   <div className='flex w-full items-center justify-between'>
            //     <div className='flex'>
            //       <img
            //         className={classes.trendImg}
            //         src={coin.item.small}
            //         alt='/'
            //       />
            //       <div>
            //         <p className='font-bold'>{coin.item.name}</p>
            //         <p>{coin.item.symbol}</p>
            //       </div>
            //     </div>
            //     <div className='flex items-center'>
            //       <img
            //         className={classes.trendImg}
            //         src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
            //         alt='/'
            //       />
            //       <p>{coin.item.price_btc.toFixed(7)}</p>
            //     </div>
            //     <br />
            //   </div>
            //   <p>#{coin.item.market_cap_rank}</p>
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
