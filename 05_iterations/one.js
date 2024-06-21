// for loop

for (i = 0; i <= 10; ++i){
    const values = i;
    //console.log(values);
}


for (let i = 1; i <= 10; i++) {
    //const element = array[i];
    for (let j = 1; j <= 10; j++) {
        //const element = array[j];
        console.log( i + '*' + j, '=' + i*j);
        
    }
    
}

// for loop using arrays

const myArr = ["ironman", "batman", "superman"]
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element)
    
}

// break and continue

for (let index = 0; index <=20; index++) {
    if ( index == 5){
        console.log(`detected 5`)
        break;
    }
    console.log(`value of i is : ${index}`)
}


// continue
for (let index = 0; index <=20; index++) {
    if ( index == 5){
        console.log(`detected 5`)
        continue;
    }
    console.log(`value of i is : ${index}`)
}