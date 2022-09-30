//// UNiQUE CHARACTERS ////
//step 1: write a function that takes words as a param 
//step 2 use a for loop to loop through the word and check ad see if there are extra characters 

function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    
    for(let i = 0; i < word.length; i++){
        uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
}
console.log(hasUniqueChars('Moonday'))

console.log(hasUniqueChars('Monday'))
