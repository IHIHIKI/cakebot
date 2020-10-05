'use strict';

(function (root, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('web3'));
    } else {
        root.CakeBot = factory(Web3);
    }
}(typeof self !== 'undefined' ? self : this, function (Web3) {

  let providers = 
  ["https://bsc-dataseed.binance.org/",
  "https://bsc-dataseed1.defibit.io/",
  "https://bsc-dataseed2.defibit.io/",
  "https://bsc-dataseed3.defibit.io/",
  "https://bsc-dataseed4.defibit.io/",
  "https://bsc-dataseed1.ninicoin.io/",
  "https://bsc-dataseed2.ninicoin.io/",
  "https://bsc-dataseed3.ninicoin.io/",
  "https://bsc-dataseed4.ninicoin.io/",
  "https://bsc-dataseed1.binance.org/",
  "https://bsc-dataseed2.binance.org/",
  "https://bsc-dataseed3.binance.org/",
  "https://bsc-dataseed4.binance.org/"]

  let web3 = new Web3(providers[Math.floor(Math.random() * providers.length)]);

  let CakeBot = {}
  CakeBot.web3 = web3

  function start() {
    try {
      CakeBot.run()
      setTimeout(start, 15000)
    } catch (error) {
      console.error(error);
      setTimeout(start, 60000)
    }
  }
  setTimeout(start, 3000)

  return CakeBot

}));



