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

var change1 = document.querySelector("#change1");
var change2 = document.querySelector("#change2");

function getMoreData() {
  var url = "https://api.coincap.io/v2/assets/bitcoin";

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.data.changePercent24Hr.substring(0,6))
      // let test = data.data.changePercent24Hr.substring(0, 4);
      change1.innerHTML = `24hr Change: ${data.data.changePercent24Hr.substring(0, 6)}%`
      change2.textContent = `24hr Change: ${data.data.changePercent24Hr} %`
    });
}

getMoreData()
