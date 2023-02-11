let bill = document.getElementById("bill-price");
let reset = document.getElementById("reset");
let amount = document.getElementById("amount");
let total = document.getElementById("total");
let people = document.getElementById("people");
let peopleDiv = document.getElementsByClassName("people")
let tipBtn = Array.from(document.getElementsByClassName("tip-btn"));
let customInp = document.getElementById("custom")

reset.addEventListener("click", () => {
  resetter();
});

function resetter() {
  total.innerText = "$0.00";
  amount.innerText = "$0.00";
  tipBtn.forEach((elem) => {
    elem.style.backgroundColor = "hsl(183, 100%, 15%)";
  });
  bill.value = "";
  people.value = "";
}

bill.addEventListener("keyup", function (e) {
  if (e.target.value == "") {
    resetter();
  }
});

people.addEventListener("keyup", (e) => {
  if (people.value == "0") {
    let h4 = document.createElement("h4");
    h4.classList.add("new");
    h4.innerText = "Can't be zero";
    peopleDiv[0].appendChild(h4);

    people.addEventListener("keyup", () => {
      if (people.value == "") {
        h4.remove();
      }
    });
  }
});

tipBtn.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    elem.classList.toggle("new1")
    if(elem.nextElementSibling.classList.contains("new1")) {
      elem.nextElementSibling.classList.toggle("new1"); 
    }
    else if (elem.previousElementSibling.classList.contains("new1")) {
      elem.previousElementSibling.classList.toggle("new1")
    }
  });
});

people.addEventListener("keyup", () => {
  let perperson = bill.value / people.value;
  perperson = perperson.toFixed(2)
  total.innerText = "$"+perperson;
  if (Number.isInteger(perperson) ) {
    total.innerText = "$"+perperson+".00"
  }
  if(people.value == "" || people.value == 0) {
    total.innerText = "$0.00"
  }
})

tipPercent = [5, 10, 15, 25, 50]

tipPercent.forEach((tipPercent, index) => {
  clickListener(tipBtn[index], tipPercent);
});

function clickListener(tipBtn, tipPercent) {
  tipBtn.addEventListener("click", () => {
    let perperson = bill.value / people.value;
    perperson = perperson.toFixed(2);
    let tipAmt = tipPercent*perperson/100;
    tipAmt = tipAmt.toFixed(2);
    amount.innerText = "$"+tipAmt; 
    if (Number.isInteger(tipAmt)) {
      amount.innerText = "$"+tipAmt+".00"
    }
  });
}

customInp.addEventListener("input", () => {
  let perperson = bill.value / people.value;
  perperson = perperson.toFixed(2);
  let tipAmt = customInp.value*perperson/100
  tipAmt = tipAmt.toFixed(2);
  amount.innerText = "$"+tipAmt; 
  if (Number.isInteger(tipAmt)) {
    amount.innerText = "$"+tipAmt+".00"
  }
  if (customInp.value == "") {
    amount.innerText = "$0.00"
  }
})



