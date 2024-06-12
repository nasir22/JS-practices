// array
// different ways of declaring arrays

const myArr = [0, 1, 2, 3, 4, 5, 'Nasir']
const myHeroes = ["batman", "spiderman", "ironman"]

const myArr2 = new Array(1, 2, 3, 4,)
//console.log(myArr[1])

//***********Array methods */
myArr.push(9)
// console.log(myArr)

myArr.pop()
// console.log(myArr)
// console.log(myArr.length)

// unshift method adds the given element to the array but this is not the optimal solution if we had the large amount of balues it would have been time consuming

//myArr.unshift(7)

// shift doent talke any parameters and discards the first element in the array

//myArr.shift()
//console.log(myArr)

//console.log(myArr.includes(9))

//console.log(myArr.indexOf(3))

// here the join operator not only binds the two arrays but converts the new arrayin string
const newArr = myArr.join()
//console.log(newArr)
//console.log(myArr)

// slice, splice methods 

console.log("A", myArr)

const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B", myArr)
const myn2 = myArr.splice(1, 3)
console.log(myn2)
console.log(myArr)

// two difference between them 

// 1) slice doesnt includes the range for eg if we need (1,3) slice wont include the 3 index but splice includes the range 

// 2) it only returns the remaining values in original array that arent specified in the range in splice the range is taken out from the original array that means we will not be having the index values in original array that are specified in the splice 