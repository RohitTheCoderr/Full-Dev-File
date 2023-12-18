// booleans & compareison operator  

// booleans hame sirf 2 value dete h
// true and false
// let num1= 5;
// let num2 =7;
// console.log(num1>num2); // output is false jo ki saki h kyoki 5 small h 7 se

// console.log(num1<num2);  // output is true jo ki saki h kyoki 7 big h 5 se

// console.log(num1>=num2); //output false kyoki dono equal nhi h

// // == vs ===
// let newNum1 = "8";
// let newNum2 = 8;
// console.log(newNum1==newNum2);   // yha ek value string aur ek intger h fir bi ye true de rha h esa isliye kyoki == sirf value dekhta h type nhi esa sirf javascript me hi hota ha
// console.log(newNum1>=newNum2);

// // Note:-  but agar ham chahte h ki ye ye value and type dono dekh kar output de to hame === lagana padega like

// console.log(newNum1===newNum2);  // output false kyoki ek int h and ek string

// != vs !==   (not equal to)
let num3 = 3;
let num4 = 5;
console.log(num3 != num4); // output true kyoki dono equal nhi h isliye 
// console.log(num3 != num4); // output false jab dono same value hoga tab 
// Note:- agar ham ese ek ko string aur ek ko intger bana de fir bhi ye dono ko vese hi vehave karega jaise upar nme kiya tha kyoki ye uski value dekhta h type nahi
//  agar ham chahte h ki ye type bhi dekh kar output de to hame isme !== lagana padega like

let newNum = 5;
let newNum1 = "5";
console.log(newNum!==newNum1);  // output true kyoki eski value to same h but ek intger me h aur ek string me h isliye dono same value hokar bhi false nhi hua
console.log(newNum!=newNum1);   // output false hoga agar ham != use karenge to kyoki ye value ko sirf dekhta h uski tyype ko nhi
