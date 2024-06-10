//basic conversions

// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


//console.log("2" > 1); //is true because its not a strict check and here data conversion happens implicitly converted string "2" into a number 
// console.log("02" > 1);

// console.log(null > 0)
// console.log(null == 0);


 //comparisons convert null to a number, treating it as 0 thats why null >= 0 is true and null > 0 is false 

//  console.log(null >= 0);


//  console.log(undefined == 0);
//  console.log(undefined > 0);
//  console.log(undefined < 0);
//  console.log(undefined >= 0);

//  === is used to strictly check the statement eg 
 console.log(2 === 2); // true 
 console.log("2" === 2); // is false beacuse strict check does not only checks the valiues but it checks there datatypes as well hence here string cant be compared to a number thats why it gives false 