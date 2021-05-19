window.onload = getdata;

window.setInterval(getdata, 5000);

function getdata() {
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((response) => response.json())
    .then((data) => {
      newusp = data.bpi.USD.rate;
      console.log(newusp);
      document.getElementById("price").innerHTML = `${newusp}`;
    });
}
