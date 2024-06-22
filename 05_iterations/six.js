// foreach loop doesnt return any value 

// here we tried to store the value of for each loop in a variable but it didnt return any value 

// const prog = ["js", "ruby", "swift", "java"]

// const items = prog.forEach((values) => {
//     console.log(values);
//     return values
// } )
// console.log(items);


// filter() removes elements that are not required and creates a new array containing the ones needed.

// filter method takes a callback function
// filter method takes 3 arguments and a condition to check and returns the values based on that condition 
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//const newNums = myNums.filter((num) => num > 5)

//this can be written as using scopes as well but if we used the scopes then we have to explicitly use keyword return
const newNums = myNums.filter((num) => {
    return num > 5
    
})

console.log(newNums)

// same logic with foreach loop 

const someNums = []
myNums.forEach((num) => {
    if (num > 5) {
        someNums.push(num)
        
    }
})
console.log(someNums);



// eg of fetching values according to user 

const books = [
    {
        title: 'book one', genre:'fiction', publish: 1981, edition: 2004
    },
    {
        title: 'book two', genre:'non-fiction', publish: 1971, edition: 2003
    },
    {
        title: 'book three', genre:'history', publish: 1999, edition: 2008
    },
    {
        title: 'book four', genre:'science', publish: 1951, edition: 2012
    },
    {
        title: 'book five', genre:'science', publish: 2009, edition: 2014
    },
    {
        title: 'book six', genre:'non-fiction', publish: 1995, edition: 2001
    },
    {
        title: 'book seven', genre:'history', publish: 1761, edition: 2018
    },
    {
        title: 'book eight', genre:'science', publish: 2005, edition: 2022
    },
]
let userBooks = books.filter( (bk) => 
    bk.genre === 'science'
 )

//console.log(userBooks)

 userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === 'history'
 })
    console.log(userBooks);
