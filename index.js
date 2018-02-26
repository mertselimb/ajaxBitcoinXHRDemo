var btn = document.querySelector("#btn");
var price = document.querySelector("#price");


btn.addEventListener("click", function () {
    var XHR = new XMLHttpRequest();
    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.onreadystatechange = function () {
        if(XHR.readyState == 4 && XHR.status == 200){
            var value = JSON.parse(XHR.responseText).bpi.USD.rate;
            price.textContent = value;
        }
    }
    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
})