let test = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


//O(n) linear time complexity, O(1) constant space complexity

function linearSearch(term, arr){
    for(let i = 0; i < arr.length; i++){
        if (arr[i] === term) {
            console.log(`Search term ${term} found at index ${i}.`);
            return;
        }
    }
    console.log(`Search term ${term} not found in ${arr}`);
}
linearSearch('e', test);