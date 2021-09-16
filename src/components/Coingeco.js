



  import React, { useEffect, useState } from 'react'
  
  
  export const Coingeco = () => {

    const [value, setValue] = useState('')
    const CoinGecko = require('coingecko-api');
    const CoinGeckoClient = new CoinGecko();

    useEffect(() => {
        func();
        const interval = setInterval(() => {
            console.log('This will run every second!');
            func();
          }, 30000);
          return () => clearInterval(interval);
    }, [])

    var func = async() => {
        let data = await CoinGeckoClient.coins.fetch('bitcoin', {});
       console.log(data)
       setValue(data.data.market_data.current_price.usd)
      };
      return (
          <div>
              1 BTC = {value} USD
          </div>
      )
  }
  