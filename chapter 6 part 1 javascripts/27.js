//  use const for creating array
// 

const names =["Rohit", "vikas","sonu"];   // dekhiye yaha names ek array h aur names ko hamne const type variable banaya h but
names.push("Aryan");     // yha hamne ek item push kiya h jo ki aasani se ho gya but hamne to padha tha ki const me koi value change nhi kar sakte but yha to ho rha h 
console.log(names);
// // NOTE:- esa esliye ho rha h kyoki array me const sirf arrays ki heap memory address store karta h aur ham uske address me koi badlav nhiu kar sakte but uske item me koi bhi opration perform kar sakte h like push, pop, shift, unshift etc

//  but ham usme item ko es tarah se add ya remove nmhi kar sakte like

names=["Smriti", "Anshu"]   // Uncaught TypeError: Assignment to constant variable.

// es tarah se add nhi kar sakte kyoki eese us variavle ki address pr effect padega kyoki ye const h isliye
// but bina const banaye es tarah se add kar sakte the jaise piche kiya tha 26.js me

// // NOTE:- esliye ab ham jab bhi koi Reference type use karenge to const use karenge 

