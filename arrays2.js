const marvel =["s","d","w"]
const dc = ["q","r","p"]
//marvel.push(dc)
//console.log(marvel);
// so kya hota ha ki when we push an array into another array it does not completes a complete merge 
// IN THAT  CASE WE USE CONCAT
const all=marvel.concat(dc)
console.log(all);
//now after merging it with concat all the index are easy to acces
 console.log(all[1]);
 //NOW THERE IS ONE MORE WAY THAT IS SPREAD THROUGH WHICH ALSO WE CAN DO THE SAME THING
 const myfam=["papa","ashu","mummy","bhaiya"]
 const members=["phuphu","sanu"]
 const whole=["bishu"]
 const allm=[... myfam,...members,...whole]
 console.log(allm);
 

 //there are some more properties like is ,from ,of 
console.log(Array.isArray());
//what from will do is it will create an array from the given data
console.log(Array.from("mustafa17"));

//of is generally used to add arrays 
mark1=100
mark2=200
mark3=600
console.log(Array.of(mark1,mark2,mark3));
