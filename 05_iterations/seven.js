// map method 

//const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNumbers.map((num) => num + 10)

//console.log(newNums)

// chaining where we apply different methods simultaneously 


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNumbers
.map((nums) => nums * 10)
.map((nums) => nums + 1)
.filter((nums) => nums >= 40)

console.log(newNums);









const myArr1 = [0, 1, 2, 3, 4, 5, 'Nasir']
console.log(myArr1.includes(9))

const myArr = ["ironman", "batman", "superman"]
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element)
    
}


const fruits = ['apple banana cherry orange'];

const value = [];
const index = fruits.reduce((acc, item,currvalve) => {
    if (item == fruits && acc == 0){
        return item;
    }
    return acc;
} , 0);

console.log(index)