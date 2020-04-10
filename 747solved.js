
// Input: nums = [3, 6, 1, 0]
// Output: 1
let twiceNum = (num) => {
    if(num.length === 1) return 0;
    const arr = [...num].sort((a,b) => b-a);
    if(arr[0] >= 2*(arr[1])){
        for (const [index, element] of num.entries()) {
            if (element === arr[0]) return (index);
        }
    }
    return -1;
}

let nums = [1];
twiceNum(nums);