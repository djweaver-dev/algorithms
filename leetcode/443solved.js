// Problem No. 443

// Given an array of characters, compress it 
// in-place. The length after compression must 
// always be smaller than or equal to the original 
// array. Every element of the array should be a 
// character (not int) of length 1. After you are 
// done modifying the input array in-place, return 
// the new length of the array.

// Input:
// ["a","a","b","b","c","c","c"]

// Output:
// Return 6, and the first 6 characters of the 
// input array should be: ["a","2","b","2","c","3"]

const compress = (strArr) => {
    let count = 1;
    let iter = 0;
    let strLen = strArr.length;

    while (strLen > 0) {
        if(strArr[iter] === strArr[iter+1] && strLen !== 1){
            count++;
            iter++;
        } else if (count === 1) {
            strArr.push(strArr[iter]);
            strArr.shift();
            iter = 0;
        } else {
            strArr.push(strArr[iter]);
            let cSplit = count.toString().split('');
            for(let i = 0; i < cSplit.length; i++) strArr.push(cSplit[i]);
            for(let i = 0; i < count; i++) strArr.shift();
            count = 1;
            iter = 0;
        }
        strLen--;
        
    }
    //return(strArr.length);
    return(strArr.length);
}
const test = ["a","a","a","b","b","a","a"];
compress(test);
