//  filter method of Array

const numbers = [12,22,33,4,35,26,72,89,92];
const isEven= function(number){
    return number % 2 == 0;             // filter method me return hamesa boolen hona chahiye yani true false condition bala
    // return number % 2 != 0;        // 
}
// numbers.filter(evenNumbers);
const saprateNum =numbers.filter(isEven);         // yha filter ka kya kaam h vo numbers array se ek ek number lega aur use isEven function ko call karke uske parameter (number) me daal dega fir fir vo number return karega jaisa commound h(boolen(true or false hona jaruri h))
console.log(saprateNum);

// Note:- filter method jo hoga na vo hamesa return karna chahiye boolen value means true or false

// ab ham yha filter method ko declaraction function ke callback function me use karte h

const saprateOddNum= numbers.filter(function(num){        // yha callback function use kiya h jo khud ko callback kar rha h aur apne parameter me numbers array ke item move karta rhega fir us pr return value hoga
    return num % 2 != 0;
})
  console.log(saprateOddNum);


// ab fitler method ko expresssion function ke callback function me use krte h

const sepEven = numbers.filter( newFun =function(num){
    return num % 2 == 0;
})
console.log(sepEven);

// ab fitler method ko arrow function ke callback function me use krte h
 const sepOdd = numbers.filter((num)=>{
    return num % 2 != 0;
 })
console.log(sepOdd);



