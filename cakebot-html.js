'use strict';

(function (root, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('./cakebot.js'));
    } else {
        root.returnExports = factory(CakeBot);
    }
}(typeof self !== 'undefined' ? self : this, function (Web3) {

  let web3 = CakeBot.web3

  CakeBot.updateAccount = key => {
    CakeBot.account = web3.eth.accounts.privateKeyToAccount(key);
    web3.eth.accounts.wallet.add(CakeBot.account);
    document.getElementById("address").innerHTML=CakeBot.account.address
    document.getElementById("key").classList.add('d-none')
  }

  
  CakeBot.toggleStrat = (name, enabled) => {
    if(enabled) {
      delete CakeBot.disabledStrats[name]
    } else {
      CakeBot.disabledStrats[name] = true
    }
  }


  CakeBot.stratsHTML = {}

  CakeBot.htmlStrat = (name, i) => `
    <div class="p-3 m-3 text-center" style="border:2px solid #ccc;background-color:#fff">
      <input type="checkbox" class="float-right" checked onchange="CakeBot.toggleStrat('${name}',this.checked)" data-strat="${name}">
      <h2>${i.title}</h2>
      ${i.balances.map(i => `
        <div class="py-2">
          <div class="balance-value" data-balance="${i.name}">-</div>
          ${i.title}
        </div>
      `).join('')}
    </div>
  `

  window.addEventListener('load', showHTML)
  function showHTML() {
    for(let name in CakeBot.stratsHTML) {
      document.getElementById("strats").innerHTML += CakeBot.htmlStrat(name, CakeBot.stratsHTML[name])
    }
  }

}));



