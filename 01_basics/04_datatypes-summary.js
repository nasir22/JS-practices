//************ */ primitive data types *************//

// 7 types : String, Number, Boolean, null, Undefined, Symbol, BigInt


const score = 100  // this is number 
const scoreValue = 100.3  // this is also a number decimal, float all are considered number dataType in js

const isLoggedIn = false // boolean type 
const outsideTemp = null // null doesnt mean zero it means its empty 
let userEmail; // this will be undefined value can be passed later 

const id = Symbol('123') //Symbol is used to define uniqueness eg id's are unique if wewould pass same values to different variables wrapped in a symbol still the ids will be unique 

const anotherId = Symbol('123')

//console.log(id === anotherId)


const bigNumber = 343434343433333333343n

// bigInt represent with "n " at the end of the value 



//************ */ Reffernece type (Non primitive )***************//

//Array, Objects, Functions

// array declaration
const heros = ["captain-america", "hulk", "spider-man"] 

// the values inside the curly braces are objects 
let myObj = {
    name: "nasir",
    age: 22,
}

// function declaration

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof outsideTemp) 

// function typeof returs function datatype

// BigInt typeof returns Bigint DT

// object returns object DT 

// null typeof returns object DataType

// undefined returns undefined 
