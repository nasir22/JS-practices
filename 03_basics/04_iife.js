// immediately invoked function expresions (IIFE)

// iife functions are those functions which gets executed imediately

// global scopes pollution creates problem sometime so to remove global scopes variables or any other declaration we use iife

// iife is executed by wrapping the whole function in parethesis ()

//syntax

// also known as named iife
(function connection(){
    console.log("DB CONNECTED")
}());

(() =>{
console.log("DB CONNECTED")
})();

// iife with variables 

((name) =>{
    console.log(`hi there, ${name}`);
})("nasir")