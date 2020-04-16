// Problem No. 1299

// Given an array arr, replace every element 
// in that array with the greatest element 
// among the elements to its right, and 
// replace the last element with -1.

// After doing so, return the array.

// Example 1:
// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]

const replaceElements = (numArr) => {
    let results = [];
    for(i = 0; i < numArr.length; i++){
        let lgNum = 0;
        for(j = i+1; j < numArr.length; j++){
            if(numArr[j] > lgNum) lgNum = numArr[j];
        }
        results.push(lgNum);
    }
    results[results.length-1] = -1
    console.log(results);
}
const test = [17,18,5,4,6,1];
replaceElements(test);