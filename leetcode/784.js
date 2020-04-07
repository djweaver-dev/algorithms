// Given a string S, we can transform every letter individually to be lowercase or 
// uppercase to create another string.  Return a list of all possible strings we could create.

// Examples:
// Input: S = "a1b2"
// Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

// Input: S = "3z4"
// Output: ["3z4", "3Z4"]

// Input: S = "12345"
// Output: ["12345"]

//TODO FINISH THIS FUCKING THING

var letterCasePermutation = function(S) {

    let results = [];
//    for(let i = 0; i < S.length; i++) {
        
        
//        if(S.charCodeAt(i) >= 65 && S.charCodeAt(i) <= 90 || S.charCodeAt(i) >= 97 && S.charCodeAt(i) <= 122) {
                
            
            let sArr = S.split('');
            for(let j = 0; j < S.length; j++) {
                    
                //if S[i] is lowercase
                if(sArr[j].charCodeAt(0) >= 97 && sArr[j].charCodeAt(0) <= 122){
                    sArr[j] = sArr[j].toUpperCase();
                    results.push(sArr.join(''));
                }
                    
            }
            for(let k = 0; k < S.length; k++) {
                if(sArr[k].charCodeAt(0) >= 65 && sArr[k].charCodeAt(0) <= 90){
                    sArr[k] = sArr[k].toLowerCase();
                    results.push(sArr.join(''));
                }
            }
        


            if(results.length===0) return S
            else return results.reverse();

};


//65-90 UPPERCASE
//97-122 lowercase
//49-57 1-9 numeric

const string = '1234';

letterCasePermutation(string);