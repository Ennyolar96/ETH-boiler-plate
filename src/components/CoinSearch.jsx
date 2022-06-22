import React, { useState } from 'react';
import CoinItem from './CoinItem';

const CoinSearch = ({ coins }) => {
  const [searchText, setSearchText] = useState('');
  console.log(coins)
  return (
    <div className='rounded-div my-4'>
      <div className='container'>
        <div className="row row-cols-sm-2 row-cols-2">
          <div className="col">
            <h1 className='text-2xl font-bold my-2'>Search Crypto</h1>
          </div>
          <div className="col">
            <form className='mt-3'>
              <input onChange={(e) => setSearchText(e.target.value)}
                className='form-control shadow-none' type='text' placeholder='Search crypto' />
            </form>
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className='table'>
          <thead>
            <tr className='border-b'>
              <th></th>
              <th className='px-4'>#</th>
              <th className='text-left'>Coin</th>
              <th></th>
              <th>Price</th>
              <th>24h</th>
              <th className='hidden md:table-cell'>24h Volume</th>
              <th className='hidden sm:table-cell'>Mkt</th>
              <th>Last 7 Days</th>
            </tr>
          </thead>
          <tbody>
            {coins
              .filter((value) => {
                if (searchText === '') {
                  return value;
                } else if (
                  value.name.toLowerCase().includes(searchText.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((coin) => (
                <CoinItem key={coin.id} coin={coin} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoinSearch;
