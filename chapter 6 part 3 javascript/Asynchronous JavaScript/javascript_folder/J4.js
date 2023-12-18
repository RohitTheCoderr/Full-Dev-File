// understand callback

// function myfun() {
//     console.log("Function is doing task 1");
// }

// function myfun2() {
//     console.log("Function is doing task 2");
// }
// myfun();
// myfun2();

// NOTE:- HAM CHAHTE H KI YE FUN EK KE BAD EK CAKK HO TO USKE LIYE HAME DONO KO EK KE BAD EK CALL KR DIYA
// but ham ese alag alg na krke ek me hi to kr sakte the like

// function myfun(callback) {        // yha ek parametter pass kr diya
//     console.log("Function is doing task 1");
//     callback();     // ab jab ye callback ko call karunga to apne aap hi myfun2 call ho jayeha jisse myfun2 chal jayega
// }

// function myfun2() {
//     console.log("Function is doing task 2");
// }

// myfun(myfun2);    // AND US CALLBACK PARAMETER ME myfun2 ko pass kr diya

// ab hame ese bhi bana sakte h

// function myfun(callback) {
//     console.log("Function is doing task 1");
//     callback();
// }

// // myfun(function myfun2() {          // myfun me myfun2 ko bhi to pass kr sakte h na
// //     console.log("Function is doing task 2");
// // })

// // esi tarah ham ese arror function me bi to bana sakte h na
// myfun(()=> {
//         console.log("Function is doing task 2");
//     })

// NOTE:- YE CALLBACK KA ACHHA EXAMPLE H OK

// ONE ANOTHER EXAMPLE OF CALLBACK

// function getTwoNumbers(num1, num2, callback){
//     console.log(num1, num2);
//     callback(num1, num2)    // yha ye callback parameter kya kar rha h ki addtwoNumbers fun ko call kar rha h jiske number1 and number2 me ye es fun ke paramerter num1 , num2 ki value de rha h
// }

// function AddTwoNumers(number1, number2) {
//     console.log(number1+number2);    // yha callbak parameter ke help se num1 and munum2 ki value ese mil gai jise use kr ke ye use dono ko ADD kr diya h
// }

// getTwoNumbers(4,5, AddTwoNumers);

// esi function ko ham arror fun me bhi bana sakte h like
// and sidhe 1st function ke calling time hi 2nd fun ko pass ke denge like
// function getTwoNumbers(num1, num2, callback){
//     console.log(num1, num2);
//     callback(num1, num2)
// }

// getTwoNumbers(4,5, (number1, number2)=>{
//     console.log(number1+number2);
// });

// ham eske sath kuch aur bi kr sakte h like
// function getTwoNumbers(num1, num2, callback) {
//   // hamne bola ki agar num1 and num2 ka type number ho to hi ye callback function call ho
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     callback(num1, num2);
//   }
//   //    agr esa nhi ho to ye msg print ho
//   else {
//     console.log("Wrong Data Type");
//   }
// }
// // agr ham yha num1 and num2 ki value string me pass kr dete h to kya hoga
// getTwoNumbers("4", "5", (number1, number2) => {
//   console.log(number1 + number2);
// });

//NOTE:- apne dekha ki num ki value string me pass kiya to else chala jisse 2nd function(callback) nhi chala

// NOTE:- HERE we can also pass two and more callback like

function getTwoNumbers(num1, num2, onSuccess, onFailure) {       // here we passed two callback=> onSuccess and onFailure
  if (typeof num1 === "number" && typeof num2 === "number") {
    onSuccess(num1, num2);
  } else {
    onFailure();
  }
}

// function addtwoNumbers(number1, number2){
//     console.log(number1 + number2);
//   }

//   function failfun() {
//     console.log("wrong data type");
//     console.log("please pass number data type only !");
//   }

// getTwoNumbers(4, 5, addtwoNumbers, failfun );   // onSuccess callback me addTwoNumers function lega and onFailure callback me failfun function lega

// NOTE:- hamne pahle callback ko if ki condition me kr diya and dusre ko else me 
// aap jante hi h ki if else me se koi ek hi chalhe a condition ke hisab se 
// isliye hamne condition me likh ki agr num ki datatype number hue to 1st callback chale jisme addtwonumber ki function call ho rhe h nhi to else jisme failfun call ho rha h 

// note:- main function ko calling time ham sidhe ye dono funtion bhi callback me daal sakhte h i means pass kar sakte the like
// aur sath me ham ese arror function bana ke daal sakte h aasani rhegi like

getTwoNumbers(3, 5, (number1, number2)=>{ 
    console.log(number1 + number2); },
     ()=>{
        console.log("wrong data type");
    console.log("please pass number data type only !"); 
    } );   


