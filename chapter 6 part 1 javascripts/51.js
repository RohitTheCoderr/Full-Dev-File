// Function returning function


function myFun() {
    // return "abc";         // yha ek string rerturn kara rehe h
    // return [13,4,58,9,0]   // ek array return karna ho to
    return  {name:"Rohit", class:10}    // ek object return karna ho to
}
// const ans= myFun();
// console.log(ans);

// man lo hame ek function return karna ho to

// function myMsg() {  
//     function inside() {
//         // console.log("hollo Rohit");    // yha ham value ko print kara rhe h but agar ham return karaye to
//         return "Hello world";
//  }
//      return inside;     // esse sirf us inside name ke function call and value retun hoti h
//     // return inside();     // () laga dene se pura ka pura function return ho jata h 
//     // return myFun();     // yha hamne ek function ko return kiya h 
    
// }

// const ans1=myMsg();      // es line me hamne myMsg ki ans1 name ke variable me dal diya h
// console.log(ans1());     // aur yaha hamne ans1 ko call and print kiya h 

// declaraction part
// NOTE:- hamne myMsg function ko ans1 me daal diya and next line me hamne ans1 ko print and call kiya jisse myMsg function call hua
//        ab myMsg me bina inside pahle chhede return inside ko read karega jisse inside function call ho jayega 
//        fir last line console.log(ans1());  me ans1() bracket lanage se ham uski yani inside ki retun value h use print kara rhe h


// aap ese bhi likh sakte ho upar vala function ko

function myMsg() {  
  return  function inside(name) {     // name parameter le liya aap need ke anusar use kar skate h
   // return "Hello world";
    return name;
  };
}
const ans1=myMsg();  
console.log(ans1("Anshu"));     // aap yha ans1 me () nhi lagate h to inside function pura print ho jayega aap hata kar dekh sakte h

// man lo aap inside ke parameter me value pass karana chahte h to uske liye bhi yha () ke ander hi value pass kar do jisse
//  value inside ke parametterre  me chali jayegi aur aao us parameter ki value ko return kara skte h usi function me  