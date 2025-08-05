//KUCH NAHI BASICS OF C HA 
//else ,if else ,switch baaki kuch nahi 
// ab jaise ki ham if ki condition me true ya false check karte hai
//to we assume some values to be true and some to be false
//mai saare falsy values note down kar raha hu baaki sab truthy valus hai

//FALSY VALUES
//0,"",-0,undefined,null,false,bigInt 0n,NaN
//THATS IT BAAKI SAARE WILL BE TRUTHY VALUES
//SOME truthy values that will shock you is 
//"0",'false'," ",[],{},function (){}

//suppose agar empty array and empty objectt aajaye tab
const array=[]
if (array.length==0) {
    console.log("acha ji");
}
//similarly we can convert an object in an array to check the same thing
const objectt={}
if (Object.keys(objectt).length==0) {
    console.log("thik hai ");
    
}

//NULL COALISING OPERATOR(??)
//SO iska main kaam ye hai ki agar database se kuch info aati hai aur agar usme suppose starting info null hai to it will jump to the next 
let num1;
num1=10 ?? 5
console.log(num1);

let num2
num2=null ?? undefined ?? 12
console.log(num2);

//TURNORY OPERATOR
//SYNTAX HOGA KI 
//CONDITION ? TRUE  : FALSE
// const age = 20
// age >=10 ? console.log("sahi hai na"):console.log("jhut kaiku bolre yaaaro")

 //++++++++++++++++++++++++LOOPS /////////////////////
 //FOR
 for (let index = 1; index <= 10; index++) {
    const element = index;
    console.log(index);
 }

 for (let i = 0; i <=10; i++) {
   console.log(i);
   for (let j = 0; j <=10; j++) {
     console.log( i + '*' + j + '=' + i*j);
   }
   
    
 }

 //break and continue
 for (let i = 0; i < 10; i++) {
    const element=i
    if (element==4){
        console.log(`milgaya ji ${element}`);
    break    
    }
    console.log(i);
    
    
 }
 //continue matlab chalte jana hai 
 for (let j = 0; j <10; j++) {
    const element = j
    if (element==4) {
        console.log(`milgaya ${element} par chalte rahao`);
        continue
    }
    console.log(j);
    
 }

 //while loop and do loop
// dekh addu sab kuch c programming jaise hi hai to tere liye to easy chal raha hai 
let number=0
while(number<=10){
    console.log(`number is ${number}`)
    number++
}

//now we will do it using array
let myarray=["pappa","mumma","bhaiya","ashu"]
let arr=0
while (arr < myarray.length){
console.log(`my family members are ${myarray[arr]}`)
arr++
}
//do while loops me ek fault hai ki ek baar to wo execute hoga hi 
//kyunki isme kaam pahle condition baad me 

let score =100
do {
    console.log(`score of the candidate is${score}`)
    score++
    
} while (score < 90)
    //ab is me kya hoga ki first wala hamesha hoga kyunki uske baad hi to condition check horahi hai

//for of loop
const arrayy=["mustafa",1,2,3,4,5,6]
for (const num of arrayy) {
   console.log(num);
   
}
//this can be also used for strings and it will break down every string in a single alphabets 
const namas="aur kya haal hai ji"
for (const naam of namas) {

    console.log(`each character of the word is ${naam}`);
    
}
/////MAPS 
//so map is same like objects but it does not take duplicate values
//example
const map =new  Map()
map.set('IN',"INDIA")
map.set("CND","CANADA")
map.set('IN',"INDIA")
console.log(map);

//WE CAN ALSO USE FOROF IN MAPS
for (const [keys] of map) {
    console.log(keys);
    
    
}
//similarly we can also print keys and their values using this syntax
//ham forof loop objects keliye istemal nahi kar skte hai uske liye hota hai for in loop
const myobject={
    js:"javascript",
    cpp:"c ++"
}
for (const key in myobject) {
    console.log(`the full form of ${key} is ${myobject[key]}`);
    
    
}

//so can we use for in for arrays as well lets find out
//so jab hum forin loop arrays pe laga te hai then wo usko index number print karta hai
//we can fix it as
const name=["mustafa","adnan","umar"]
for (const key in name) {
   console.log(name[key]);
   
}

//NOW FOR EACH LOOP
//now what is the benefit of using this type is it is veryeasy to write and comes with multiple properties

const myy=["a","b","c","d"]
//so what you have to do is make it a function and pass on the parameter
myy.forEach( function(item){
    console.log(item);
    
})

//there is one more way to do so
myy.forEach((values)=>{
    console.log(values);
    
})
//you can also acces the index
myy.forEach((values,index)=>{
    console.log(values,index);
    
})
//now we will acces objects inside arrays
//ye bhot badhiya chiz hai pahle to storing a objext in an array is difficult uske baat specif onject ka acces and itna hi nhi
//uske sath sath object ke ander ke element ka access
const lang=[{
    mylang:"hindi",
    myreligion:"muslim"

},
{
    mylang:"kannada",
    myreligion:"muslim"
},
{
    mylang:"urdu",
    myreligion:"muslim"
}
]
//now as the syntax refers for for each make a function and assign any variable so that it can pick it up and print it out
lang.forEach((val)=>{
    console.log(val.mylang);
    
})

//ye bhot sahi coding hai kitna easy kar de raha hai sasb cheeo ko 
//for each loop me kabhi bhi value return nahi hoti agar aap use store karke return bhi kare to
//filter bhi ek achaa function hai 
//filter values return kar skta hai 
const mynum=[1,2,3,4,5,6]
const mynumm=mynum.filter((num)=>num>3)
console.log(mynumm);
//ye to hogaya implicit 
//explicit me you have to tell to returnn it
const mine=[1,2,3,4,5,6]
const mynumb=mine.filter((numb) => {
    return numb>3})
console.log(mynumb);
//
const sankhya=[1,2,3,4,5,6,7,8,9]
const newsankhya=sankhya.map((num)=> {
     return num+2
    })
console.log(newsankhya);

sankhya.forEach((val)=>{
console.log(val+3);
})
//chaining is also very interesting and helpful method
const numberr=[1,2,3,4,5,6,7,98,9]
const nun=numberr
        .map((num)=>num*10)
        .map((num)=>num+25)
        .filter((num)=>num>100)
        console.log(nun);
        
//so basilcalyy maps hote hai commands tu bolega kya karna hai aur wo kardenge 
//FILTER hota hai true and false like ek condition de and wo dhund ke tujhe denge wo 


//+++++++++++++++++++++++               REDUCE         ++++++++++++++++++++++++++
//REDUCE use kiya jaata haito sum up things and return it back
const shoppingcart=[
    {
        nam:"shirt",
        price:100
    },
    {
        nam:"jeans",
        price:500
    },
    {
        nam:"jacket",
        price:1200
    }
]
const totalbill=shoppingcart.reduce((acc,shoppingcart)=>( acc+shoppingcart.price),0)
console.log(totalbill);

//so the thing to remember in the syntax is while writing the parameters in the function just write the name of the array
//after the acc and in the the argument bracket after => then acces the variable by using the dot and then perform any thing you want
