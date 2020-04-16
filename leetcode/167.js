

const twoSumV2 = (num, arr) => {

    let beg = 0;
    let end = arr.length-1;

    while((beg !== end)){
        if(arr[beg]+arr[end] === num) return console.log([beg+1, end]);
        if(arr[beg]+arr[end] > num) end--;
        if(arr[beg]+arr[end] < num) beg++;
    }
}

let numbers = [2,7,11,15]
let target = 9;
twoSumV2(target, numbers);


// const twoSum = (num, arr) => {
//     let start = 0, end = arr.length - 1;
//     while (start !== end) {
//         let sum = arr[start] + arr[end];
//       if (sum === num) {
//           return [start, end];
//       }
//       else if (sum > num) {
//           end--;
//       }
//       else {
//           start++;
//       }
//     }
//   };
  
//   let numbers = [2, 7, 11, 15];
//   let target = 9;
  
//   console.log(twoSum(target, numbers));