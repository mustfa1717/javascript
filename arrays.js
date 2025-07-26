//++++++++++++++++++++++++++++ARRAYS+++++++++++++++++++++

//arrays is one of the most important topics in js
// NOW START KARENGE REPRESENTATION SE 

let myarray =[6,5,4,3,2,1]
console.log(myarray);

//there is one more type for representation
//now we will study properties
//Above is the given array and ham add kar skte hai element aur nikal bhi skte hai 
//IT USUALY ACTS AS STACK FOR THAT PURPOSE 
myarray.push(7)
console.log(myarray);

myarray.pop()
console.log(myarray);
//pop hamesha top wale ko karega

//unshift aur shift is also very important unshift me the element will be added to from the first and shift karengeg to it will be removed

myarray.unshift(10)
console.log(myarray);

myarray.shift()
console.log(myarray);

//you dont have to give value to pop and shift 
//similar to the string you can also get the index of the array and the elements
console.log(myarray.indexOf(4));
console.log(myarray.includes(11));

// includes will give you the output in the boolean form 
//SLICE AND SPLICE

let newarray= [1,2,3,4,5,6]

const mee=newarray.slice(1,3)
console.log(mee);
console.log(newarray);

const you=newarray.splice(1,3)
console.log(you);
console.log(newarray);

//LOOK YE WALA BHOT ACHA THA 
//LIKE JAB HAM SLICE KARTE HAI TAB THE ORIGINAL ARRAY IS NOT CHANGED 
//TYPE OF  STACK MEM AND WO RANGE KE LAST NUMBER KO INCLUDE NAHI KAREGA

//LEKIN WHEN WE ARE USING SLICE THEN IT WILL CHANGE THE ORIGINAL ARRAY TOO
//TYPE OF HEAP MEM
//AUR YE WALA OUTPUT ME RANGE BHI INCLUDE KAREGA AND ORIGINAL ARRAY SE GIVEN RANGE KO SLICE KAAR DEGA
