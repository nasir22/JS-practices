
// reduce function is used to add the elements of an array that takes a callack function and 2 arguments with an intial value that initial value gets inserted in accumulator and current value takes the first value of array then the currval and accumulator gets added result gets storesd in accumulator 
// accumulator takes the initial value only once

const total = [1, 2, 3]

const myTotal = total.reduce(function (acc, currval){
    console.log(`${acc} and ${currval}`);
    return acc + currval
}, 0)

console.log(myTotal)

// in arrow fun

const add = [5, 6, 7]

const addition = add.reduce((acc,currvalue) => acc + currvalue, 0)
console.log(addition)


const shoppingCart = [
    {
        itemname : "js course",
        price : 2999
    },
    {
        itemname : "py course",
        price : 9999
    },
    {
        itemname : "data science course",
        price : 2999
    },
    {
        itemname : "mobile dev course",
        price : 3999
    },
]

const priceToPay = shoppingCart.reduce((acc , item ) => acc + item.price, 0)
console.log(priceToPay)






