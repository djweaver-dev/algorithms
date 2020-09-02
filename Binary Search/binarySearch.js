
//O(log n) time complexity

// iterative binary search
function binarySearch(target, array){
    let beg = 0;
    let end = array.length -1;
    let mid = Math.floor((beg+end)/2);
    
    while (array[mid] !== target && beg <= end && end >= beg){
        if (array[mid] > target) end = mid - 1;
        else beg = mid + 1;
        mid = Math.floor((beg+end)/2);
    }
    array[mid] === target ? console.log(mid) : false;
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
binarySearch(19, nums);