const isUserLoggedIn = true

if(isUserLoggedIn){
    console.log("hi there the statement is true ")
    
}

// const Temperature = 30

// if (Temperature > 45){
//     console.log("temperature is less than 30")
// }
// else{
//     console.log("temperature is greater than 30");
// }


// scope related conditions 

let score = 200

if(score > 100){
    const power = "fly"
   // console.log(`user power: ${power}`)
}
// now if we have printed it outside the local scope it would run into an error eg below and if we had used var declaration then we could have printed it outside the local scope because var is declared in global scope 

//console.log(`user power: ${power}`)

// implicit scope  

const balance = 1000

// here we didnt used the scope but it is using implicit scoping but the catch is we have to write the code in only one line we can write it in multiple lines with comma seprated at the end of every ststement but that is not a good practice 

if (balance > 500) console.log("test")


// if elseif else

// const bal = 1000

// if(bal < 500){
//     console.log("balance less than 1000")
// }
// else if (bal < 750){
//     console.log("balance is less than 750")
// }
// else if (bal < 900){
//     console.log("balance is less than 900")
// }
// else {
//     console.log("balance is less than 1200")
// }


// foe checking multiple conditions 

const userLoggedIn = true
const debitCard = true

const loggedInFromGoogle = true
const loggedInFromEmail = true

// the && statement lets you check both statements at the same time 
if (userLoggedIn && debitCard) console.log("allow user to buy");

// the or statement ||lets you check from multiple statements

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in ")
}