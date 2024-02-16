//   sort method of array
// ASCII TABLE
// char : ascii value

// big NOTE :- ye jo sort method h ye hamare original array ko hi mutetake karega mtlb change karega 
//         jabki forEach, map, filter method ye sab hamare original array ko change nhi kr rha tha balki ek new array return de rha tha jise ham ek new array me store kar rhe the
//       reduce to hame array dete hi nhi uski bat chhodo

//  [1, 3, 6, 46, 51, 53, 82, 234, 423]        (expected: means ham chahte h ki niche numbers bale array kuch es order me ho jaye isliye sort method use kr rhe h)

//  const numbers = [51,6,82,3,46,423,234,1,53];
//  numbers.sort();
//  console.log(numbers);

//  output :- [1, 234, 3, 423, 46, 51, 53, 6, 82] ye diya 
//  NOTE:- BUT ham to esa nhi chahte the but ye yesa kyo kiya sort aaiye samjhte h
//  kyoki javascripts ek number ko number ki tarah nhi dekhta h vo ese ek string ki tarah dekhta h isliye ye esa kiya ab samjhte h esa kiya kese 

// [1, 234, 3, 423, 46, 51, 53, 6, 82]  ye diya output
// vo hamare number ko string ki tarah yani kuch esa 
// ["51", "6", "82", "3", "46", "423", "234", "1", "53"]   kuch esa
// note:- javascripts har number ko pura nhi dekhta h balki vo sirf first digit ko dekhta h fir use leta h jaise ham kisi word ko discnonary ko dekhte h
//  [53, 54, 56, 51, 52, 52, 50, 49, 53]  kuch es tarah ye number me convert karta h fir use assending order me output de deta h 
//  [49, 50, 51, 52, 52, 53, 53, 54, 56]  ese kar ke fir us number ko uske ascii ke hisab se output de deta h
//  niche vale ascii table se number(string) ko saprate karta h 

// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// Another example of sort method

// const studentName = ["Rohit", "Aryan", "Anshu", "Vikas", "Smriti", "Raj", "Anil"]

// studentName.sort();
// console.log(studentName);

// // NOTE:- aap dekh sakte h ki string vale ko acche se seprate kar rha h esa isliye kyoki sort har kisi ko string samjhta h fir use number me convert karta but yha to already string hi h 
// //  har string ko uske ascii value ke hisab se septere karta h capital string ki ascii value alag hoti h aur small ki alag isliye same name hote huye bhi uske value ke hisab se arrange karta h like
// const sName =["rohit", "vikas", "Rohit", "Anil thakur", "Aryan kumar", "Smriti", "smriti", "rajkumari", "anshu"]
// sName.sort();
// console.log(sName);

// // output :-   ['Anil thakur', 'Aryan kumar', 'Rohit', 'Smriti', 'anshu', 'rajkumari', 'rohit', 'smriti', 'vikas']
// // note:- ab aap eski ascii value niche dekh sakte h

// // ab ham upar vale number ko jaisa ham chahte the vesa saprate karte h

// const numbers = [51,6,82,3,46,423,234,1,53];
// numbers.sort((a, b)=>{    // yaha 2 parameters liya a and b
//     return a - b ;       // for assending order
//                          // for dessending order return b - a ;
// });
// // numbers.sort((a,b) => a-b);      aap sortcut me ese bhi retun kara sakte h
// console.log(numbers);


// output : [1, 3, 6, 46, 51, 53, 82, 234, 423]    ham jaisa expect kare the ab vesa hi print hua
//     ab samjhte h ab esa kese hua


// NOTE:- 
// ye kuch es tarah se karta h 
// pahle
// 51, 6  lega a, b me
// if a-b == positive(greater then 0) hua to  pahle   b, a   lega
// tab number yesa arrenge ho jayega
// 6 ,51

// if a-b == nagitive(less then 0) hua to pahle a, b lega
// 6,82  ko ese hi likh lega pahle 6 nad fir 82


// price lowToHigh  highToLow
const products = [
    {  productId: 1, productName: "p1", price: 300},
    {  productId: 2, productName: "p2", price: 3000},
    {  productId: 3, productName: "p3", price: 100},
    {  productId: 4, productName: "p4", price: 4200},
    {  productId: 5, productName: "p5", price: 500}
]

// lowToHigh
const lowToHigh = products.slice(0).sort((a,b)=>{         // yha slice method use karke products array ke0 item me change huye ese lowTohigh name ke new array me daal dega 0 index se sab 
return a.price - b.price                   // ham products ke price ki hisab se karna chahte h isliye .price likha ye to bataya hi tha number bale example me ki a parameter and b parameter ko - kyo karte h 
});

console.log(products);     // ab agar ham products Name vale array ko print karenge to usme koi badlav nhi hua hoga kyoki use badlav ko hamne lowToHigh name ke array me dal diya
console.log(lowToHigh);    // lowtohigh order me arrenge kiya hua ab isme h 


// highToLow
const highToLow = products.slice(0).sort((a ,b) => {
    return b.price - a.price      // b- a kar dene se ye dessending order me ho jayega 
} )
console.log(highToLow);

// sort method kya karta h ki vo use array me commound ke anusar arrenge kar deta h but ham chahte h ki ek new array de jisme commound ke hisab se arrenge value ho or pahle bale array me kuch bhi badlav na ho
// to usi ke liye ham slice method use kar ke us commounf vale value ko new array me daal sakte h 

// character : ascii value

// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65           
// 'B' : 66           
// 'C' : 67             
// 'D' : 68            
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90


// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96


// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122


// '{' : 123
// '/' : 124
// '}' : 125