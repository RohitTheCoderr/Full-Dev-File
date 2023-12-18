//  how to get the dimension of element

// height, width and etc check krna h to kese karenge dekhte h     

const sectionTodo = document.querySelector(".section-todo");
const info=sectionTodo.getBoundingClientRect();
console.log(info);

// NOTE:-  app dekh sakte h ki getBoundingClientRect krne se section-todo ke sari infomation aa rhi h uska width, height, left, right, top, bottom, x, y etc
//  but aapko sirf enme se kuch ek chij chahiye to uske liye aap ese likh sakte h like
const info1=sectionTodo.getBoundingClientRect().width;   // jaise hame sirf width chahiye tha isliye .width likha
console.log(info1);

