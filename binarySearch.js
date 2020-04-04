let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//O(log n) time complexity

//Some thoughts on improvement:
//You could check each arr[beg] and arr[end] for a match as
//you are already including those operations in the logic

function binarySearch(term, arr){
    let beg = 0;
    let end = arr.length -1;
    let mid = Math.floor((beg+end)/2);

    while(arr[mid] !== term && beg <= end && end >= beg){
        if (arr[mid] > term) end = mid - 1;
        else beg = mid + 1;
        mid = Math.floor((beg+end)/2);
    }
    arr[mid] === term ? console.log(mid) : false;
}

binarySearch(19, test);