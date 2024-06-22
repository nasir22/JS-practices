const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb:  'ruby',
    swift: 'swift by apple'
}
for (const key in myObject) {
    console.log(`${key} shortcut for ${myObject[key]}`)
    }

// if we use forin loop on arrays it wil give us arrays keys i,e index of arrays eg

const langs = ["cpp", "python", "javascript"]
for (const key in langs) {
   //console.log(key)
   // we can write its values by passing the varaiable 
   console.log(`${key}, ${langs[key]}`)
}

//  and in forin loop we cant use map because thats not iterable in forin