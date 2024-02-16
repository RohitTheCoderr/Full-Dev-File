// const URL ="https://jsonplaceholder.typicode.com/posts"
// const xhr =new XMLHttpRequest();
// xhr.open("GET", URL);
// xhr.onload = () =>{

//     if (xhr.status >= 200 && xhr.status < 300) {
//         const data =JSON.parse(xhr.response);
//         console.log(data);
//     }
//     else{
//         console.log("something went wrong");
//     }
// }
// // ek aur error aati h jab hamara network nhi kaam karta h ya band ho to uske liye hamare pass ek onerror method hoti ham use bi define kr sakte h jab network kaam nhi kar rha ho ya band ho to
// xhr.onerror =()=>
// console.log("Network Error!!! please check your network");
// xhr.send();

// abhi tak to ham posts ke andr jitne bhi post h sab mil rhe the but hame maan lo ki kisi ek post pr kaam karna ho to kese karenge uske liye pahle hame pure posts ko lena padega fir uske andr jitne bi post h (es url me to 100 post the)
//  koi perticular post ke liye uske id se select krna padega after posts(jisme sab post h) uske liye ham /idName (slace likh kr idName likhte h) likhte h
// aur use hame  esi method me find karte h ek ke bad ek like
// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// xhr.open("GET", URL);
// xhr.onload = () => {
//   if (xhr.status >= 200 && xhr.status < 300) {
//     const data = JSON.parse(xhr.response);
//     console.log(data);     // ESSE MAIN POSTS H JISKE ANDER SARE POST H

//     const Id = data[3].id;
//     // console.log(Id);   // aap dekh sakte h ki hame posts ke andr 3rd number vala post mil rha h jiski id 4 mil rhi h
//     // hame ese bi use krne ke liye hame vo sab karna padega jo posts ko lene me kiya h like
//     const xhr2 = new XMLHttpRequest();
//     //  const URL2 = URL + "/" +Id;     //  eska mtlb h ki posts ke url/Id jise abhi select kiya tha jiske id 4 thi
//     const URL2 = `${URL}/${Id}`; // ham ese template string me bi likh skate h like this
//     console.log(URL2);
//     xhr2.open("GET", URL2);
//     xhr2.onload = () => {
//       const data2 = JSON.parse(xhr2.response);
//       console.log(data2);     // AND YHA SIRF VO POST MIL RHE H JISKI ID 4 THI JISE HAME SELECT KIYA THA
//     };
//     xhr2.send();
//   } else {
//     console.log("something went wrong");
//   }
// };
// xhr.onerror = () => console.log("Network Error!!! please check your network");
// xhr.send();

// NOTE:- agr ham ese pure code ko ek sath likhe to bina comment ke to ese hoga

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    const data = JSON.parse(xhr.response);
    console.log(data);

    const Id = data[3].id;
    const xhr2 = new XMLHttpRequest();
    const URL2 = `${URL}/${Id}`;
    console.log(URL2);
    xhr2.open("GET", URL2);
    xhr2.onload = () => {
      const data2 = JSON.parse(xhr2.response);
      console.log(data2);
    };
    xhr2.send();
  } else {
    console.log("something went wrong");
  }
};
xhr.onerror = () => console.log("Network Error!!! please check your network");
xhr.send();

// ham ese hi promise method se bi kar sakte h  jise ham next file me dekhenge ok so lets come to the next js file!