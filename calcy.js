//write a program calculator
let result;
const operator = prompt('enter operator');
const num1 = prompt("enter a first number");
const num2 = prompt("enter a second number");

switch(operator){
    case '+':
        result= num1+num2;
        console.log(`Result of ${num1}+${num2}=${result}`)
        break;
    case '-':
        if (num1>num2){
        result = num1-num2;
        console.log(`result of ${num1}-${num2}=${result}`);  
        break;
        }
        else {
            result =  num2-num1;
        console.log(`result of ${num2}-${num1}=${result}`);
        break;
        } 
    case '*':
        result = num1*num2;
        console.log(`Result of ${num1}*${num2}=${result}`)
        break;
    case '/':
        result = num1/num2;
        console.log(`Result of ${num1}/${num2}=${result}`)
        break;
    default :
        console.log('you enter different operator which is not in data');
        break;
}