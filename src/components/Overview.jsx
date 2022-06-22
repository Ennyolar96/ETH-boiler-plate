import React from "react";
import { useState, useEffect } from 'react';
import Iframe from 'react-iframe';
import SetWatchList from "./SetWatchList";
import classes from "./Style.module.css"

function Overview() {
  const [inputText, setInputText] = useState("");

  const GetSrc = src => {
    const [Iframe, setIframe] = useState('');

    async function getIframe() {
      const myValue = '0xB01E484Dd9cf19992b712351958174502D53d550';
      const my_url = inputText || myValue;
      const coin = 'https://dexscreener.com/bsc/' + my_url + '?embed=1&theme=dark&info=0';
      setIframe(coin);
    }

    useEffect(() => { getIframe() }, [src]);

    return Iframe;
  }
  //    '0x35bA8966aa3D81E007d2CBC167172583a07dFf8C'


  return (
    <>
      <div className={classes.inputdiv}>
        <input value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Paste ETH Contract Address" />
        <button type="submit">View</button>
      </div>
      <div className="row">

        <div className="col-lg-2 bg-dark">
          <div className='bg-white rounded p-3'>
            <h3 className="h3">Watchlist</h3>
            <SetWatchList />
            <a onClick={() => setInputText("0x53035e4e14fb3f82c02357b35d5cc0c5b53928b4")}> setthis1</a>
            <a onClick={() => setInputText("0xdec15f492a8b8ce78f072377b1ac5ecc6c6a1ece")}> setthis2</a>
            <a onClick={() => setInputText("0x1f040f15ab15b7e0dfac935873fadbe43d015535")}> setthis3</a>
            <a onClick={() => setInputText("0xc3ebf4a71d441afa1f477047cbf5597f82724771")}> setthis4</a>
          </div>
        </div>

        <div className="col-lg-10">
          <div id={classes.dexscreener_embed}>
            <Iframe url={GetSrc(inputText)} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Overview;