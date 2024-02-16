//  Function declaration

// maan lo aap print karana chahte h Happy Birthday Rohit to aap ek bar print kara sakte h but aapko vahi kaam bar bar print karani pade to uske liye function ko call kar sakte h
// console.log("Happy Birthday Rohit"); 


// function singsong() {
//     console.log("Happy Birthday Rohit"); 
// console.log("Thank you dear");
// console.log("Most welcome mere dost");
// }

// // NOTE:- ham jab tak function ko call nhi karenge jab tak function ka kuch nhi hoga
// singsong();   // yaha function ko call kiya h ab ham jitni bar function ko call karenge vo to function utni bar function ke andar jo bhi hoga use print kara dega
// singsong();  


// function twoPlusFour() {
//     return 2+4;             // aap dekh sakte h ki yaha hamne kuch print nahi kiya balki return kiya return mtlb hamne bol to diya h ki 2+4 ho jaye but usko print nhi kiya isliye jab function ko call kiya to kuch print nhi hua 
// }

// // twoPlusFour();   // yaha function call kiya lekin value print nhi hue kyoki vo sirf return kar rha h print nhi isliye

// // but agar agar hame esko print karana chahte h to uske liye ham calling time bhi print kara sakte h like
// console.log(twoPlusFour());    // esse function call bhi ho rhi h aur return vali value bhi print ho rhi h 
//  const returnValue=twoPlusFour(); // yaha hamne ek returnValue name ka ek const type ka variable banaya aur usi me function ke return bali value daal rhe h 
//  console.log(returnValue);    //  fir yha use print kra liye

// //  NOTE:-  YE FUNCTION TO TAB KAAM ME AATE H JAB SIRF EK HI VALUE PRINT KARANI HO MAAN LO HAME HAR BAR KUCH NEW NUMBER KE SATH PLUS KARNA H TO KYA USKE BHI HAR BAR NEW FUNCTION BANANA PADEGA ANSWER H NHI 
// //  TO USKE LIYE HAM FUNCTION ME HI PARAMETER PASS KAR DENGE LIKE

// function Sum(number1, number2) {        // es line me hamne 2 parametter pass kiya h number1 and number2 aur eski value ham calling time pass kartre h jo aap niche calling dekh sakte h
//     return number1+number2;
// }
//        //  number1 ke liye 4 and number2 ke liye 5  jo yaha ham value pass karte h use argument bolte h aur jisme pass karte h use parametter bolte h jaise number1 and number2 parametter h
//     //    agar ham argument pass mhi karenge to NaN aayega eska matlab Not a Number
// console.log(Sum(4,5));   // yha value print kar ke dekhte h
// // NOTE:- esi tarah ham 2 se jyada number ke sath kucg kar sakte h uske liye ek aur parametter and ek aur argument value pass karni hogi

// NOTE:- agar ham uski value kisi aur variable me dalna chanhte h to uske liye ham jaise upar kiye the vese hi daal sakte h


// is even         check odd or even
// input: 1 number
// output: True or false

// function isEven(num1) {
//  if (num1 % 2 === 0) {
//      // console.log("True")  // yha ham direct print kara sakte h 
//         return true;         //  ya return bhi
//     }
//     // else{           // else laga bhi sakte h or nhi bhi else na laga kar direct return false kr sakte h
// // console.log("False"); 
// return false; 
// // }
// }

// // isEven(23434221);   // Agr ham uper direct print kiya h to sirf function ko call karna padega or agar uper return kiya h to hame yaha print karna padega uske liye hame 
// console.log(isEven(312356));   // jaise upar krte the vese hi

// note:- just upar vale function ko aur chhote kar skate h like

// function isEven(number) {
//     return number % 2 ==0;     // yha apmne aap hi check kar ke return true or false kar dega
// }
// console.log(isEven(12));   // fir use print yha kara lenge


// ek function banana h jo ek 
// string type ke
//  input: le aur uska 
// output : first character de


function stringType(anyString) {
    // console.log(anyString[0]);
    return anyString[0]                         // agar string ke first charcter chahiye to
    // return anyString[anyString.length-1]     // ye string ke last character chahiye to 
}
// stringType("sslas");
console.log(stringType("Rohit kumar"));

// function
// input: array , target (number)
// output: index of target if target present in array

function findNum(array=[], target) {
   for (let i = 0; i <= array.length; i++) {
      if (array[i]==target) {
        return `data is present in ${i} index position`;
      }
     
   }
   return "data is not found in any index position";
}
   const myArray=[2,3,4,5,7,9,12,6,8,16,17,91,13,123,54]       // yaha hamne ek array banaya jisme kuch item in number me h
console.log(findNum(myArray, 123));        // es line me upar vale array ki value use kiya array name ke argument ke roop me aur es value ko parametter me pass kar diya 
                                       // target me ek number pass kiya jise hame array me find karni h 








