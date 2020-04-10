// Given the array nums, for each nums[i] find out how many numbers in the 
// array are smaller than it. That is, for each nums[i] you have to count 
// the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// // Example 1:

// // Input: nums = [8,1,2,2,3]
// // Output: [4,0,1,1,3]
// // Explanation: 
// // For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
// // For nums[1]=1 does not exist any smaller number than it.
// // For nums[2]=2 there exist one smaller number than it (1). 
// // For nums[3]=2 there exist one smaller number than it (1). 
// // For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

// // Example 2:

// // Input: nums = [6,5,4,8]
// // Output: [2,1,0,3]

// // Example 3:

// // Input: nums = [7,7,7,7]
// // Output: [0,0,0,0]

// const myFunction = (arr) => {
//     let sArr = [];
//     for(let i = 0; i < arr.length; i++){
//         sArr[i] = arr[i];
//     }
//     sArr.sort((a,b) => b - a);
//     let results = [];
//     let track = {};
//     for(let i = 0; i < sArr.length; i++){
//         track[sArr[i]] = ((sArr.length-1) - i);

//     }
//     for(let i = 0; i < sArr.length; i++){
//         results.push(track[arr[i]]);

//     }

//     console.log(results);
// }
// let nums = [7,7,7,7];
// myFunction(nums);



    const myFunction = (arr) => {
        let arr2 = [...arr].sort((a,b) => b - a);
        let track = {};
        for(let i = 0; i < arr2.length; i++){
            track[arr2[i]] = ((arr2.length-1) - i);
        }
        let results = [];
        for(let i = 0; i < arr.length; i++){
            results.push(track[arr[i]]);
        }
        console.log(results);
    }
    let nums = [6, 5, 4, 8];
    myFunction(nums);