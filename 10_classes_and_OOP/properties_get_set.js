class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return`${this._email.toUpperCase()}adnan`
    };

    set email(value){
        `${this._email = value}`
    }

    // if we want to get any value outside of our class then thats a getter and we need to explicitly mention return in getter but not in setter
    get password(){
       // return this._password.toUpperCase()

       // if we would do this way no can can know our original password beacuse now what we are giving him is the additional password i.e abcnasir
       return`${this._password}nasir`
    }

    // setters are used to set the value inside of a class
    set password(value){
        this._password = value
    }
}

const nasir = new User("nasir.ai", "abc")
console.log(nasir.password)
console.log(nasir.email)