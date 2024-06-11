const name = "nasir"
const repoCount = 50

// console.log(name + repoCount + " Value");

// this method of using backticks and variables is known as string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// this new keyword is used to explicitly mention the data type as string so the return value will always be a string and we can perform string methods on this
const gameName = new String('nasir-khan.com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nasir.com/nasir%20hussain"
// the replace method will replace %20 with -
console.log(url.replace('%20', '-'))

// the includes method checks if the argument is in the variable and returns a boolean value 
console.log(url.includes('adnan'))

console.log(gameName.split('-'));