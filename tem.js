var oldusp;
var oldeup;

var newusp;
var neweup;

var changes;

window.onload = getdata;

window.setInterval(getdata, 5000);

function getdata() {
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((response) => response.json())
    .then((data) => {
      newusp = data.bpi.USD.rate;
      neweup = data.bpi.EUR.rate;

      document.getElementById("results").innerHTML = "";

      document.getElementById("results").innerHTML += `
                      <h1>${data.chartName}<span id="changestri"></span></h1> 
                      <p>${data.time.updated}</p>
                          
                      <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Currency</th>
                                <th scope="col">Price</th>
                          
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td  >${data.bpi.USD.code}</td>
                                <td ><span class="colorchange" id="usdtable" >${newusp}  ${data.bpi.USD.symbol}</span></td>
                            
                              </tr>
                              <tr>
                                <th scope="row">2</th>
                                <td >${data.bpi.EUR.code}</td>
                                <td ><span class="colorchange" id="euptable">${neweup}  ${data.bpi.EUR.symbol}</span></td>
                          
                              </tr>
                          
                            </tbody>
                          </table>
    
               
    
                      `;

      if (newusp > oldusp) {
        changes = "inc";
      }

      if (newusp < oldusp) {
        changes = "dec";
      }

      if (changes == "inc") {
        document.getElementById("changestri").innerHTML = "&#9650";
        document.getElementById("changestri").style.color = "green";
      }

      if (changes == "dec") {
        document.getElementById("changestri").innerHTML = "&#9660";
        document.getElementById("changestri").style.color = "red";
      }

      oldusp = newusp;
      oldeup = neweup;
    });
}
