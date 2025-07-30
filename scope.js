//scope kuch nahi {} hai 
// var jo hota hai wo thoda sa faltu hota hai 
// agar aap koi variable scope ke bahar declare kar rahe then onlyy it should print out 
//but var {} ke andar se bhi print ho jata hai 
// 

{
    let a=10
    let b=20
    let c=60
}
console.log(a)
//ye abhi print isliye nahi hora hai kyunki maine andar decalre kiya hai 
//but var me it will be defferent

{
   var a=10
   var b=20

}
console.log(a,b)

//samjhe guru utna bhi hard nahi hai 

// now nested functions likhte hai and acces karte hai 
//remember beta pappa  paise chura sakta hai par pappa bete ke nahi
function one (){
const username = "addu"
function two(){
    let age = 20
    console.log(username)
}
two()
}
one()

if (true) {
    const nn="adnan bhai"
    if (true) {
  const status = " online"
  console.log(nn + status);
    }    
    console.log(nn)
}

///++++++++++++++++INTERESTING++++++++++++++++

console.log(addone(5));

function addone (num){
    return num*2
}

//we have called the function but not printed it and haa we are also not storing it in any variable 
//so if you call the function before writing it then also it will be executed 
//but if you store and declare a function then it should be called after writing the function as we are 
//storing the value in a variable it cant be called before assigning the value to it 


const result=function (num){
    return num*3
}
console.log(result(5));