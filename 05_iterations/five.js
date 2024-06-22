const coding = ["js", "ruby", "java", "cpp"]

// foreach loop takes a callback function
// a callback function means function without a name
// because the function is performaing inside an array so we dont have to pass every parameters to it it will fetch the params on his own we just specify the name of those params assigned to them like we did here as val
coding.forEach(function(val){
    console.log(val)
})

// example using arrow function

// herewe didnt specified the name of arrow function beacuse foreach takes callback function a function with no name 
coding.forEach( (item) => {
    console.log(item)
})

// we can use another function as an parameter in foreach eg

function printMe(item) {
    console.log(item);
}

// here we didnt execute the print me function we just passed its reference as a param to froeach it executed himself 
coding.forEach(printMe)


// foreach loop takes three arguments items indexes and arrays 

coding.forEach((item, index, arr) => {
    console.log(item, index, arr)
})

// declaring objects in an array
const myCoding = [
    {
        languageName: "javaScript",
        languageFileName:"js"
    },

    {
        languageName: "python",
        languageFileName:"py"
    },

    {
        languageName: "java",
        languageFileName:"java"
    },
]
myCoding.forEach((item) => {
    console.log(item.languageName)
})
