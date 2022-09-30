//// LONGEST WORD ////

// set a strting woth two words in it first
// writea function that loops through 
//checks both words
//returns the length of the longer word


const findLongestWord = (arr) => {
    let longestLength = 0

    arr.forEach((word) => {
        longestLength = word.length
    })
    return longestLength
}

// Time = O(n)
// Space = O(n)

console.log(findLongestWord("hi", "hello"))
//-5