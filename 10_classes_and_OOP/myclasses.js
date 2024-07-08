// ES6 
// using classes or methods 
// constructor is called whenever the object from a class is intialized by the "new keyword"
// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
        
//     }
// }

// const chai = new User("adnan","adnan@adnan.com", "123" )
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername())



// behind the scenes if we would have done this through functions

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}


const coffee = new User("adnan","adnan@adnan.com", "123" )
//const {chaiaurcoffee: coffee} = chaiaurcoffee

console.log(coffee.encryptPassword());
console.log(coffee.changeUsername())

