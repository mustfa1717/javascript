// COPARING THING IN JAVASCRIPT
// IF WE COMPARE 2 SAME DATATYPE THEN THE OUTPUT WILL BE BOOLEAN 
console.log(2>0);
console.log(2<3);

// upar wala to aram se ho jayega par agar we are comparing two diff datatypes then first it will convert the stringg into the number
 console.log("2">1);
// in this ye convert kar deta hai string ko bhi number me
 //NOW COMPARING NULL 
console.log(null >=0);
console.log(null == 0 );
console.log(null <= 0);
//so is me kya  hota  hai ki agar we are comparing it with >,< then wo convert ho jata hai 0 me

//same goes with undefine
//undefine wala sab ke sath false hi dega

//NOW datatypes and return value
let  value= Symbol("123466")
console.log(typeof value);



let value2=function(){
    nam="Adduuu"
    age = 19
}
console.log(typeof value2);

 let temp =null
 console.log(typeof temp);
 
