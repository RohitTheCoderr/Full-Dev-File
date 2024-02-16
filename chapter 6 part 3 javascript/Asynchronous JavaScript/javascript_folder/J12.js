const URL ="https://jsonplaceholder.typicode.com/posts";
const xhr =new XMLHttpRequest();
// console.log(xhr);

// step1
// EK bat aapko dyaan me rkhnah ki ye kaam asynchronous hi hoga jise javascript karega
// console.log(xhr.readyState);
// aap dekhe ki agr xhr ko open akrne se pahle eski value checkk kre to kya aata  h and uske bad bi jagah jagah pr
xhr.open("GET", URL);
// console.log(xhr.readyState);

xhr.onreadystatechange = function () {
    // console.log(xhr.readyState);
    // console.log(xhr);
// NOTE:- hamne dekha ki xhr me readystate ki kuch value hoti h 0 to 4 tak jisse vo apna kaam karta h
//  ab ham usi ko if condition me le kar kuch karbate h like
    if (xhr.readyState === 4) {
        console.log(xhr);
        // console.log(xhr.response);
        // console.log(typeof xhr.response);    // agr mai eski typeof chceck kru to dekhe ki ye string type k h
    //  hamne dekha tha ki hame ye JSON me string type ka mil rha tha but hame ek object me chahiye ese 
    const response = xhr.response;     // ham es response ko data bi bol sakte h 
    const data = JSON.parse(response);
    // console.log(data);
    console.log(typeof data);  
    }
}

xhr.send();

// NOTE:-  maan lo hamne url me kahi kuch mistake kar diya ya aur bi kuch kaaran se hamara code run nhi hua to us condition me ham pata kar sakte h ki hamne kaha mistake kiya h jise hame status code batata h uske number ke hisab se like maan lo hamne url me kahi kuch mistake kiya  to us condition me status code me 404 number aayega kaha kaha mistake h sab ka alag alag number hota hstatus code me like use dekhte h 

// All HTTP response status codes are separated into five classes or categories. The first digit of the status code defines the class of response, while the last two digits do not have any classifying or categorization role. There are five classes defined by the standard:

// 1xx informational response – the request was received, continuing process
// 2xx successful – the request was successfully received, understood, and accepted
// 3xx redirection – further action needs to be taken in order to complete the request
// 4xx client error – the request contains bad syntax or cannot be fulfilled        // ye user ne kuch url me kuch mistake se hua hota h
// 5xx server error – the server failed to fulfil an apparently valid request       // ye error backend bale ki galti ki vajah se aati h yani ese banate time usi ki glti ki vajah se aaye hoti h 

// yha 1xx ka mtlb h ki 100 ke line me esi tarah 2xx ka mtbl 200 ke line me etc

// NOTE:- ham esi ki help se ham error handling kar sakte h like
// if(xhr.status ===200){
    // to kuch message print kra sakte h ya aur bi kuch  
// }
// ese bi karenge aage but abi ke liye etna hi

// NOTE:- abi tak jitna bi code likha h use next file me fir se acche se likhte h ok let's come to the next js file 