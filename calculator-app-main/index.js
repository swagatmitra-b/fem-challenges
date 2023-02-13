let link = document.getElementsByTagName("link");
let togglebtn = document.getElementsByClassName("togglebtn");
let typefacebtn = Array.from(document.getElementsByClassName("typeface"));
let screen = document.getElementsByClassName("box2");
let reset = document.getElementById("reset");
let delbtn = document.getElementById("del");
let operators = Array.from(document.getElementsByClassName("operator"));
let equals = document.getElementById("equal");

let screenArray = [];

function toggle() {
  togglebtn[0].addEventListener("click", () => {
    link[1].setAttribute("href", "style2.css");
    togglebtn[0].addEventListener("click", () => {
      link[1].setAttribute("href", "style3.css");
      togglebtn[0].addEventListener("click", () => {
        link[1].setAttribute("href", "style1.css");
        togglebtn[0].addEventListener("click", toggle());
      });
    });
  });
}

toggle();

reset.addEventListener("click", () => {
  screen[0].innerText = "0";
  screenArray.length = 0;
});

delbtn.addEventListener("click", () => {
  screenArray.pop();
  screen[0].innerText = screenArray.join("");
  if (screenArray.length == 0) {
    screen[0].innerText = "0";
  }
});

typefacebtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    screenArray.push(btn.innerText);
    let number = screenArray.join("");
    screen[0].innerText = number;

    function plus() {
      if (screenArray.includes("+")) {
        let num1 = screenArray.slice(0, screenArray.indexOf("+"));
        let num2 = screenArray.slice(screenArray.indexOf("+") + 1);
        let number1 = +num1.join("");
        let number2 = +num2.join("");
        let result = number1 + number2;

        if (Number.isInteger(result)) {
          return result;
        }
        return result.toFixed(2);
      }
    }
    function minus() {
      if (screenArray.includes("-")) {
        let num1 = screenArray.slice(0, screenArray.indexOf("-"));
        let num2 = screenArray.slice(screenArray.indexOf("-") + 1);
        let number1 = +num1.join("");
        let number2 = +num2.join("");
        let result = number1 - number2;
        if (Number.isInteger(result)) {
          return result;
        }
        return result.toFixed(2);
      }
    }
    function multiply() {
      if (screenArray.includes("x")) {
        let num1 = screenArray.slice(0, screenArray.indexOf("x"));
        let num2 = screenArray.slice(screenArray.indexOf("x") + 1);
        let number1 = +num1.join("");
        let number2 = +num2.join("");
        let result = number1 * number2;
        if (Number.isInteger(result)) {
          return result;
        }
        return result.toFixed(2);
      }
    }
    function divide() {
      if (screenArray.includes("/")) {
        let num1 = screenArray.slice(0, screenArray.indexOf("/"));
        let num2 = screenArray.slice(screenArray.indexOf("/") + 1);
        let number1 = +num1.join("");
        let number2 = +num2.join("");
        let result = number1 / number2;
        if (Number.isInteger(result)) {
          return result;
        }
        return result.toFixed(2);
      }
    }
    plus();
    minus();
    multiply();
    divide();

    equals.addEventListener("click", () => {
      if (screenArray.includes("+")) {
        screen[0].innerText = plus();
      }
      if (screenArray.includes("-")) {
        screen[0].innerText = minus();
      }
      if (screenArray.includes("x")) {
        screen[0].innerText = multiply();
      }
      if (screenArray.includes("/")) {
        screen[0].innerText = divide();
      }
    });
  });
});
