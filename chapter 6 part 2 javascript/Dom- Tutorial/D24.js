// jis tarah ham document pr ham querySelector laga kar uske ander kuch find karte the usi tarah ham kisi pr bhi laga sakte h like body, head, html, kisi pr bhi 
// fir hame usi me kuch find kar sakte the like
// const head =document.querySelector("head");   // but pahle document me querySelector hone chahiye
// const title= head.querySelector("title");
// console.log(title.childNodes);

// NOTE:- HAMARE PASS EK PROPERTY H JISSE HAM TEXT NODE KO REMOVE KR KE DIKHAYE AGR HAM DEKHNA CHAHE TO vo property h children  esse ham sirf uske original childNOde ko dekh sakte h ya kaam kar sakte h textnode ke remove kr dega
 const container = document.querySelector(".container");
 console.log(container.children);    //  aap dekh sakte h ki eske sirf ab 2 hi childnode show ho rhe h h1 and p
//  agr ham childNodes kae ke dekhe to asl me kitne childnode h vo dikhega like
console.log(container.childNodes);    // childnode property lagane se total 5 child show kr rha h 