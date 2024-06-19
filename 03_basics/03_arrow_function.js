const user = {
    username: " nasir",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}
user.welcomeMessage()
// this keyword is used to show current context that means values

// now if we would change the username will it change the current context 

user.username = "adnan"
user.welcomeMessage()

// if we consoled this outside the scope it gives us empty object in node and a window in dom

//console.log(this)



// this only works in objects and we are unable to use this keyword inside functions 
function work(){
    let username = "nasir"
   // console.log(this.username)
}
work()

/******************  Arrow functions */

const chai = () => {
    let username = "kane"
    //console.log(this)
}
chai()

//const addTwo = (num1, num2) => {
//    return num1 + num2
// }
//console.log(addTwo(5, 5))

// or we can write this in implicit return as well 

//const addTwo = (num1, num2) => num1 + num2
//console.log(addTwo(1,3))

//const addTwo = (num1, num2) => (num1 + num2)
// Note: if we use curly braces then we have to use return keyword if we use round brackets or no brackets thyen return shouldnt be specified

// and if we want to return an object then it should be wrapped in parenthesis

const addTwo = (num1, num2) => ({username:"nasir"})
console.log(addTwo(3,4))