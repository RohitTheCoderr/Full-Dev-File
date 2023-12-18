// some old methods to support poor IE(Internet Exprolor)
// appendChild;
// insertBefore;
// replaceChild;
// removeChild;

const ul = document.querySelector(".todo-list")
const li =document.createElement("li");
li.textContent="new todo";
ul.appendChild(li);      // appendChild yani ul ke andar jo uska child h uske bad 

// esi tarah inserbefore bi h jo insert karta h ul li ke pahle uske liye hame ul ke li ko reference dena padega new li create hone ke pahle hi  pahke hi like
// old child
const referenceNode =document.querySelector(".first-todo");    // reference yani ese select krna padega aur acche se samjhne ke liye hamne ul ke pahle li me class name bhi de diya h taki samjh achhe se aaye use to vese bhi select kr sakte the 
// new child 
li.textContent="new todo";
// ul.insertBefore(li, referenceNode);     // yha bola ki li ke pahle insert karna h isliye li bhi likha aur referenceNode bhi ok

// replaceChild
// yani ham chahte h ki purana todo1 h vo hat jaye aur new todo add ho jaye yani uske jagah ye aa jaye to uske liye ham repleceChild use kr sakte h  
// ul.replaceChild(li, referenceNode);      //  yha bola ki li ko add kar dena h referenceNode ko replace kar ke yanio hata kr 

// removeChild 
// removeChild to aap samjh hi rehe h ki kya karna h yani ese ul se remove krna h to uske liye ham ese likhte h like
// ul.removeChild(li);  // kise krna h uska name abhi replace krke li ko add kiya tha isliye abhi ul me sirf li h isliye ese remove kr ke dekh sakte h

 