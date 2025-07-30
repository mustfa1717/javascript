//NOW OBJECTS ARE VERY IMPORTANT IN JAVA SCRIPT

//OBEJECT LITERAL
const mysym=Symbol("key")
const myuser={
    name:"mustafa",
    age:19,
    city:"narsi",
    "realn":"mustafaraza",
    [mysym]:"key 1",//[] will make it symbol not string
    email:"mustafaraza1717@gamiil.com"

}
console.log(myuser.name);
console.log(myuser["name"]);
//dekh there are two ways of printing it out 
//why you need to learn the second method is because if there is any element in object 
//is present like"asda" this then you cant acces by the first method 
//now
console.log(myuser["realn"]);

//there is one more topic adding a symbol to the object list becuse if we add it as it is the return type will be string
// so there is a modeification for that
//so for that we will declare a key

//we will print down the output
console.log(typeof myuser.mysym);
//so here it is returning string as a datatype of the mysym to make it perfect and return symbol 
//we have to add []braces to the element in the object
console.log( myuser[mysym]);

//now you can overwrite or change the value by just writing it with=
myuser.name="addu"
console.log(myuser);
//you can also freeze the elements of your objects
//Object.freeze(myuser)
myuser.email="sdjhhjd.com"
console.log(myuser);

//now if you have tro write a function with taking hands on with this object you can

 myuser.myfunc=function (){
    console.log("kaise ho bhai");
    
}
console.log(myuser.myfunc());
//there is one more way jis se ke ham function me object ka refferenve leke function define kar sakte hai 

myuser.myfunc2=function(){
    console.log(`mera naam hai ${this.name}`);//ye bhot important hai jab tum $ dete ho is kinda acces
    
}
console.log(myuser.myfunc2());
//samjhe guru


// CHALO ab thoda sa nested sikhte hai 

const regname={
   fullname:{
    myname:{
    firstname:"mustafa",
    lastname:"yousuf"
    }
   }

}
console.log(regname.fullname.myname.lastname)

//objects ko merge karte hai ab
//for the merging puprose we use assign for the objects now we can merge objects as

const obj1={a:1}
const obj2={b:2}
const obj3={c:3}
//now to merge it we will creat ine more object
const obj4=Object.assign({},obj1,obj2,obj3)
console.log(obj4);
//the reason behind giving null{} is the first one is the target which will hold the remaining objects

//now we can do with spread also
const obj54={...obj1,...obj2,...obj3};
console.log(obj54);
//one more good thing is objects holds two things keys and values so we can acces both by

const snapuser={
    name:"addu bhai",
    age:21,
    lastloggedin:"yesterday"
}
console.log(Object.keys(snapuser));
//similarly we can print the values of it too
console.log(Object.values(snapuser));
//notable point here is the data type of the output is arrays the result is being print out in arrays which is useful in many ways

//now you can also check or ask the system whether a particular key is present or not
console.log(snapuser.hasOwnProperty('age'));


//+++++++++++++++++++++++++++++++++++++objects hi aur............+++++++++++++++++++++++++++++
//object de-structuring kuch nahi it is a way of giving short cut names to acces it in less time

const users={
    namee:"mustafa",
    mother:"noorjahan"
}
const{mother:m} = users

console.log(m);
//samjhe guru 


