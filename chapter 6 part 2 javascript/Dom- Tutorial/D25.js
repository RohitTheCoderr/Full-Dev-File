// const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo.classList);    // classlist property ye batati h ki ye section ke pass kitni class name h 
// aap dekh sakte h ki 2 class h ek section-todo  aur container 
// maan lo hame esme ek aur class name dene h to use bhi ham de sakte h javascript se like 
// sectionTodo.classList.add("bg-dark");    // yha hamne ek aur class name de diya h ab ese dekh bhi sakte h like
// console.log(sectionTodo.classList);    // aap dekhe ki ab 3 class aa rha h ham es new class me kuch style bhi laga sakte h like go to style.css file line no 70 to 73 
// note:- aap dekh sakte h ki new class name add bi kiya h aur usme kuch style bhi lagaya h 

// NOTE:- jis parkar hamne new class add kiya thik usi tarah ham pahle vala class remove bhi kr sakte h like
// sectionTodo.classList.remove("container");
// console.log(sectionTodo.classList);    // ab check kr dekh sakte h ek class remove ho chuka h 

// NOTE:- aap ye bhi check kar sakte h ki koi class exist (yani classlist me h ya nhi) karti h ya nhi like
// ye true ya flase me output deta h isliye ese dusre variwble me store kara kr print kr ke dekhenge 
// const ans = sectionTodo.classList.contains("container");     // aap dekhe ki container h section me isliye true dega
// console.log(ans);

// NOTE:- Hamare pass ek property h toggle jo hame ye kaam karke dete h ki ek class ka name likhenge agr ye class pahle se hi us section me h to ese remove kr dega aur agr nhi h phle se to add kar dega like
// aap dekhe ki bg-dark ke commentout kr diya h isliye vo abhi nhi classlist me agr ham toggle use karenge to to ye use add kr dega kyoki esse pahle vo nhi tha like
// sectionTodo.classList.toggle("bg-dark");    // yha to add ho gya 
// sectionTodo.classList.toggle("bg-dark");    // yha fir se vahi class name likha h isliye ab remove ho gya hoga



// ab yahi kaam ham kisi aur ke sath kar ke dekhte h practice bhi ho jayege 
// ham ese header tag ke header class se dekh sakte h  sath kar ke dekhte h like
const Header = document.querySelector(".header")
console.log(Header.classList);    
console.log(Header.classList.add("bg-head"));
console.log(Header.classList.add("bg-design"));
console.log(Header.classList.remove("bg-head"));
console.log(Header.classList);  
const ans1= Header.classList.contains("bg-head");
console.log(ans1);     // false aa rha h kyoki abhi ese add kr ke remove kr diya tha isliye ab ye header me exist hi nhi kr rha h 

console.log(Header.classList.toggle("bg-design"));      //  agr ye hoga to remove ho jayega aur nhi hoga to add ho jayega



