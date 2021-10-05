const mixerArray = ['PIZZA', 10, true, 25, false, 'WINGS']

const lowerCaseWords = mixerArray.filter(newArray =>{
    if(typeof newArray === 'string'){
        return newArray.toLowerCase()
    }
}).map(newArray => newArray.toLowerCase());

console.log(lowerCaseWords)

