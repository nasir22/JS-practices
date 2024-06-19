var c = 300

// if we print a outside the block scope it will give us the global value thats 222 and if we print it in block scope it will give us value of block scope thats 10 

let a = 222

if(true){
    let a = 10
    const b = 34
    var c = 48 
    console.log("block scope value of 'a':", a);
    
}

// a and b does not get printed because they are in block scope "{ these curly parenthesis means scope}"  and we didnt return anything

//console.log(a);
//console.log(b);

// global scope value of 'a'
console.log("global scope value of 'a':", a)


console.log(c);
// var got printed because it is in global scope so the problem with var is if some other varaible is declared with same name using var the newer replaces trhe previous value for an exapmle if we declared the same variable in global scope it will be changed with the next declared same varaibale name 


// Note: the global scope variable is available in the block scope but vice versa is not true 


// closures
// the example of closure is that if we have parent and child functions then child function can use the variables / properties of parent functions

 function one(){
    const username = "nasir"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    console.log(website)
    two()
 }
 
 one()