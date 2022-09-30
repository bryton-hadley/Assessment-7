///SUM ZERO PROBLEM/////

// writing a function to add to zero 
//step 1: delcare array


//create a for loop to run array index 
// nested for loop to compare the rst of array
// if the numbers add to zero, break log true



const addToZero = (arr) => {
  for(let i = 0; i < arr.length; i++){
    for(let b = 0; b < arr.length; b++){
        
            if(arr[i] + arr[b] === 0){

                addToZero = true
            }
            
        
    }
}
return false
}

console.log(addToZero([]))
// -> False

console.log(addToZero([1]))
// -> False

console.log(addToZero([1, 2, 3]))
// -> False

console.log(addToZero([1, 2, 3, -2]))
// -> True



