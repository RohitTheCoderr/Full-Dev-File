//  fill method of array
// value , start, end

// maan lo hame ek esa array banana h jisme 10 item ho aur sab ke sab -2 ho ya kuch bhi sab same sa to ham fill se kar sakte h 

const myArray = new Array(10).fill(-2);       // yaha hamne new keyword use kiya h newarray bananne ke liye jiski length hamne constractor me 10 rakhi and .fill ki madad se usme sab item -2 store kara
console.log(myArray);      // ab ham ese print kr ke dekhe to 

// upar vala to ye hua ki new array bana ke karna 
// but maan lo hamare pass pahle se hi ek array ho aur hame usme uski value (item) change karni h kahi pr bhi ya to pura ya kahi se kahi tak to ese kar sakte h like

const numbers =[9,8,7,5,4,3,2,1,0];
// note:-  structure      arrayname.fill(value, start, end)     
numbers.fill(6, 3 ,8)      // hamne yaha kya bola ki numbers me value 6 ko index 3 se lekar index 8 tak dal de but aap dekhenge ki ye to index 7 tak hi uski value change kiya h 
                                          // isliye esa kya kyoki ye ek kam tak hi uski value change krta h but reach to commond vale index tak jata h but change ek kam vale index tak karta h  
console.log(numbers);

// NOTE:- ye fill method original array me value change karta h 


// HAM ESA NHI KAR SAKTE H KHUD SE SOCHA AUR KARNE KI KOSIS KI BUT NHI HUA 
// const sName = [
//     {userName: "Rohit", roll: "devloper", company: "TCS"},
//     {userName: "vikas", roll: "devloper", company: "MNC"},
//     {userName: "aryan", roll: "devloper", company: "DATA SOLUTION"},
//     {userName: "anshu", roll: "devloper", company: "TCS"},
//     {userName: "smriti", roll: "devloper", company: "TMS"},
//     {userName: "Sonu", roll: "devloper", company: "YMC"}
// ];

// sName.fill(sName.company="TCS", 1, 6 )
// console.log(sName);

