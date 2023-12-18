// RootNode ko acche se jannen ke liye go to notebook file no D20.js ke naam se h

const rootNode = document.getRootNode();     // hamare pass ek method hots h rootnode ke liye vo h getRootNode
console.log(rootNode);    // ese print kr ke dekhte h aap dekhe ki jasa notebook me bata tha ki Rootnode document hota h vahi h
// ham eske child node bhi dekh sakte h uska method h childNodes like
console.log(rootNode.childNodes);  // aap dekh sakte h ki document ka sirf ek hi childNode h HTML jo ki Nodelist me h

// note:- ye ek nodelist h isliye ham es par indexing bhi kr sakte h aur eske node ko bhi dekh sakte h like
const htmlElementNode =rootNode.childNodes[0];     // ye 0th index pr tha isliye [0] likha
// console.log(htmlElementNode);  // but ye htmlElement h kya ye javascript to object h ese check karne ke liye log ke jagah dir laga dete h like
// console.dir(htmlElementNode);   // ye ek object hi h jisme bahut sare key value pair h 

// console.log(htmlElementNode.childNodes);    // ab ham eske child node dekhte h kitne h aap dekheneg  ki esme 3 child node h head, text, body

// maan lo ab hame html ke kisi child node ke child node dekhenge to use bhi ham esi ke tarah dekh sakte h like'

const headElementNode = htmlElementNode.childNodes[0];      // head [0th] index pr h isliye [0] likha headnode ko headElementNode me store kiya h   
const textElementNode = htmlElementNode.childNodes[1];      // text [1th] index pr h isliye [0] likha textnode ko textElementNode me store kiya h   
const bodyElementNode = htmlElementNode.childNodes[2];      // body [2th] index pr h isliye [0] likha bodynode ko BodyElementNode me store kiya h   
// eske chld ko print karne ke liye .childNode likha 
// console.log(headElementNode.childNodes);   // aap dekhe  esme total 5 child h jo es index pr h --> 0:text, 1:title, 2:text, 3:script, 4:text  ye sab eske childNode h 
// console.log(textElementNode.childNodes);   // esi tarah text ke dekhne pr kuch nhi aa rha h kyoki text to ek newline and space tha na isliye
// console.log(bodyElementNode.childNodes);   // esme total 7 child h jo es index pr h --> 0:text, 1:div.container, 2:text, 3:comment, 4:text, 5:script, 6:text


// NOTE:- esi tarah aap kisi ke bhi child node dekh sakte h jisse aap tye document tree pr travels kar sakte h 

//  esi tarah aap eske parent bhi dekh sakte h like
// hame headnode ke parent dekhne h to uske liye ham parentNode laga sakte h like
// console.log(headElementNode.parentNode);   // esse eske parent node show karega
// console.log(htmlElementNode.childNodes[0].parentNode);    //aap ese ese bhi likh sakte h 

// NOTE:- sibling relation:- mtlb ek hi parent ke jitne bhi child h vo sab ek dusre ke sibling hote h
//  isliye ham ek dusre ke sibling bhi check kr sakte h like
// console.log(headElementNode.nextSibling);     // aapne dekha hoga ki head ke next sibling text h left to right
// console.log(headElementNode.nextSibling.nextSibling);   // sibling to sibling bhi dekh sakte h 

// NOTE:- aapne dekha ki nextSibling karne pr agar next position pr textnode(newline and space)h to vo bhi dega but ham chahte h ki text node ko ignore kr de to uske liye ek property h nextElementsibling 
console.log(headElementNode.nextElementSibling);  // esse texxtnode ko ignore kr dega 