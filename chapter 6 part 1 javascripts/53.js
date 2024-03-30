// map method

// const numbers = [2,3,4,5,2,1];

//  const square = function(number){
// return number * number;
// }

// const squareNum = numbers.map(square);            // yaha map function me square ek input ke tor pr ek input le rha h numbers name ke array se sath hi ye callback kar rha h sqaure function ko 
//                                                 // jisme number me array numbers se ek ek number lega jo return kara rha h number * number 
// console.log(squareNum);

// // map function hamesa ek new array banayega jisme callback function se value le kar use return karayega
// // isliye us new array ki value ko store ke liye hamne ek squareNum name na array banaya jisme map ki return value store hogi 
// //  fir hamne use print kara liya


// // Note:-  maan lo hamne function me value return type nhi banaya balki use vahi pr print kara liya h to use map function me undefined store hoga like
 
// const numbers1 = [2,3,4,5,2,1];

//  const square1 = function(number){
// console.log(number * number);        // yha hamne return nhi kiya balki use print kara liya 
// }

// const squareNum1 = numbers1.map(square1);            // upar function me return nhi karaya h value ko balki print karaya isliye map function new variable me undefined value storre karega  

// console.log(squareNum1);

// // same function ko aap map function ke andar hi declare kar sakte h like
const numbers = [2,3,4,5,2,1];
const squareNum = numbers.map(function(number){             // are arrow function se bhi bana sakte h uske liye aap function word hata kar aap esse likh sakte h (number) => 
return number * number;    
})

console.log(squareNum);


// realistic Example of map

const studentInfo= [
    {firstName: "Vikas", Class: "B.sc"},
    {firstName: "Rohit", Class: "MCA"},
    {firstName: "Smriti", Class: "BA"},
    {firstName: "Aryan", Class: "11th"},
    {firstName: "Anshu", Class: "10th"}
]

const newSeetStudentInfo= studentInfo.map((SDetails) =>{
  return `${SDetails.firstName} , ${SDetails.Class}`
})

console.log(newSeetStudentInfo);

//  i we want to use function expression then we can do like

const newSInfo = studentInfo.map(function (StuDelails){
return `${StuDelails.firstName } , ${StuDelails.Class}`
})
console.log(newSInfo);