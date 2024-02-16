// optional chaining

const user = {
    firstName: "Harshit"
    // address: {HNo: '124'}       // maan lo ye nhi hota NOTE ko ssamjhne ke liye 
}

// console.log(user.firstName);           // hame user name ke obj se firstName ki value chahiye thi isliye user.firstName kara jisse uske value mil gi 
// console.log(user.address.HNo);        // usi tarha hame addresss bhi kiya but address ke value ke andr ek aur obj h isliye hame uski bi value chahiye to use bhi . kar ke likh diya jisse hame uski value mil gai
//  NOTE:- agr user obj me address nhi hota h to kya agar ham sirf console.log(user.address);  etna print karana chahte to undefined print hota but console.log(user.address.HNo); address ki value print hoti ji nhi error aata but esa kyo Hno jyada likha to usme error but sirf address tak kiya to undefined print hua esa kyo samjhte h
// esa isliye kyoki jab pahli bar user.address tak dekhega to use user name ka object to mil jayega but address key nhi milega isliye vo undefine print kr dega
//  but jab user.address.HNo kiya to pahle use user object to mil jayega address nhi milega fir bhi address ke value ki aur uske value(obj) ko print karana chahte h but jab address mila nhi to uske andr ek aur obj kese milega isliye error print krega

// NOTE 1 :- but ham chahte h ki ye error na print kare balki undefined print kr de to uslue liye ham ? symbol use kar sakte h like
console.log(user?.firstName);   
console.log(user?.address?.HNo);  

// NOTE :- ?. lagane se kya hoga ki pahle object ko read krega agr vo mil jayega tab agla read karega address agar adderess mil jata h tab vo HNo pr jayega read karne aur agar nhi mila address to vo aage read na karke vahi se undefine kar dega ise hi ham optional chaining bolte h
//    esse hame pata chal jayega ki address h hi nhi to uske andr HNo kaha se hoga samjhe



