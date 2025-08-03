const user = {
username:"mustafa",
price:1000,
welcomemessage:function(){
console.log(`${this.username} ,welcoming you to the portal`);
//console.log(this);

}
}
//now we can also change the values of username just by:
user.username="addu"
user.welcomemessage()

//now lets create a function 
chai=function(){
    let user="adnan"
    console.log(this.user);
    
}
chai()
//to baat ye hai ki ye undefined aayega kyunkii it works only with objects
const nanded={
    state:"maharashtra",
    message:function(){
        console.log(this.state);
        
    }
}
nanded.message()
//to itna karne ke baad ye samajhh aaya ki it will not work in function itself you have to use objects and inside that a function 

// what i have learned is arrow function is a type of function only 
//there are many ways of using arrow function

const abb=(num1,num2) => {
 return num1/num2
}
console.log(abb(12,3));
//now impicit aur explicit bhi hota hai matlab using return and not using return

//agar return nahi use karna hai to {}ke jagah ()yeh karna padhega

const subtwo=(nu1,nu2)=>(nu1-nu2)
console.log(subtwo(6,5));

//and one more thing you can return object if you want to then wrap it up with ()

const sunna=(nu3,nu4)=>({username:"mustafa"})
console.log(sunna(2,6));
//itna abhi ke liye kaafi hai 


//+++++++++++++++IMMEDIATELY INVOKED FUNCTION EXPRESSION+++++++++++++++++++++++
////////////////(IIFE)??????????????????????????????????????????
//IIFE BHOT HI EASY CONCEPT YE KYA KARTTA HAI KI JALDII SE IMMEDIATELY FUNCTION KO EXECUTE 
//KARDETA HAI 

//SYNATX WILL BE 
(function kyabolu(){
    
    console.log(`acha ji`);
    
})();
//there is one iife that is simple iife which will be written using arrow

(()=>{
    console.log(`murkhta sarva sreshtha `);
    
}

)()
//ho gaya that is it itna hi hota hai iife
