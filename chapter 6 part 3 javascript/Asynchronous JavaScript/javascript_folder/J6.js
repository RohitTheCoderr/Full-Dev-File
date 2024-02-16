// Promise
console.log("Script Start");  // for checking js file connected or not


const bucket= ['coffee', 'chips', 'vegetables', 'salt',"rice"]

const friedRicepromise= new Promise((resolve, reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("Fried Rice");
    }else{
        reject("Couldn't do it");
    }
})

// NOTE:- abi hamne promise ko produce kiya h

// ab hame ese consume karna h 
// so how to consume this ?

// friedRicepromise.then(
//     // jab promise resolve hoga tab
//     (myFriedRice)=>{
//     console.log("lets eat", myFriedRice);
// },
// // jab promise reject hoga tab 
// (error)=>{
// console.log(error);
// }
// )
// NOTE:- ham es callabck function me sirf ek ko bi call kar sakte h ya to resolve ko ya reject ko ya ek sath dono ko jaese kiya hua h 

// but ham esme chaining bhi kar sathe h then me catch laga kar like 

// NOTE:- ye jo promise ka kaam h ye javascript asynchronous karta h yani ye promise h ye browser handle krta h 
// aur jante hi h ki jab kisi ko browser handle krta h to vo javascript ke all line execute hone ke bad hi browser ka code run hone deta h like ham es page me aur bhi kuch kara lete h 

friedRicepromise.then(
    // jab promise resolve hoga tab
    (myFriedRice)=>{
    console.log("lets eat", myFriedRice);
}).
catch((error)=>{
    console.log(error);
})
// note:- browser promise object pr kaam karne ke bad ese turant run nhi hota h javascript me use wait karna padta  h microtosk queue me jis
// note:- jis tarah setTimeout function ko browser apna kaam karne ke bad callback queue me rakhta h
setTimeout(()=>
{
    console.log("Hello From setTimeout");
},0) 

// BIG-NOTE:- jab sab kaam hone ke bad yani sab line execute hone ke bad javascript en dono me se yani promise(miscrotask me add h) dusra setTimeout(jo callback uqeue me add h) en dono me se pahel kise callstack me bhejenga run ke liye 
// Ans is pahle microtast yani promise ko kyoki eske priority jyada hoti h 

for (let i = 0; i <=100; i++) {
  console.log(Math.random(), i);;
    
}

console.log("Script End");
// aap dekh sakte h ki ye sab line chalne ke bad hi promise call hoga and print hoga and promise ke bad hi setTimeout ko call karne diya 

