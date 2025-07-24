//THERE ARE TWO TYPES OF MEMORY 
//   STACK AND HEAP
//STACK ME KYA HOTA HAI THAT YOU WILL GET A COPY OF THE MEMORY AND ONCE ASSIGNED YOU CANNOT CHANGE IT

//HEAP ME TUMHE DIRECT ACCES MILTA HAI ALLOCATED MEMORY KA 
// SO WE WILL START WITH THE STACK TYPE OF MEMORY ALLOCATION 
//AND ALL THE PRIMITIVE DATA TYPES WILL COME UNDER THE STACK AND NON PREIMITIVE UNDER HEAP

let value = "mynameisantony"
let value1=value
value1="penaldo"
console.log(value);
console.log(value1);
//look isme kya hua ki stack memory ka acces nahi milta isliye jab koi change hotahai then it will not change the first assigned memmory 

// heap
//heap ke liye non-primitive lena hai
let myobj={
    naam:"mustafa",
    age:19
}
let myobject=myobj
console.log(myobject);

//now to access the type of memmory in object we have to add the .
myobject.naam="addu"
myobject.age=16
console.log(myobj.naam);
console.log(myobject.naam);
console.log(myobj.age);
console.log(myobject.age);

const func=function () 
{
    school:"bluebells"
}
const func1=func
console.log(func);
console.log(func1);

func1.school="unique"
console.log(func.school);
console.log(func1.school);


