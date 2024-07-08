const User = {
    _email: 'a@a.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}


// here we were using constructor function i.e new 
// now we will be using factory function
const val = Object.create(User)
console.log(val.email)

// getteers and setters are special methods that are used on properties and the process of getting and sending the data and overiding them is why getters and setters are used process overide