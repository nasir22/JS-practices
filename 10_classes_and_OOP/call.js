function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called")
}


// "call" method passes the current execution context to the another function by explicitly mentioning "this" 
//  in below function we passed the setUsername execution context t0 the another function that is creteUser so that we got the access of the username that is defined in the setUsername function 

function createUser(username, email, password){
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

// here we created the new instance of the previously defined function and intialized with the values that will now be passed onto the function defined above 
const chai = new createUser("nasir", "nasir@nasir.com", "123")
console.log(chai);