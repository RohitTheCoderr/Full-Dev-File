//  event object 

// const firstButton= document.querySelector("#b1");
// firstButton.addEventListener("click", function () {
//     console.log(this);
// })

// arrow funtion use krne pr eski value change ho jate h ye to pata hi h 
// jab bhi mai kisi bhi element pe event listener add hoga 
// js Engine--- line by line execute karte h 
// browser --- js engine + extra features
//  browser ---- js engine + webApi 
//  jab browser ko pta chala ki user ne event perform kia
//  jo ham listen kr rhe h
// jaise hi ham us button pr click kiya to browser kya krega 
//  browser--- 2 kaam karega 
// 1) callback funtion h vo js engine ko degi
// 2)  callback function kesath vo(browser) jo event hua h uski infomation bhi dega
//  ye infomation hame ek object ke form me milegi 


// const firstButton= document.querySelector("#b1");
// firstButton.addEventListener("click", function(abc) {
//     console.log(abc);
// })

// NOTE :- yha hamne ekn abc name ka ek oject pass kiya h fir use pirnt kiya h to bahut sare mouseevent mil rhe h jo ki ham kar sakte h 
//  ham abc ke jagah kuh bhi likh sakte h ham samjhate g 

// function hello(a) {
//     console.log(a);
// }

// hello({firstkey: "value1", secondkey: "value2"})     // yha es hello fun ko call kiya jisme hamne a me ek object pass kiya h 
// jab ye execute hoga to es object ki value print ho jayegi kyoki ye objecet a me store kiya h aur fun me es a object ko print kiya h 
// isliye ham es function me a name de ya abc ya aur kuch bhi ye rahega to ek object hi na 
// ham eska name kuch bhi rakh sakte h isliye ham yha event rakhte h kyoki event hi milta h jo ki ek bahut bada object h jisme bahut sare event h print krne se to event name rakhna achha hoga
// const firstButton= document.querySelector("#b1");
// firstButton.addEventListener("click", function(event) {
//     console.log(event);
// })

// ab ham yhi chij ham sare button pr krte h uske liye hme sare button ko select karna padega to kr lete h  
const AllButton= document.querySelectorAll(".my-buttons button");

// for(let button of AllButton){
// button.addEventListener("click", function() {
//     console.log(this.textContent);
// })
// }

// but yhi chij mai arrow fun lag kar kru to undefinr show krega 
// but mai agr esme object pass kr du to mujhe event print hoga like
// for(let button of AllButton){
//     button.addEventListener("click", (e)=> {      // here e is a object 
//         console.log(e);
//     })
//     }

// NOTE:- aap console me eske pointerevent ko dekh sakte h esme aapko target and current target dekhne ko milega 
// uske bare  ham bat krenge aage

for(let button of AllButton){
    button.addEventListener("click", (e)=> {      // here e is a object 
        // console.log(e.target);
        console.log(e.currentTarget);

    })
    }
// NOTE:- AAPKO target and currentTarget dono same lag rhe honge but esa nhi h abhi ke liye aap dono me se kuch bhi use kr lo bad me batayenge dono me diffrent 
//  ham abhi currentTarget hi use krte h for practice
