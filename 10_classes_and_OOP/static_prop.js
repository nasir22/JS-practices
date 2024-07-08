class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`)
    }

      //   static keyword stops the   access to the method or property for every object that is instatntiated from this particular class or method
   static createId(){
        return `123`
    }
}

const nasir = new User("nasir")
console.log(nasir.createId())

class Teacher extends User {
    constructor (username, email){
        super(username)
        this.email = email 
    }
}


// so what it does is that static keyword doesnt lets u access the child keywords as well

const phone = new Teacher("samsung","samsung@sam.com")
console.log(phone.createId())