// multiple Button click

// const firstbutton= document.querySelector("#b1")
// firstbutton.addEventListener("click", function () {
//     console.log("you clicked me");
// })

// ye to hua ki ek button pr click lagana ho to ese lagate h but agar hame sab par same click lagana ho to 
//  uske liye hame alag alag lagane ki jarurat nhi valki ham ek loop chala sakte h like
const allButtons= document.querySelectorAll(".my-buttons button");   //  my-button ko select kr liya h jisme sab button h 
//  for(let button of allButtons){
// button.addEventListener("click", function(){
//     console.log("you clicked meeee");
// })
//  }

//  ab aap kisi pr bhi click kr ke check kr sakte h sab pr same kaam ho rha h 
// but kya ho agar ham chahe ki ye tino button apne apne andr me likhe text content ki value print kre to kese karenge 
//  uske liye hame kuch krne ki jarurat nhi bas this ko print kara denge bvas ho gya hamara kaam 
// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.dir(this);
//     })
//      }
    
    //  ab aap dekhe ki jis pr click kr rhe h us ki this ki value aa rha h print me 
    // aapko bata de ki ham jisme ham this ko use kiya h hame usi tag ko print karega this me like button here
//  ye to ho gya ki this .textContent krne se es button ka tex content print krega 
    // for(let button of allButtons){
    //         button.addEventListener("click", function(){
    //             console.dir(this.textContent);
    //         })
    //          } 
            //  but aap ek bar check kre agr ham esme arrow fun use krte h to ye undefine print krta h aur agr ham arrow fun me sirf this ko print kree to window print krta h 
            
    //  use  for loop
            // for(let i=0; i<allButtons.length; i++){
            //     allButtons[i].addEventListener("click", function(){
            //         console.dir(this);
            //     })
            // }


     //  use for each loop
allButtons.forEach(function(button){
button.addEventListener("click", function(){
                console.dir(this.textContent);
            })
        })

// NOTE:- you can use and for loop type 
