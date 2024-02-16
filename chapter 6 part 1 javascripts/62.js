// iterables 

// note:-  condition of iterables
// jisme ham for of loop laga sakte h   vo iterables hote h like
// string, array are iterable

// string
// const firstName = "Rajkumari";
// for( let char of firstName){
//     console.log(char);
// }

// // array
// const itemList =["item1", "item2", "item3", "item4"]
// for(let items of itemList){
//     console.log(items);
// }
// // NOTE:-  aap dekh sakte h ki upar string and array me ham for of loop lag rha h isliye ye iterables h
// //  ab ham Object me check kar sakte h

// const studentInfo = {
//     Name: "Rohit", work: "in home", salary: "no salary" 
// }
// for(let sInfo of studentInfo){
//     console.log(sInfo);
// }
// NOTE:- aap dekh sakte h ki studentInfo name ka ek Object h jisme for of loop nhi lag rha h isliye ye ek iterables nhi h



// array like object
// note:- condition of array like object
// jinke pas length property hoti h
// aur jisko ham index se access kar sakte h
// example:- string

const secondName = "How are you ?";
console.log("length of secondName is ",secondName.length);          // esse to length check kar sakte h
console.log("index 2 item is ",secondName[2]);              // es line se ham koi perticular index se access kar sakte h
// NOTE:- aap dekh sakte h ki upar bhi 2 condition satisfy kar rhi h isliye string ek array like object h









