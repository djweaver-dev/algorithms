

//O(n^2) time complexity

//Some notes on how I think this could be improved:
//Upon the first character match of term and str, you could check for
//a character match of the last index of term, ruling out the need
//for further operations if it is a mismatch.
//Once a full match has been made and counter has been incremented
//you could bypass all the characters used to make that match in the
//str and jump ahead, ie. i += term.length
//colt steele's version uses a check for a mismatch and a break statement
//which avoids the use of my iter variable.  He also initializes the
//iteration variable of the second for loop (in my case 'j') to zero.
//I did not do so because the first index was already checked for a match
//prior to the second for loop being initiated

const test = 'fizzizzlemynizzlefizzbuzzisizzlebuzzrizzlefizzbuzzizzlefizzbuzz';

function naiveSearch(term, str){
    let count = 0;
    let iter = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === term[0]){
            for(let j = 1; j < term.length; j++){
                if(str[i+j] === term[j]) iter--; //change this
                if(iter === term.length){
                    count++;
                    iter = 0;
                }
            }
        }
    }
    console.log(`The term "${term}" matched ${count} times.`);
}
naiveSearch('fizzbuzz', test);

class MyClass{};
let obj = new myClass();


function betterSearch(term, str){
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if (str[i] === term[0]){
            if (term === str.slice(i, i+term.length)) count++;
        }
    
    }
    console.log(`The term "${term}" matched ${count} times.`);
}
betterSearch('fizzbuzz', test);