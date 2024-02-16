//  every method of array

const numbers = [21,11,5,7,9,1,3] ;
const ans = numbers.every((number)=> numbers % 2 != 0);         // check all numbers are odd or not esi tarah even ke liye bhi check kar sakte the
console.log(ans);

// NOTE:-  every method kya karta h lki array ke sab item pr move karta h aur use condition se milata h jab sab condition ke hisab se sahi hota h to true return kr deta h nhi to false
// yha callback function use kiya h jisme boolen (true or false) return kiya h
// jisse every method true or false return krega jise ham new variable me store kar sakte h jaisa ki upar me kiya h

const studentName= [
    {SName : "Rohit", class: "10th", PhoneNum: 9654853181},,
    {SName : "Rajkumar", class: "10th", PhoneNum: 9486483181},
    {SName : "Sohit", class: "10th", PhoneNum: 9654887651},
    {SName : "Mohit", class: "10th", PhoneNum: 9588579481},
    {SName : "Roshan", class: "10th", PhoneNum: 9488805020}
]
// dhyaan de ki ye ham callback function me every method use kar rhe h ham ese simple function se bhi use kar sakte h 
const ans2 = studentName.every((number) =>{              // yha number name ke parameter me studentName ke array ke ek ek item(item me ek object h jisme kuch key ki value h) ko read karega aur use number me move hoga 
    return number.class === "10th";                 // fir yha number ke object me calss name ke key ki value ko condition se check karega ki data condition ke hisab se h ya nhi sahi h to true nhi to false print karega
})
console.log(ans2);

//  simple function me bhi ye sab array ke method use kar sakte h like'

 function isEven(number){
    return number % 2 === 0;
 }

 const ans3 = numbers.every(isEven)      // yha every method se numbers name ke array se item iseven function ke number name ke parameter me jayega jisse condition check karega fir value return karga jise ham ans3 name ke variable me store kar rhe h

 console.log(ans3);    // output false aaya eska mtlb numbers bale array me ek ya ek se jyada number condition ke hisab se nhi h 


// ab ek aur example lete h jisme ham check karenge ki uski productPrice < (lessthen)  4000 h ya nhi
const products = [
    {  productId: 1, productName: "p1", price: 300},
    {  productId: 2, productName: "p2", price: 3000},
    {  productId: 3, productName: "p3", price: 100},
    {  productId: 4, productName: "p4", price: 3900},
    {  productId: 5, productName: "p5", price: 500}
]

const lessthen = products.every((amount)=>{        
return  amount.price < 4000;           // check kya products array ke price lessthen 4000 h ya nhi        
});
console.log(lessthen); 




