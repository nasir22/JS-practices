// we can declare objects in two ways singleton and literals  

// singleton if objects made through constructor 


// and 

// object literals

//declaring a symbol
const mySym = Symbol("key1")

const JsUser = {
    name : "Nasir",
    "last_Name" : "Khan",
    age : 22,
    location : "sopore",
    [mySym]: "mykey1",
    email : "nasir@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// if we are accessing through dot operator then we dont need to specify the object as string 
//console.log(JsUser.email)

// if we are not accessing through dot operator then we need to specify object as string in console.log
//console.log(JsUser["email"])

//anothger way of accessing objects 
//console.log(JsUser["last_Name"])

//console.log(JsUser[mySym])

// for updating the values 
JsUser.email = "nasir@google.com"
////console.log(JsUser)

// if we want no one should change our user values we can use freeze property

//Object.freeze(JsUser)
JsUser.email = "nasir@chatgpt.com"
//console.log(JsUser)


// used to check if the object is frooxen or not returns a boolean value

//console.log(Object.isFrozen("email"))

JsUser.greeting = function(){
    console.log("Hello JS user");
}

// here we didnt add roundbrackets () after greeting so the outpuit will be fucntion return back that means  fucntion doesnt execute but its reference is returned

//console.log(JsUser.greeting)

console.log(JsUser.greeting())


JsUser.greetingTwo = function(){

    //whenever we want to refference same object then we will use "This" the keyword will make sure all the properties of our object is shown now
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greetingTwo())