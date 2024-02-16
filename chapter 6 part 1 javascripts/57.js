//  find method of array
// NOTE:- find method bhi original array me koi change nhi karta h balki new array me change karta h usi ko print karne ke liye hi ham use new array banate h aur usme store karate h

const animal = ["Lion", "Cow", "Horse", "Dog", "Cat"];
//  yha es function me hmane check kiya kya Cow ki length 3 yadi h to true print hua nhi to false hota
function isLength3(string) {
    return string.length == 3; 
}
 const ans = isLength3("Cow");    // yha cow ko check kiya
 console.log(ans); 

//  but find method lagane se kya hota h ki ye array me index 0 se move karega aur commound ke hisab se array me uski length check karega jaise hi use vo index bala item mil jata h vo use new array me store kara deta h fir aage move bhi nhi karta h
const animal3Len = animal.find((string) =>{
    return string.length == 3;
 })
console.log(animal3Len);

const findHorse = animal.find((string) => {
    return string == "Horse";       // yha hamne animal array se Horse ko find kiya h 
})
console.log(findHorse);    // yadi rahega to Horse ko print kar dega nhi to undefined


// realastic example 

const users = [
    {userId:1, userName: "Vikas", userNo: 9835682420},
    {userId:2, userName: "Rohit", userNo: 9654853181},
    {userId:3, userName: "Smriti", userNo: 7033125844},
    {userId:4, userName: "Aryan", userNo: 8595152392},
    {userId:5, userName: "Anshu", userNo: 8447700863},
    {userId:6, userName: "Sonu", userNo: 9801171418},
    {userId:7, userName: "Rohit", userNo: 9709270370}
];

const findUser = users.find((id)=> id.userId==5);      // ham ek hi line me return kara sakte h bina return word use kiye ye to pahle bhi bata chuke h
                                                       // ham ese userNo se bhi find kar sakte h id.userNo==8447700863, har kisi se find kar sakte vo unique hona chahiye yadi name se find karenge to ho sakta h bahut user ka name same hota h isliye find method ko jaise hi same name mila vo print kr dega vo aage dekhega hi nhi ho sakta h hame uske bad vale name ki jarurat ho to islye name se find karna good nhi h 
console.log(findUser);

