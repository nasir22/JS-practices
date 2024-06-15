// funsctions 

function sayMyName() {
    const user ={
        name:"nasir",
        proffesion: "engineer"
    }
    console.log(user)
}

//sayMyName()


// the variable number1, number2 that are passed in the fuction name are known as parameters
function addTwoNums(number1, number2){

    //console.log(number1 + number2);

}
// the numbers passed in function call are known as arguments 
 addTwoNums(3, 4)



// another way of writing functions instead of using console statement we can use return ex
function mulTwoNums(num1, num2){

   let result = num1 * num2
    return result
    
}
const result = mulTwoNums(2,5)
// console.log("Result:", result
// );

// NOTE: anything written after return statement is not going to be executed or printed and if we dont use return statement it wont define us the type of data returned  


function userLogInMessage(username){
    return `${username} Just Logged In `
}

// here if we run this without printing it will only give us the reffrence beacuse we only returned the functrion we didnt print it for that we need to wrap function call into console

//userLogInMessage("NASIR")
//console.log(userLogInMessage("NASIR"))


// functions using if else conditions 
function loginUserMessage(username){
    if(username === undefined){
        //console.log("please enter your username ")
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage())


function addToCart(product){
    if(!product){
        console.log("your cart is empty")
        return
    }
    return `${product}  has been added to cart`
}
//addToCart()
//console.log(addToCart("item"))

// how to bundle up the arguments in a function

function calculateCartPrice (...num1){
    return num1
}   

// here we were able to bundle up the arguments using spread/rest operator
//console.log(calculateCartPrice(100, 200, 50, 4000, 3400),)



// handling objects in a function

const user = {
    name: "nasir",
    userName: "nasir@google.com",
    age: 23

}

// here in function parameter we dont pass the object variable directly rather we pass anyObject as a parameter and object variable is used in function call as an argument
function handleObject(anyobject){
    console.log(`Name of the user is ${anyobject.name} and username is ${anyobject.userName}`)

}
handleObject(user)


// arrays in a function

const myNewArray = [200, 300, 44, 56]

function returnSecondValue(getArray){
    return getArray[3]
}
console.log(returnSecondValue(myNewArray));