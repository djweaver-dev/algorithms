const test = 'fizzizzlemynizzlefizzbuzzisizzlebuzzrizzlefizzbuzzizzlefizzbuzz';

//O(n^2) time complexity

//Some notes on how I think this could be improved:
//Upon the first character match of term and str, you could check for
//a character match of the last index of term, ruling out the need
//for further operations if it is a mismatch.
//Once a full match has been made and counter has been incremented
//you could bypass all the characters used to make that match in the
//str and jump ahead, ie. i += term.length

function naiveSearch(term, str){
    let count = 0;
    let iter = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === term[0]){
            for(let j = 1; j < term.length; j++){
                if(str[i+j] === term[j]) iter++;
                if(iter === term.length){
                    count++;
                    iter=0;
                }
            }
        }
    }
    return console.log(`The term "${term}" matched ${count} times.`);
}
naiveSearch('fizzbuzz', test);
