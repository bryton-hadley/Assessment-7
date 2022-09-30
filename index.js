/////SUM ZERO PROBLEM/////

//writing a function to add to zero 
// //step 1: delcare array
// const arr = [1, 2, 3, -2]

// //create a for loop to run array index 
// // nested for loop to compare the rst of array
// // if the numbers add to zero, break log true

// let addToZero = false

// for(let i = 0; i < arr.length; i++){
//     for(let b = 0; b < arr.length; b++){
//         if( i !== b){
//             if(arr[i] + arr[b] === 0){

//                 addToZero = true
//             }
            
//         }
//     }
// }
// console.log(addToZero)


//// UNiQUE CHARACTERS ////
//step 1: write a function that takes words as a param 
//step 2 use a for loop to loop through the word and check ad see if there are extra characters 

// function hasUniqueChars(word) {
//     let uniqueChars = new Set([])
    
//     for(let i = 0; i < word.length; i++){
//         uniqueChars.add(word[i])
//     }
//     return uniqueChars.size === word.length
// }
// console.log(hasUniqueChars('Moonday'))

//// PANAGRAM SENTENCE ////
//set an array for the alphabet
//write a function that can loop through any givin string to see if it is a pangram


function isPangram(string){
    let strArr = string.toLowerCase();

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

  console.log(isPangram('The quick brown fox jumps over the lazy dog!'))





//// LONGEST WORD ////

// set a strting woth two words in it first
// writea function that loops through 
//checks both words
//returns the length of the longer word



