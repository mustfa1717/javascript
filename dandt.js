let date= new Date()
console.log(date);
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toUTCString());

//
let mydate=new Date(2005,3,4)
console.log(mydate.toDateString());

let myd = Date.now()
console.log(myd)
console.log(mydate.getTime());
let birthday=new Date(2004,3,4)
console.log(birthday.getTime()/1000);

let mynewdate=new Date(2005,3,4)
console.log(mynewdate);
console.log(mynewdate.getMonth());
console.log(mynewdate.getTime());
console.log(mynewdate.getHours());
 //