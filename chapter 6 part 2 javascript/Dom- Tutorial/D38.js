//  same practice with click event 
 
// we want to  add event if user click on these btn than change the background color of btn 
//  so how we can do ??????

const allBtn=document.querySelectorAll(".my-buttons button");

allBtn.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        // console.log(e.target);    // check kr rha hu ki btn kaam kar rha h ya nhi esse hame koi kaam nhi h 
        e.target.style.backgroundColor ="pink"; 
        e.target.style.color ="red";  
    })
})

