const marvel_heros = ["Thor", "IronMan", "SpiderMan"]
const dc_heros = ["Flash", "SuperMan", "BatMan"]

// here when we try to push the 2nd array into the first it creates array in array cause array can literally conatin any data under one var it returns one array in that array it has another array so whenever we want to call 2nd arrays element we need to give the sub index like we didi in above example

//marvel_heros.push(dc_heros)
//console.log(marvel_heros)
//console.log(marvel_heros[3][1])

// here concat operation concatenates two arrays in a single variable 
 const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros)

// this is a spread operator it spreads the values of both the arrays
const all_new_heroes = [...marvel_heros,...dc_heros]
console.log(all_new_heroes)

// the flat method is used to bind all the sub-arrays into a single array

const another_array = [1, 2, 3,[4, 5, 6],7, [6, 7,[4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

// here we are asking the arguments passed isarray or not it returns the boolean value 
console.log(Array.isArray("nasir"))

//we can convert any kind of data into array example
//here from string to array
console.log(Array.from("Nasir"))

// here this is an interesting case it returns an empty array if we dont specify whether we want to make array from keys or values
console.log(Array.from({name:"nasir"}))


// if we have multiple values we can make array from them ex
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))

