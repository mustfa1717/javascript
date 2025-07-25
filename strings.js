const game=new String('mustafa')
console.log(game);
console.log(typeof game)
console.log(game.toUpperCase());
// look after applying a certain property it is not changing the original value
//that means it is a type of stack memory allocation

//now there are many properties 
console.log(game.charAt(2));
console.log(game.indexOf('a'));
// now there are many types of strings properties
const gamename=game.substring(0,4)
console.log(gamename);
const gamen=game.slice(3,6)
console.log(gamen);

const nani='   m u s  '
const nana=nani.trim()
console.log(nana);

// replacing 
const namee= 'mudtafa'
console.log(namee);
// after replacning
console.log(namee.replace('d','s'));

// to search a specific word or a letter in the string we use include property in that case
console.log(namee.includes('s'));
console.log(namee.includes('d'));

// split is also a very important type of property in the strings 

let surnames ='shaikh=khan=pathan=sayyed'
console.log(surnames.split('='));
//ye kya karega ki ye words split kar dega on the basis of the letter or symbol you have given to it

let me='addu'
console.log(me.replaceAll('d','b'));

console.log(me.repeat('1'))
