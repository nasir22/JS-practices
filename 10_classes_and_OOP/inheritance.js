class User{
    constructor(username){
        this.username = username
    }

    logMe (){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        
        // here the super keyword will automatically check which class it is extending and it will go to that class constructor and automatically takes this / in implicit way  and sets the value in the constructor class 

        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
};

const chai = new Teacher("nasir","nasir@gg.com","123")

chai.addCourse()
const coffee = new User("adnan")
coffee.logMe()

console.log(chai === Teacher); // false because its not equal but its an instance of this

// here we are checking if its an instance of 
console.log(chai instanceof User)