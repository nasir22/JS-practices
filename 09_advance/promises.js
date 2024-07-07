
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


const promiseOne = new Promise(function(resolve, reject){
    // do an asynct task
    //DB calls, crytography, network
    setTimeout(function(){
        console.log("async task completed")
        resolve()
    },1000)
})

    // the resolve is directly connected to "then" method and in order to consume the promise we need to call or invoke the resolve method
   

promiseOne.then(function(){
    console.log("promise consumed")
})


// here we created a promise that takes a callback fun with 2 methods resolve and reject and the the promise is connected to 'then' directly with resolve 'then' also takes a callback function so whenever the promise is consumed the 'then' method is runned 
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task completed")
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved")
})

// promise three 

// here we passed the data in promise and then we called the data in "then" method which is directly connected to resolve thats how we get the data
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "nasir", email:"adney377@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"adnan", email: "adney@gmail.com"})
        }else {
            reject('ERROR: Something went wrong')
        }
    },1000)

})


//here we are using chaining methods and the returned value of first becomes the param of next function 
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("the promise is either resolved or rejected"))



// here we are using async awaut but thayt doesnt use catch implicitly so in order to handle error we need to writethe statements in try catch block 
const promiseFive =  new Promise((resolve, reject) =>{
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "javascript" , password: "123"})
        }else {
            reject("ERROR: js went wrong")
        }
    },1000);
});

async function consumepromiseFive(){
    try {
        
    const response = await promiseFive
    console.log(response)
    } catch (error) {
        console.log(error)
    }

}


// async await is same as then and catch which waits for some time untill the work is done ifthe  if the task is completed then it  moves to another tasks or otherwise gives error 
consumepromiseFive()

async function getAllUsers(){
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
            const data = await response.json()
            console.log(data);
        } catch (error) {
            console.log("E: ", error);
        }
    }
    
    getAllUsers()


    fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available