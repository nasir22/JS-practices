// Dates

let myDate = new Date()

// calling method tostring on date gives us the cordinated universal time date and GMT
//console.log(myDate.toString())

// todatestring is used to fetch current date only 
//console.log(myDate.toDateString())

// this method returns a date as a string in ISO format
//console.log(myDate.toISOString())

// Returns the date as a string, formatted as a JSON date
//console.log(myDate.toJSON())

// returns the date in comma seperated form
//console.log(myDate.toLocaleString())

// object type 
//console.log(typeof myDate)


let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toDateString())
//console.log(myCreatedDate.toLocaleString())


let myTimeStamp =  Date.now()
//console.log(myTimeStamp.toLocaleString());

// comparing 2 dates from 1 jan 1970and the returned value will be in milliseconds

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime())


//console.log(Math.floor(Date.now()/1000));

//other date methods

let newDate = new Date()
//console.log(newDate.getMonth())
//console.log(newDate.getFullYear())
//console.log(newDate.getDay())
//console.log(newDate.now(),newDate.getFullYear())

newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(newDate)