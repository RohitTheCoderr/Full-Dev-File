// Promise.resolve
// Promise.chaining

// const myPromise = Promise.resolve(5);
// myPromise.then(value=>{
//     console.log(value);
// })
// NOTE:- first line jo promise.resolve h na vo koi bhi ek value lega for example hamne usme value 5 de diya aur ye hame return me ek prommise dega  fir hamne ese myPromise variable me store kara diya
// dusre line me hamne then laga liya jisme ko value return kar rha tha use store kr kr print kara liya 

// ham promise.resolve ko direct use kr sakte h function me, bina kisi me store kraye like

// Promise.resolve(10).then(value=>{
//     console.log(value);
// })

// then()
// then method hamesa promise return karta hai

function myPromise(){
    return new Promise((resolve, reject)=>{
     resolve("foo")
    })
}

// mypromise function ko call karne ke liye myPromise() likha and then me myPromise ke value ko return kara diya h 
myPromise().then(value=>{
    console.log(value);   // yha abhi value ko print karne pr abhi eski value foo hi h 
    value+= "bar";      // but ab hamne esme bar add  kr diya kisi me kuch add krne ke liye + use krte h like here
    // return value;       // ab hamne es value ko return karaya h but bastab me hamne value ko return nhi kiya h balki hamne then method ke promise ko return karaya h kyoki javascript internaly ase kuch esa karti h
     return Promise.resolve(value)    // aap dekhe ki same kaam ho rha h 
})             // yha hamne value return nhi karaya ba;lki promise return ho rha h matlab ham yha dubara .then laga sakta hu jisme es value ko receive kar ke use print kara sakta hu 
.then((value)=>{
    console.log(value);
    value += "baaz";
    return value;
})
.then(value=>{
    console.log(value);
})

// NOTE:- aap dekh sakte h ki pahle hamne value me bar add kiya tha fir se then use kr ke usme baaz add kiya ham es tarah promise me chaining bana sakte h 