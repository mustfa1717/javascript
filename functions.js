//========================FUNCTIONS===============
//functions matlab all the code and consoles packed in one varianble jis se copies le jaana easy ho jaye
console.log("A");
console.log("d");
console.log("n");
console.log("a");
console.log("n");
//mai ye sab aise bhi likh sakta hu but not a proffesional way

//declaring a function 

function myname(){
console.log("A");
console.log("d");
console.log("n");
console.log("a");
console.log("n");
}
myname()
//this is the source and calling way of the function

//you can also give task to the function

function addtwo(number1,number2){
    console.log(number1+number2);
    
}
addtwo(568888888,"a")

//look here we are doing console log that means it is printing out the value 
//but it is not returning any value so if you want to return it then ypu have to tell to "return"
function multwo(num1,num2){
    return num1*num2;
}
const result=multwo(4,3)
console.log("RESULT",result);

////dekh there are many types of ways to do this task that we are going to learn further

//now if you just call the function then it  wont give any output 
//bcoz you are returning a the output but not storing in any variable 
//to avoid this you have to store it in a variable

function statuss(username){
    return`${ username } is the currennt status`
}
console.log(statuss("online"));
//in this there are many cases like in argument bracket while calling if you dont write anything then it will give undefine

function statuss(username){
    return`${ username } is the currennt status`
}
console.log(statuss());

function usern(user="addu"){
    if(!user){
        console.log("hiiue");
        retunr
    }
    return `${user} is online now`
}
console.log(usern("mustafa"));
//basically it is similar to the c programing and ds jo tune pahle se sikh rakha hai 

//+++++++++++++++++++++++++continue+++++++++++++++++++++++++++++

//first we are going to go with like agar more than one input hoga to function kaise handle karega
//ye ... dots ko kahte spread operator which will combine the values which are given to the function

function summingcartittems(...num){
    return num
}

console.log(summingcartittems(10,20,30))
//bata na ye that ke agar you have to add more than one num then use ... operator

//and ha now we will learn about objects const
const buyername={
    nme:"baap",

    age:21
}

function callinguser(buyername){
        console.log(`username is ${buyername.nme} and age of the person is ${buyername.age}`)
    
}
callinguser(buyername)

//you can also pass arrays through function 
const myarray=[1,2,3]

function myarraycalling(myarray){
     console.log(`my array is ${myarray}`)
}
myarraycalling(myarray)

function myarraycalling(myarray){
     return myarray[2]
}
myarraycalling(myarray)
console.log(myarraycalling(myarray))

function myarraycalling(myarray){
     return myarray[0]+myarray[2]
}
console.log(myarraycalling(myarray))

//bhai bhot mast hai ye sab
