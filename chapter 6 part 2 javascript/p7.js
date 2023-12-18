// closeres

// closere : 30- 40%      at a begnning time only 30 to 40 % you can understand
// analyse : 70-80%     after analyse  70 to 80 %
// real example: 100%     but after real example you can understand 100% 
//  so lets go for learning closeres



// function can return function

function  myfunc() {
    // return "ONE";              // string return
    // return {key:"value1", key1: "value2"}     // we can return also object like this 
    return [1,3,5,6,8];          // we can also return array like this but only one value we can return
}
const ans= myfunc();     // here we create h ans new const datatyoe variable because our function is return type here function call hi already work
console.log(ans);        // here we print h ans value 

// note:- when we can return string, array, object in a function then we can also return a function in a function right

function outerfun() {
    function innerfun() {
        console.log("hello world");
    }
    return innerfun;
}
const outvalue = outerfun();
console.log(outvalue);

// note:- you can see that we create h outerfun name function and in this function we also create h another function inside this function that is innerfun 
//  and return innerfun inside outerfun 
//  because outerfun is return type so we create a anothewr const variavle in this variable we store h return value of outerfun 
// but innerfun's not a call but  if we want to call innerfun then we can call something like this type
outvalue();        // if we call outvalue (variable) then innerfun is also call because innerfun is store in a outvalue 

// take another real example 

function fullName(firstName, lastName) {
    function addName() {
        console.log(`FullName is ${firstName} ${lastName}`);
    }
    return addName;
}

const printFName = fullName("Rohit", "Raj");
printFName();           // by calling printName variable indirectelly called a innerfunction (addName) like this

// lets come in notebook for analyse closeres of real example 
