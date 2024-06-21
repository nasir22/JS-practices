// while and do while loop

let value = 0
while (value <= 10) {
    console.log(value);
    value = value + 2
}


// while loop using arrays
let myArray = ["flash", "ironman", "spiderman"]
let arr = 0;
while (arr < myArray.length) {
    console.log(`the marvel heroes are :${myArray[arr]}`);

    arr = arr + 1
    
}

// do while loop

let score = 1 
do {
    console.log(`the score is ${score}`)
    score++
} while (score <= 10);
 