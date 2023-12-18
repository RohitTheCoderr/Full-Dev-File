// clone nodes
// mtlb aap nodes ko clone bhi kr sakte h 
const ul =document.querySelector(".todo-list");
// maan lo es ul me hame ek item insert krna h to kr lete h 
const li = document.createElement("li");  
li.textContent ="new todo";  
// ul.append(li);    // ul me es li ko append kr liya h   // append ka mtlb ul ke pahle se li item ke bad ye li add hoga 
// ul.prepend(li);    // fir es line me ese prepend kr diya   // aur prepend ka mtlb ul ke nadr pahle se hi li ke item ke bad es li ko add hoga
// aap soch rhe honge ki yah hamne pahle append kiya fir prepend kiya to ye ul me append hua h ya prepend 
// ans--> to aapko bata de ki ye bad vala commond lagu hoga 

// NOTE:- BUT aap chahte h ki ye append pr bhi aaye aur prepend pr bhi to kese krenge uske liye aap ese clone (copy) kr ke kr salke h 
// usliye ham jaha ese create kiya the vahi pr ese clone kr dena h like
// apend and prepend ko comment out kr diya h to ab pahle clone krte h fir append and prepend karenge like
const li2 = li.cloneNode(true);    // aur jab tak ham eske andr true nhi likhte h jab tak ye clone achhe se nhi hoga yanoi eski value esme copy nhi hogi isliye eske ander true likhna jaruri h 
ul.append(li);    // fir ham ek ho apend me to
ul.prepend(li2);  // ek ko prepend kr denge 