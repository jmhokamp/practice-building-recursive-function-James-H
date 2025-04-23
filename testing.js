const input = require('readline-sync');

let userInput1 = "abc"
let userInput2 = "55543324"
let userInput3 = "6366992128"

//write a function with parameter and a return valie of true or false
//that validates that a phone number is both a number and has 10 digits

function isValidPhoneNum(userInput){

    return !isNaN(Number(userInput)) && userInput.length === 10;
}

//Call function and print return values for each sample
console.log(isValidPhoneNum(userInput1));
console.log(isValidPhoneNum(userInput2));
console.log(isValidPhoneNum(userInput3));


// exisiting data to be updated
let userPhone = "(636) 699-2128"

// get user input, validate with function written above and return validated input
function promptUserForNewPhone(){
    let newPhone = input.question("Please enter 10 digit phone number");
    while (!isValidPhoneNum(newPhone)){
    newPhone = ("Please enter 10 digit phone number");
  }

return newPhone;
}

//Formtat a phone number 
function formatPhone(phoneNum){

    let areaCode = phoneNum.slice(0,3);
    let exchange = phoneNum.slice(3,6);
    let line = phoneNum.slice(6);
    return `(${areaCode}) ${exchange}-${line}`;
}

//assign a new value to exisiting global variable userPhone
function updatePhone(phoneNum){

    userPhone = formatPhone(phoneNum);
}
//write a primary function that makes use of other function
function runPhoneUpdateSequence(){

    let newNum = promptUserForNewPhone();
    updatePhone(newNum);
    console.log(`Thank you, your new phone has been saved ${userPhone}`);
}
