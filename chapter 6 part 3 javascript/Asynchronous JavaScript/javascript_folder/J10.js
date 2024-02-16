// now we use a promise in j5.js file example (paramid doom)

const heading1 =document.querySelector(".heading1")
const heading2 =document.querySelector(".heading2")
const heading3 =document.querySelector(".heading3")
const heading4 =document.querySelector(".heading4")
const heading5 =document.querySelector(".heading5")
const heading6 =document.querySelector(".heading6")
const heading7 =document.querySelector(".heading7")

function changeText(element, text, color, time) {
    return new Promise((resolve, reject)=>{      // yha hamne es change name ke function me ek promise return kara di sath me promise ke body me setTimeoutfunction likh diya h 
        setTimeout(()=>{                       // ews settimeout me condition lga diya  
            if (element) {                      // esme element ki value ham upar selected heading ko daal denge jisme 
                element.textContent = text;     // jisme ham element ka textContent ki value text daal denge ji text ham function ke argument me pass karenge
                element.style.color = color;    // sath me uske element.style.color me color ki value pass kr denge jo argument me milenege
            resolve("No Error");     // agr ye condition chala to console me No Error print hoga resolve me
            }else{
               reject("Element not found");      // and agr kuch  galat hua hamare calling function me to reject chalega jisme Error print hoga 
            }
        }, time)   // and here hamne ek time pass kiya h jo argument pass karte time jo time milenge utne der bad ye setTimeout chalega
    })
    }
   
// ham jante h ki uapr ke function me hamne ek promise return karaya h aur ham jante h ki promise resolve bi ek promise return krta h jise ham kisi me store kara sakte h jab us function ko call jayegi tabi like
//  ye jo function call hua h ye heme ek promise retturn kara rha h 
// changeText(heading1, "One", "red", 1000);          // ye changetext function ko call kiya h jiske argument me ye sab value pass kiye h jisme ek heading1 bhi samil h ye function ke andr promise ka return promise bi h jise ham kisi valiable me stoore kara sakte h like

// const returnpromise = changeText(heading1, "One", "red", 1000);    // ham us function ko ese bhi call kara skte h jisse return promise bi store ho jayegi sath me function bi call ho ajyegi  ye hame ek promise return kara rha h to promise return me ham .then bhi laga sate h 

// and then ek callback lega (success callback legi yani jab ye resolve hoga)
//  ab ham pahle pura likh lete h jitna explain kia h 
// ham direct bi likh sakte h like
// changeText(heading1, "One", "red", 1000).then(()=>{
//     changeText(heading2, "Two", "green", 1000)         // jiske andar hamne fir se chnageText function ko call kiya h dirrent argument value se
// })

//  ham ese jis variavle me promise store kraya tha use bhi use kr sakte h like
// returnpromise.then(()=>{
//     changeText(heading2, "Two", "green", 1000) 
// })
// NOTE:- ham promise ko store kara ke bhi use kar sakte the and bina store karaye bi 
// BIG-NOTE:- hamne yha .then use kiya h kyoki fun promise return kar rhi thi isliye ye to thik h but ham ye bhi jante h ki .then bi ek promise return karti h 
//           isliye jab ham .then ke andr callback karte h function ko to ham use return kar dete h esse kya hoga ki hamara fun call hoga to then ke use time ke bad me hi fun call hoga agr nhi use karte h retun to function turant call ho jayega jisse hamara kaam nhi hoga agr ham chahe ki kuch time bad call ho like

// sath me ham ese chaining bhi bana sakte h like
// returnpromise.then(()=>{
//   return changeText(heading2, "Two", "green", 1000) 
// }).then(()=>{
//    return changeText(heading3, "Three", "yellow", 1000) 
// }).then(()=>{
//     return changeText(heading4, "Four", "blue", 1000)     // maan llo hame ese 2 second bad call karne ho to 2000 likh denge
// }).then(()=>{
//     return changeText(heading5, "Five", "purple", 1000) 
// }).then(()=>{
//     return changeText(heading6, "Six", "orange", 3000)   // jaise yha 3000 likha 3sec ke liye
// }).then(()=>{
//      changeText(heading7, "Seven", "teal", 1000)    // last vale na bhi use kre return ko to chalega kyoki last vale calling me ye apne time ke hisab se hi chalega kyoki aage ab koi callback nhi h  
// })

// agr ham return use nhi kaerte h to vo sath me hi run ho jayega like aap check kar sakte h

// BIG-NOTE:- ham jante h ki arror function me kisi ko bhi ek hi line me return kara sakte h jisme hame return bi lihne ki jaruarat nhi h sath me curli  bracket bi lagne ki jaruart nhi h like

// returnpromise.then(()=>changeText(heading2, "Two", "green", 1000))
// .then(()=>changeText(heading3, "Three", "yellow", 1000))
// .then(()=>changeText(heading4, "Four", "blue", 1000)   )
// .then(()=>changeText(heading5, "Five", "purple", 1000))
// .then(()=>changeText(heading6, "Six", "orange", 1000))
// .then(()=>changeText(heading7, "Seven", "teal", 1000))

// bina variable me store karayer use kar sakte h like 

changeText(heading1, "One", "red", 1000)         // yha direct likh diya variable ka use kiye bina
.then(()=>changeText(heading2, "Two", "green", 1000))
.then(()=>changeText(heading3, "Three", "yellow", 1000))
.then(()=>changeText(heading4, "Four", "blue", 1000)   )
.then(()=>changeText(heading5, "Five", "purple", 1000))
.then(()=>changeText(heading6, "Six", "orange", 1000))
.then(()=>changeText(heading7, "Seven", "teal", 1000))
// .catch((error)=>
// {
//     alert(error)
// })
//  NOTE:- maan lo agr hamare code(caback me kuch galat hua to reject chalega jisse uske andr ka print ho jayega console me )