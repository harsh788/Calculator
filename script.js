let display = 0;
let num1 = 0;
let operator = 0;
let a = 0;

function add(a, b){
    return a+b;
}
function subtract(a, b){
    return a-b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    if(b!=0)
    {
        return a/b;
    }
    else
    {
        return "ERROR";
    }
}

function operate(operator, a, b){
    if(operator === "+")
    {
        return add(a, b);
    }
    else if(operator === "-")
    {
        return subtract(a, b);
    }
    else if(operator === "*")
    {
        return multiply(a, b);
    }
    else if(operator === "/")
    {
        return divide(a, b);
    }
    else
    {
        return "ERROR";
    }
}

let input = document.querySelectorAll("button.number");
let arrInput = Array.from(input);
arrInput.forEach((div, index) => div.addEventListener("click", ()=> {
    num1 += arrInput[index].id;
}));

let division = document.querySelector("#divide");
let multiplication = document.querySelector("#multiply");
let addition = document.querySelector("#add");
let subtraction = document.querySelector("#subtract");
let equals = document.querySelector("#equals");
let clear = document.querySelector("#clear");
let percent = document.querySelector("#percent");
let plusminus = document.querySelector("#plusminus");
let dot = document.querySelector("dot");
let displaybutton = document.querySelector("#display");

division.addEventListener("click", () => {
    operator = "/";
    a = num1;
    num1 = "";
})
multiplication.addEventListener("click", () => {
    operator = "*";
    a = num1;
    num1 = "";
})
addition.addEventListener("click", () => {
    operator = "+";
    a = num1;
    num1 = "";
})
subtraction.addEventListener("click", () => {
    operator = "-";
    a = num1;
    num1 = "";
})
equals.addEventListener("click", () => {
    display = operate(operator, Number(a), Number(num1));
    a = "";
    num1 = display;
    displaybutton.innerHTML = display;  
})
clear.addEventListener("click", () => {
    display = 0;
    displaybutton.innerHTML = display;
    a = "";
    num1 = "";
})
percent.addEventListener("click", () => {
    display = operate("/", Number(display), 100);
    num1 = display;
    displaybutton.innerHTML = display;
})
plusminus.addEventListener("click", () => {
    display = operate("*", Number(display), -1);
    num1 = display;
    displaybutton.innerHTML = display;
})
dot.addEventListener("click", () => {
    num1 += ".";
})