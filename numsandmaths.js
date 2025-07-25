const score=666
console.log(score);

const balance= new Number(260)
console.log(balance);

console.log(score.toFixed(2))
console.log(balance.toString().length)
//console.log(balance.toString().indexOf('3'))

// tofixed is one of the most important properties of numbers

const num=566
console.log(num.toFixed(2));

// to precesion is also important ye kya karta hai ki round off karke deta hai number ko

const scor=99.36
console.log(scor.toPrecision(3));

//aur ek hota hai localestring
//which is use to determine the number in currency system 

const amount = 2665622
console.log(amount.toLocaleString('en-IN'));


// this is enough for the numbers

//==========================MATHS=================================

console.log(Math);
console.log(Math.abs(-4));
//it will only change the negative value into positive 
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.max(4.5,11,12))
;


//BESIDES THIS THERE ARE MORE maths properties 
//THE MOST IMPORTANT ONE IS ------RANDOM------

console.log(Math.random());
//what it will do is give a random number from 0.0-0.1
//we can make it 0-1 by miultiplying it with 0-1
console.log((Math.random()*10)+1);
// we can make the round of the number with our wish using ciel and floor

console.log(Math.floor((Math.random()*10)+1));
//no wye kabhi zero nai aayega kyunki we are addding one to the result
//NOW IN CASE OF BUILDING SOME GAMES OR WEBSITES 
//WE HAVE TO USE THE NUMBERS IN ONE RANGE SO WE  CAN DO THAT BY:-

const max=10;
const min=20;
console.log(Math.floor(Math.random()*(max-min+1)+min));

