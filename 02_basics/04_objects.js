// this is singleton object declaration

//const tinderUser = new Object()

// this is non singleton object dec

const tinderUser = {}

tinderUser.id = "123zxc"
tinderUser.name = "adnan"
tinderUser.email = "adnan@google.com"
//console.log(tinderUser)

// Object.freeze(tinderUser)
// tinderUser.name = "nasir"

// declaring objects in objects 
const regularUser = { email:"asb@gmail.com",
fullname:{
    userfullname:{
    firstname : "nasir",
    lastname : "khan"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname )

// merging objects 
const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a", 4: "b"}


// two ways for merging objects 
//1: spread operator

// spread operator 
let persons = {
    name : "jacob",
    job_profile :"web developer" 
};
let Comp = {
    company: "Microsoft",
    location: "Australlia"
};
let proffesion = {
    ...persons,
    ...Comp
};
console.log(proffesion);

//If objects have a property with the same name, then the right-most object property overwrites the previous one. For example:

let job = {
    jobTitle: 'JavaScript Developer',
    country: 'USA'
};

let location = {
    city: 'London',
    country: 'England'
};

let remoteJob = {
    ...job,
    ...location
};

console.log(remoteJob);


// 2: another is through assign method

// this way of merging two objects will return objects in objects not a single object

//const obj3 = {obj1,obj2}

// this way is used for merging multiple objects it returns the value in one object 

const obj3 = Object.assign({}, obj1, obj2)
//console.log(obj3)


// whwnever the values comes through database it comes as an array of objects example

let users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },

    {
        id: 2,
        email: "qwe@gmail.com"
    },

    {
        id: 3,
        email: "zxc@gmail.com"
    }
]

// this is how we will apply array methods on objects 
console.log(users[1].email);

// here the datatype of the keys and values are array now we can apply array methods as well 

console.log(tinderUser);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

// whenever we want to check if this property exists in object or not 
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
