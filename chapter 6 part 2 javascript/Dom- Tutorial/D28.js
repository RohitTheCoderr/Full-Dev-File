// elem.insertAdjacentHTML(where, html)
// beforebegin;
// afterebegin;
// beforeend;
// afterend;

// note:- hame ek li item create krna h fir use todoList ko use krke alag alag position pr dalna h like
const todoList = document.querySelector(".todo-list"); 
// yha beforebegin ma mtlb h todoList ko suru hone se pahle hi add karna h ese 
// afterbegin ma mtlb h ki todoList ke suru hone ke bad suru me hi add karna h yani todoList ke andr hi 
// beforeend ka mtlb h ki tosoList ko li item ko khatam hone ke just pahle yni todoList ke andr hi me
// afterend ka mtlb h ki todoList ko khatam ho jane ke bad 

// todoList.insertAdjacentHTML("beforebegin", "<li>teach Students </li>")
// todoList.insertAdjacentHTML("afterbegin", "<li>teach Students </li>")
// todoList.insertAdjacentHTML("beforeend", "<li>teach Students </li>")
todoList.insertAdjacentHTML("afterend", "<li>teach Students </li>")


// NOTE:- yan i jo kaam ham esse pahle file me kar rhe the 3,4 line me vo ham ek hi line me kar sakte h 
// but mostly devlopers are use file no D27 all property not this file property because 
// jab bhi hame eske li me kuch kaam karna padega to pahle ese select krna padega fir krenge usme kya tha ek ek bar hi select kiya tha fir use se kaam kar sakte h 