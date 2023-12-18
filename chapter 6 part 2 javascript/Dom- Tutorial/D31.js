// static list vs live list

// for understanding of this topic we create a li list in html and old li list comment out krte h   

// queryselector is provider us static list
// getElementByclass/id/something are provide a live list

const listItem = document.querySelectorAll(".todo-list li")
const sixthLi= document.createElement("li");
sixthLi.textContent="item 6";
const ul = document.querySelector(".todo-list")
ul.append(sixthLi);
console.log(listItem);
// NOTE:- aap dekhe ki ab ham li ka list dekhe to hame sirf 5 hi li show ho rhe h pahle vala hi but jo abhi item6 ko add kiya vo to show kr hi nhi rha h 
//   esa isliyte kyoki hamne queryselector lagaya h aur ye hame static list provide krti h and live list dekhne ke liye hame getElementBy...  krna padega like
const listItem1 = ul.getElementsByTagName("li");    // yha hane class bhi le sakte the but abhi tagname se liya h li ko kyoki li ek tag hi to h
        //  sath me hamne document na karke ul ko select kiya h kyoki agar mai document ko select kiya to ye pure page ko dekhega aur pure me jitne bhi li tag h vo use select kr lega but hame to ul ke angr vali li chahiye to isliye hamne document ke jagah ul likha h 
console.log(listItem1);

// NOTE:- ab aap dekhe to ye sab live li list show kr rha h 











