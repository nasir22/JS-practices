const userEmail = []

// here we are not checking any condition we just pased the parameter userEmail we didint check if its true or false thtas wheretgruthy and falsy values comes into play 
if(userEmail){
    console.log("got user email")
}
else{
    console.log("dont have user email")
}

// types of falsy values

// false, 0, -0, BigInt, "", null, undefined, NaN

// truthy values

//"0", 'false', "", [], {}, function(){}

// how to detect if an array is empty or not 

if (userEmail.length == 0){
    console.log("array is empty")
}


// how to detect if an array is empty or not

const emptyObj ={}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty")
}



// nullish coalescing operator (??): null undefined

//it has been designed to tackle null and undefined values whenever we call values from database firebase appwrite

let val1;
//val1 = 5 ?? 10
// here it checks the first value if its null then it checks the second value if thats not null then the null gets rejected and other value is printed and other value is not present or thats also null then null gets printed 

//val1 = null ?? 12

val1 = undefined ?? 66

console.log(val1)


// trinary operator

const iceTeaPrice = 100 
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")