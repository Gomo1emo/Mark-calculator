const prompt = require('prompt-sync')();
const x = parseFloat(prompt("Enter 1st input"));
var y = parseFloat(prompt("Enter 2nd input"));
const operator = prompt("choose an operator: +,-,/,*")
var result;

switch(operator) {
    case "+":
        result = x + y;
        console.log("The result of " + x + " + " + y + " is " + " = " + result);
        break;
    
        case "-":
        result = x - y;
        console.log("The result of " + x + " - " + y + " is " + " = " + result);
        break;
    
        case "/":
        result = x / y;
        console.log("The result of " + x + " / " + y + " is " + " = " + result);
        break;
    
        case "*":
        result = x * y;
        console.log("The result of " + x + " * " + y + " is " + " = " + result);
        break;
}