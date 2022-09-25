var price2 = document.querySelector("#price2");
var price1 = document.querySelector("#price1");

function getPrice() {
  var price = "https://api.bitaps.com/market/v1/ticker/btcusd";

  fetch(price)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      price1.textContent = "USD/BTC $" + data.data.last
      price2.textContent = "USD/BTC $" + data.data.last
    });
}

getPrice();

var block1 = document.querySelector("#block1");
var block2 = document.querySelector("#block2");

function getBlock() {
  var block = "https://api.bitaps.com/btc/v1/blockchain/block/last";

  fetch(block)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      block1.textContent = "Block Time: " + data.data.height
      block2.textContent = "Block Time: " + data.data.height
    });
}

getBlock()

var feeblock1 = document.querySelector("#fees1");
var feeblock2 = document.querySelector("#fees2");

function getFees() {
  var fees = "https://mempool.space/api/v1/fees/recommended";

  fetch(fees)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      feeblock1.innerHTML = `Current Fees: ${data.fastestFee} sat/vb`
      feeblock2.textContent = `Current Fees: ${data.fastestFee} sat/vb`
    });
}

getFees()

var cap1 = document.querySelector("#cap1");
var cap2 = document.querySelector("#cap2");
var supply1 = document.querySelector("#supply1");
var supply2 = document.querySelector("#supply2");


function getMoreData() {
  var url = "https://api.coincap.io/v2/assets/bitcoin";

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.data.marketCapUsd)
      console.log(Number(data.data.marketCapUsd)?.toLocaleString({
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }))
      if (Number(data.data.changePercent24Hr) >= 0) {
        change1.className = "category green"
        change2.className = "category green"
      }
      supply1.textContent = `Circulating Supply: ${Number(data.data.supply)?.toLocaleString()}`
      supply2.textContent = `Circulating Supply: ${Number(data.data.supply)?.toLocaleString()}`
      cap1.innerHTML = `Market Cap: $${data.data.marketCapUsd.substring(0, 3)} bn`
      cap2.textContent = `Market Cap: $${data.data.marketCapUsd.substring(0, 3)} bn`
    });
}


getMoreData()


// cap1.innerHTML = `Market Cap: $${Number(data.data.marketCapUsd)?.toLocaleString(undefined, {
//   minimumFractionDigits: 2,
//   maximumFractionDigits: 2
// })}`
// cap2.textContent = `Market Cap: $${Number(data.data.marketCapUsd)?.toLocaleString(undefined, {
//   minimumFractionDigits: 2,
//   maximumFractionDigits: 2
// })}`
