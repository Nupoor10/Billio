var form1 = document.querySelector("#formdata");
var form2 = document.querySelector("#formdata2")
var amountArray = [];
var totalAmt = 0;

function handleSubmit(e) {
    e.preventDefault();
    let amount = document.querySelector("#amount").value;
    let description = document.querySelector("#description").value;
    console.log(amount, description);
    amountArray.push(parseFloat(amount));
    console.log(amountArray);
    updateList(amount, description);
    form1.reset();
}

function updateList(amt, des) {
    var listSection = document.querySelector("#list")
    var list = document.createElement("li");
    list.textContent = `${amt} : ${des}`;
    listSection.appendChild(list);
}

for(let i = 0; i < amountArray.length; i++) {
    totalAmt += amountArray[i];
}
console.log(totalAmt); 

function handleTotal() {
    for(let i = 0; i < amountArray.length; i++) {
        totalAmt += amountArray[i];
    }
    console.log(totalAmt);
    document.querySelector("#totalAmt").textContent = Math.abs(totalAmt); 
}

function handleFinalSubmit(e) {
    e.preventDefault();
    let noPeople = parseInt(document.querySelector("#people").value);
    var finalAmt = totalAmt / noPeople;
    document.querySelector("#finalAmt").textContent = Math.round(finalAmt);
    document.querySelector("#peopleCount").textContent = noPeople;
    form2.reset();
}


form1.addEventListener("submit",  handleSubmit);
form2.addEventListener("submit", handleFinalSubmit )
document.querySelector("#total").addEventListener("click", handleTotal)