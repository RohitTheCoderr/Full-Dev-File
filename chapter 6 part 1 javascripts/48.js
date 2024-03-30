// rest parameters

// function myFun(a, b, c) {    // yha hamne 3 a,b,c parameters banaya h
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`); 
// }
// myFun(4,5,6,7,8,9,10)    // but yha hamne 3 se jyada value pass kiya esse kya hoga 1st value a me 2nd b me 3rd c me chala jayega aur bache huye sab ka kuch nhi hoga   

// But ham chahte h ki 1st value a me 2nd b me or c me bache huye jitne bhi value h vo sab chal jaye to uske liye ham parameters banate time ... lagana hoga before parameter  like

function myFun(a, b, ...c) {    // yha hamne  a,b,c parameters banaya h   but  c ko ...c kar ke  banaye h esse ye rest parameter bar gya h 
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);    // string me value lane ke liye ese likh lo
    console.log(`c is`, c);      // array ke liye ese
}
myFun(4,5,6,7,8,9,10)  


// we want to print total sum of b's value 
function addNum(...b){
    let total = 0 ; 
    for (let number of b) {
    total = total + number;
    }
return total;
}
console.log(addNum(2,3,4,5,6,7,8,9));

