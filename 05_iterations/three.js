//for of loop 

const arr = [1, 2, 3, 4, 5]

for (const value of arr){
    //console.log(value);
}

const greetings = "hello world"

for (const greet of greetings) {
    //console.log(greet)
    
}

/// maps

// maps is an object type that has a key value pair takes unique values and duplicate entries are not allowed 


const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

//console.log(map);

// here wecan have simply passed key in for of loop but that would have given us array like structure but we wanted separate values so we destructured the array using key and vakue separated by colon
for (const [key, value] of map) {
    console.log(key ,':-' , value)
}

