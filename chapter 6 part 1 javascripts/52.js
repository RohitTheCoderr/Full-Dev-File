//  Important methods of Array

// forEach 
// map      (more important)
// filter
// reduce

// const numbers= [2,4,5,7];        // this is array

// function youfun1(num , index) {
//     console.log("index is ", index);
//     console.log(`${num} * 2 = ${num*2}`);
// }
// //ye to ek ek item ko esa karega but hame har ke liye esa nhi likhna padega to bahut line likhna padega
// youfun1(numbers[0], 0);
// youfun1(numbers[1], 1);

// esse bachne ke liye ham for loop laga sakte h

// for (let i = 0; i < numbers.length; i++) {
//     youfun1(numbers[i], i);       // yha function ko call kar diya 
// }

// Declaraction part of for loop
//  for loop to pata hi h kese chalta h i(index) ki value 0 se numbers(array) ki length tak
// lext line me jaha hamne youfun1 ko call kiya h usme 2 parameters tha num and index name ka 
//  num me hamne numbers name ke array i index(for loop se pahle 0 index) ki value le liya aur index parametrs me i ko index le liya jo ki loop ke hisab se badta rahega
//  kyoki ye for loop h aur hamne for loop me hi function ko call kiya h isliye jab tak loop chalegi jab tak function bhi bar bar loop ke anusar chalti rahegi aur uski value print hoti rhegi  
 

//  for loop se bhi ek achha h method h array ka foreach 

// numbers.forEach(youfun1);      //  bas ek line me for loop ki tarah hi kaam karega 0 index ke number ko lega aur next uski index ko parameter me daal dega aur esa bar bar hoga jaise for loop me tha

// // callback function me forEach lagate h

// numbers.forEach(function(number, index){
//     console.log("index is ", index);
//     console.log(`${number} * 2 = ${number*2}`);
// }
//  )

// //  NOTE:- callback funcrtion me kya hua ki forEach (for loop) bhi laga diya numbers me aur ek function name ka function banaya jisme number and index name la 2 parameters pass kiya aur usme 
// //    jiske andar 2 commod likha index ko or us number ko 2 se multiply karne ka ab hamne ese function ko forEach me likh jisse ye syam ko callback kar rha h or parameter me forEack ki help se numbers name ke Array se data le rha h or use es function me dal rha h 
// // jisse ye same upar vale function jaisa work karega


// // only 2 se multiply karna ho to 
//  numbers.forEach(function(numb) {       // aap dekh sakte ho maine function me index bhi nhi likha fir bhi ye le rha h ek ek index ko esa isliye kyoki forEach har ek index par move karta h 
//     console.log(numb * 3);
//  })


// more example of ForEach 
// this is Array
const users = [                           
    {firstName: "Vikas", Age: 24},        // This is Object inside of Array
    {firstName: "Rohit", Age: 20},
    {firstName: "Smriti", Age: 18},
    {firstName: "Aryan", Age: 16},
    {firstName: "Anshu", Age: 14}
]

// we want to print only users firstName
//  by using forEach loop
users.forEach(function(User) {       //  , laga ke uska index bhi pass kara skte h 
    console.log(User.firstName);       // fir , laga ke index print kara skte h
})
//  note:-  just uapr me aap Function declaration use kiya h aap tino function me se koi bhi use kar sakte h just like arrow function
// users.forEach((User)=> {             // aap yaha ek hi parameter pass kiya h user name ka isliye aap ek parameter use karne pr use () ke bina bhi likh sakte like user => 
//     console.log(User.firstName);    
// })

// // yahi kaam ham for of se bhi kar sakte h aaiye dekhte h kese vese pahle bhi bata cheku h

for(let User of users){
    console.log(User.firstName);
    console.log(User.Age);               // Age bhi kar diya aap uapr bhi ye line likh kar sakte h 
}


