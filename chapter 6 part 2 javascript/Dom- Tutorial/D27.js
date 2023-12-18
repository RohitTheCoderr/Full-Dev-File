// 
// document.createElement() 
// document.createTextNode() 
//  textContent    
// append
// prepend
// remove
// before
// after



// const newTodoItem = document.createElement("li");    // ek li create kiya h jise hamne newTodoItem me dala h 
// // const newTodoItemText = document.createTextNode("Teach students");    // yha hamne ek variable me text create kr ke dala h fir
// // newTodoItem.appendChild(newTodoItemText)   // yha ham sirf append bhi use kr sakte h        //fir us text ko appendchild ki help se newTodoItem me daal diya h   
// // NOTE:- ham ese eassy bhi kr sakte h  ek hi line me fir hamne uper ke 2 line ki need nhi padegi sirf li create kr ke usme daal sakte h like
// newTodoItem.textContent = "Teach students";        // hame ese 
// console.log(newTodoItem);
// // NOTE:- hamne ek li create kr liya h jisme teach student text daal diya h ab ham ese todo-list me add krna h to kese krenge 
// const todoList = document.querySelector(".todo-list")
// // todoList.append(newTodoItem);     // append ya appendchild dolno me se koi bhi use kr sakte h add karne ke liye element ko 
// // NOTE:- EK hamre pass prepend bhi hota h ye suru me hi add kr deta h like
// todoList.prepend(newTodoItem);   // esse suru me hi add ho gya h dekh sakt

// // for removeing item element use remove
// // newTodoItem.remove();
// // console.log(newTodoItem);

// todoList.remove();
// console.log(todoList);


// before
// after
// note:- before and after property is use for indeting eleement before of any element and and after of any elelment like
// I want to insert element before todolist element so how we can do this

const newTodoItem = document.createElement("li");    // yha ek li create kiya
newTodoItem.textContent = "Teach students";     // jisme eski kuch value dali
const todoList = document.querySelector(".todo-list");    // yha hamne ek variable banaya jisme class todo-list ko select kiya jisme pahle se hi ek item h
// ye esliye ese select kiya kyoki hame ese ke pahle apna newTodoItem ko dalna h like
todoList.before(newTodoItem);    //todoList ke pahle dalna h hame ye newdoto list ok   

// Aap dekhe ki ye todo-list ke pahle dal gya but esme kuch style nhi laga aap khud soche na ki lagega bhi kese kyoki ye to todo-List tag ke bahar esse pahle rakha h aur hamne style me to  todo-list ke li pr style add kiya tha isliye 

// ese tarah after property hoti h ji element ke bad add hote h like
const newLitodo = document.createElement("li");    // yha ek li create kiya
newLitodo.textContent = "Teach teacher"; 
 todoList.after(newLitodo)  
//  note:- yha hamne ek new new li create kiya jisme ek value dala fir use todoList tag ke bad add kiya 
